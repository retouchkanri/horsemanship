import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container not-found">
      <p className="not-found__code">404</p>
      <h1 className="not-found__title">ページが見つかりませんでした</h1>
      <p>お探しのページは移動または削除された可能性があります。</p>
      <p className="not-found__back">
        <Link href="/">ホームへ戻る</Link>
      </p>
    </main>
  );
}
