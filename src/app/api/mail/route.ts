import nodemailer from "nodemailer";
import { forms, isFormId } from "@/lib/forms";

const MAX_ENTRIES = 80;
const MAX_KEY = 200;
const MAX_VALUE = 5000;
const EMAIL_RE = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[^\s@<>()",;:]+$/;

type Entry = [string, string];

function parseEntries(value: unknown): Entry[] | null {
  if (!Array.isArray(value) || value.length === 0 || value.length > MAX_ENTRIES) return null;
  const entries: Entry[] = [];
  for (const item of value) {
    if (
      !Array.isArray(item) ||
      item.length !== 2 ||
      typeof item[0] !== "string" ||
      typeof item[1] !== "string" ||
      item[0].length === 0 ||
      item[0].length > MAX_KEY ||
      item[1].length > MAX_VALUE
    ) {
      return null;
    }
    entries.push([item[0], item[1]]);
  }
  return entries;
}

function smtpConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.MAIL_TO && process.env.MAIL_FROM);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const { formId, entries: rawEntries, _hp } = (body ?? {}) as Record<string, unknown>;
  if (!isFormId(formId)) {
    return Response.json({ ok: false, error: "invalid_form" }, { status: 400 });
  }
  const entries = parseEntries(rawEntries);
  if (!entries) {
    return Response.json({ ok: false, error: "invalid_entries" }, { status: 400 });
  }
  // スパム対策（人には見えない入力欄に値が入っていたら破棄）
  if (typeof _hp === "string" && _hp !== "") {
    return Response.json({ ok: true });
  }

  const { subject } = forms[formId];
  const email = entries.find(([key]) => key === "email")?.[1] ?? "";
  const text = [
    `${subject}`,
    "ウェブサイトのフォームから以下の内容が送信されました。",
    "",
    ...entries.map(([key, value]) => `■${key}\n${value}\n`),
    `送信日時：${new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })}`,
  ].join("\n");

  if (!smtpConfigured()) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[mail] SMTP未設定のため送信をスキップしました（開発環境）\n${text}`);
      return Response.json({ ok: true, delivered: false });
    }
    console.error("[mail] SMTP_HOST / MAIL_FROM / MAIL_TO が設定されていません");
    return Response.json({ ok: false, error: "not_configured" }, { status: 500 });
  }

  try {
    const port = Number(process.env.SMTP_PORT ?? 587);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
      auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS ?? "" } : undefined,
    });
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      replyTo: EMAIL_RE.test(email) ? email : undefined,
      subject,
      text,
    });
    return Response.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("[mail] 送信に失敗しました", error);
    return Response.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
