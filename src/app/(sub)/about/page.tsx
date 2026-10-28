import { Img } from "@/components/Img";
import { PageTitle } from "@/components/PageTitle";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "引退馬からの馬術競技馬が集結！中学生・高校生のための馬術大会「全国中高生馬術選手権大会（千葉県山武市）】",
  description:
    "引退競走馬の活躍の場を広げ！競馬の役目を終えた引退馬たちを乗馬での馬術競技馬への転用調教をおこない、中学生・高校生の馬術大会を開催します。全国中学生・高校生馬術選手権大会（全国中高生馬術選手権大会）で引退馬たちが馬術競技馬として活躍！引退馬（引退競走馬）で、日本全国の埋もれた若い馬術競技者の発掘へ！",
  keywords: "引退競走馬,全国,高校生,馬術,乗馬,大会,競技,馬術競技,取材,評判",
  path: "/about/",
});

export default function Page() {
  return (
    <article id="post-25" className="entry">
      <PageTitle
        sub={<span className="t-navy">中学２年生～高校生の全国馬術選手権大会</span>}
        main={<span className="t-red">全国中高生馬術選手権大会とは!?</span>}
      />
      <p>
        <Img src="/images/theme/img/about/img_001.jpg" className="alignright" />
        この全国中高生馬術選手権大会は、既存の「全日本高等学校馬術選手権大会（通称：インターハイの馬術競技）とはまた違い、
        <strong className="t-olive marker">
          全国高等学校馬術連盟に加盟されていない高校や、高校の馬術部に所属されていない個人（例えば、一般の乗馬クラブや乗馬スクールに所属されている高校生、または保護者の同伴が可能な中学２年生以上）
        </strong>
        であれば、参加できる中学生・高校生のための馬術大会です。
      </p>
      <p>
        また、一方でこの馬術大会に出場（使用）する馬たちは、すべて
        <span className="t-red">『引退競走馬の転用調教により乗馬競技馬として活躍している馬たち』</span>
        であり、各選手たちが抽選により、それぞれ騎乗する馬が決まり、同じ馬に2名・3名の選手が騎乗し、上位者が勝ち上がる「貸与馬方式（たいよばほうしき）」を取り入れたトーナメントで優勝者・入賞者が決定いたします。そのため、馬のレベルの差に関係なく「出場選手個人の技術とキャリアのみで勝敗が決定」する方式を取り入れています。この貸与馬方式の馬術競技は、大学の馬術界などの「全日本学生馬術選手権大会」などでも取り入れられています。
      </p>
      <p>
        <Img
          src="/images/theme/img/about/img_002.jpg"
          className="aligncenter"
          sizes="(min-width: 768px) 640px, 100vw"
        />
      </p>
      <p>
        それゆえに、
        <strong className="marker">
          日本全国の埋もれた若い馬術競技者の発掘と、今後の日本の馬術界を背負う若者の育成、さらには競走馬を引退した引退競走馬の活躍の場などを広げることでの乗馬普及を目的
        </strong>
        とし、また真のジュニア（中学生・高校生）のチャンピオンを決めることにより、お互いに切磋琢磨し、より技術と精神力の向上を目指すことができる有意義な馬術大会であると自負しています。この全国中高生馬術選手権大会が続くことによって、
        <strong className="marker">
          日本馬術界の発展と共に、馬術というスポーツを通じての青少年の健全育成、また、引退競走馬の活躍の場を広げていけるよう取り組んで参ります。
        </strong>
        皆様のご参加をお待ちしています。
      </p>
      <p className="signature">
        <strong>
          全国中高生馬術選手権大会
          <br />
          実行委員会　代表　野口 佳槻
        </strong>
      </p>
    </article>
  );
}
