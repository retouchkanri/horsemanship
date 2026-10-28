import { PageTitle } from "@/components/PageTitle";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "お問い合わせありがとうございました。",
  description: "お問い合わせありがとうございました。",
  keywords: "馬術大会,高校馬術,インターハイ,大学馬術セレクション制度,日本大学,専修大学,明治大学,馬術部,進学",
  path: "/contact_thanks/",
});

export default function Page() {
  return (
    <article id="post-9" className="entry">
      <PageTitle main={<span className="t-navy">お問い合わせありがとうございました。</span>} />
      <p>
        この度は、お問い合わせありがとうございました。
        <br />
        お問い合わせ内容を確認いたしまして、折り返しメールまたはお電話にてご連絡させて頂きます。
      </p>
    </article>
  );
}
