import { PageTitle } from "@/components/PageTitle";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "お申込みありがとうございました。",
  description: "お申込みありがとうございました。",
  keywords: "馬術大会,高校馬術,インターハイ,大学馬術セレクション制度,日本大学,専修大学,明治大学,馬術部,進学",
  path: "/support_thanks/",
});

export default function Page() {
  return (
    <article id="post-116" className="entry">
      <PageTitle main={<span className="t-navy">お申込みありがとうございました。</span>} />
      <p>
        この度は、協賛スポンサーへのお申込みを頂きましてありがとうございました。
        <br />
        送信頂きました内容を確認させて頂き、当社担当より折り返し、メールまたはお電話にてご連絡をさせて頂きます。（なお、簡単な審査をさせて頂いた結果、誠に申し訳ございませんが、ご希望に添えない事もございますことをご了解ください。）
        <br />
        ３～４日が経過しても、連絡がない場合は、大変、お手数ですが、電話{" "}
        <strong>
          <a href="tel:05068753336" className="t-red tel fs-lg">
            050-6875-3336
          </a>
        </strong>
        （事務局）まで直接、お問い合わせください。
      </p>
    </article>
  );
}
