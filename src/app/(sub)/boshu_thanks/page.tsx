import { PageTitle } from "@/components/PageTitle";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "エントリーの仮お申し込み有難うございました。",
  description: "エントリーの仮お申し込み有難うございました。",
  keywords: "インターハイ,高校,馬術,申込,全国,高校生,選手権,大会",
  path: "/boshu_thanks/",
});

export default function Page() {
  return (
    <article id="post-14" className="entry">
      <PageTitle main={<span className="t-green">エントリーの仮お申し込み有難うございました。</span>} />
      <p>
        全国中高生馬術選手権大会の仮お申し込みを頂きまして有難うございました。
        <br />
        送信内容をもとに、当社にて選考をさせて頂き、選考結果をメールまたはお電話させて頂きます。
        <br />
        <span className="note">※なお、選考の中身についてはご回答できませんので予めご了承ください。</span>
      </p>
      <div className="card">
        <p>
          <strong>◆主催者・連絡先◆</strong>
          <br />
          〒289-1213　千葉県山武市雨坪10番地
          <br />
          TEL：<a href="tel:05068753336">050-6875-3336</a>
        </p>
        <p>
          全国中高生馬術選手権大会
          <br />
          実行委員会　事務局
        </p>
      </div>
    </article>
  );
}
