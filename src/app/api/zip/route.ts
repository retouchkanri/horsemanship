/** 郵便番号から住所を取得（zipcloud の郵便番号検索API を中継） */
export async function GET(request: Request) {
  const zipcode = new URL(request.url).searchParams.get("zipcode") ?? "";
  if (!/^\d{7}$/.test(zipcode)) {
    return Response.json({ error: "invalid_zipcode" }, { status: 400 });
  }

  try {
    const res = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`, {
      signal: AbortSignal.timeout(5000),
      next: { revalidate: 60 * 60 * 24 * 7 },
    });
    if (!res.ok) throw new Error(String(res.status));
    const data = (await res.json()) as {
      results: { address1: string; address2: string; address3: string }[] | null;
    };
    const hit = data.results?.[0];
    if (!hit) return Response.json({ error: "not_found" }, { status: 404 });
    return Response.json(
      { pref: hit.address1, city: `${hit.address2}${hit.address3}` },
      { headers: { "Cache-Control": "public, max-age=86400" } },
    );
  } catch {
    return Response.json({ error: "lookup_failed" }, { status: 502 });
  }
}
