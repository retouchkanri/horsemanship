import { Img } from "@/components/Img";
import { PageTitle } from "@/components/PageTitle";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "引退馬・肥育場からの「馬術競技馬」へ転身！全国高校生馬術選手権大会／引退馬を救う！",
  description:
    "競馬の役目を終えた引退馬・肥育場からの馬たちを再調教して、馬術競技馬に転身！中学生・高校生たちの全国高校生馬術選手権大会で活躍する馬たちの紹介！馬の学校 東関東馬事高等学院で過ごす馬たちの紹介！スポンサー募集・協賛募集。馬術競技として活躍する引退競走馬の紹介【馬の紹介】",
  keywords: "競技馬,購入,馬の売買,売り馬情報,引退競走馬,乗馬レッスン馬,乗用馬",
  path: "/horse/",
});

export default function Page() {
  return (
    <article id="post-16" className="entry">
      <PageTitle sub="全国中高校生馬術選手権大会" main="この馬術大会で活躍する競技馬の紹介" />
      <p>
        <Img src="/images/theme/img/horse/img_001.jpg" className="alignright" />
        この全国中高生馬術選手権大会では、主に競走馬を引退した<strong className="marker">＂引退競走馬＂</strong>
        を馬術競技馬に転用調教をおこなった馬たちを活用しております。各選手たちが予め抽選により、それぞれ騎乗する馬が決まり、同じ馬に2名・3名の選手が騎乗し、上位者が勝ち上がる「貸与馬方式（たいよばほうしき）」を取り入れたトーナメントで優勝者・入賞者が決定いたします。そのため、馬のレベルの差に関係なく「出場選手個人の技術とキャリアのみで勝敗が決定」する方式を取り入れています。この貸与馬方式の馬術競技は、大学の馬術界などの「全日本学生馬術選手権大会」などでも取り入れられています。過去の全国高校生馬術選手権大会で活躍した馬をご紹介します。
      </p>
      <p className="note">
        ※過去に活用した競技参加馬の紹介であり、次回戦で活用する馬は全国高校生馬術選手権大会の当日に発表いたします。あくまで過去の参考例としてご参照ください。
      </p>
    </article>
  );
}
