import Link from "next/link";
import { Img } from "@/components/Img";
import { PageTitle } from "@/components/PageTitle";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "馬術競技会取材／全国高校生馬術選手権大会の取材依頼はこちら",
  description: "高校生たちが精一杯頑張る馬術競技大会！２日間の全国高校生馬術選手権大会の取材・リリース！",
  keywords: "新聞,取材,馬,学校,スポーツ,乗馬大会,女子高生,高校生,東京,千葉,夢",
  path: "/koho/",
});

export default function Page() {
  return (
    <article id="post-29" className="entry">
      <PageTitle sub="全国高校生馬術選手権大会開催にあたり…" main="取材・リリース関係者様へ" />
      <Img src="/images/theme/img/koho/img_001.jpg" className="alignright" />
      <p>
        この全国高校生馬術選手権大会は、既存の「全日本高等学校馬術競技大会（通称：インターハイの馬術競技大会）」とは違い、高校馬術部に所属していない個人や、全日制高校や通信制高校を問わず、国内の高等学校への在学があり、乗馬経験があり馬術競技会への出場経験があれば、だれでも参加できる馬術競技大会です。
      </p>
      <p>
        競技会で出場する馬は、予め主催者が準備した馬を活用し、全員が同じ条件で競技に参加することによって、馬の良し悪しに関係なく、出場選手個人の技術とキャリアで勝負する「貸与馬戦（たいよばせん）」となっており、この貸与馬方式は、大学馬術などの全日本学生馬術選手権大会などでも取り入れている馬術競技スタイルでもあります。
      </p>
      <p>
        それ故に、日本全国の埋もれた若い馬術競技者の発掘と、今後の日本馬術界を背負う若者の育成を目的とし、また真の高校生のチャンピオンを決めることによって、互いに切磋琢磨し、より技術と精神力の向上を目指していく大会としたいと考えております。このような馬術競技大会を開催することで、夢に向かって精一杯努力する高校生たちの素晴らしい姿をぜひ、取材やリリースして頂ければと期待しています。詳細は、
        <Link href="/contact/">お問い合わせフォーム</Link>より必要事項をご連絡ください。
      </p>
    </article>
  );
}
