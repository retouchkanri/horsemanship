import Link from "next/link";
import type { ReactNode } from "react";
import { Img } from "@/components/Img";
import { PageTitle } from "@/components/PageTitle";
import type { ImageSrc } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata = pageMetadata({
  title: "引退馬を馬術競技馬に転身！中学生・高校生のスポーツ振興、青少年の育成に活用！全国中高校生馬術選手権大会へ",
  description:
    "全国高校馬術競技大として全国高校生馬術選手権大会を開催！引退競走馬を馬術競技馬に転身した馬たちが集結。中学生・高校生のための馬術大会。全国高校生馬術選手権大会（主催：馬事学院）千葉県山武市雨坪10番地、馬術スポンサー募集。",
  keywords: "全国,全日本,馬術,高校生,参加条件,参加したい,評判,口コミ,馬術選手権大会",
  path: "/qa/",
});

const items: { q: ReactNode; a: ReactNode }[] = [
  {
    q: "高校の馬術部には所属していませんが、全国中高校生馬術選手権大会に出場できますか？",
    a: (
      <>
        全日本高等学校馬術競技大会（通称：インターハイ馬術競技大会）とは違い、
        <strong className="t-pink">
          高校馬術部に所属してなくても個人で乗馬クラブに所属していて、馬術競技経験があれば申込みが可能
        </strong>
        です。1回戦60cm～決勝戦100㎝程度になります。比較的安心して飛越する馬を主催者側で用意しています。詳細は、
        <strong>
          <Link href="/boshu/">参加要項のページ</Link>
        </strong>
        をご参照ください。
      </>
    ),
  },
  {
    q: "保護者の同伴は必要でしょうか？また、所属している乗馬クラブのコーチなどの同伴は可能ですか？また事前に所属している乗馬クラブや馬術部に対して、承認を取る必要はありますか？",
    a: (
      <>
        原則として、
        <strong className="t-pink">申込時に「保護者の承認を得ることができれば、特に保護者の同伴は必要ではありません</strong>
        」また、申込みにあたり「所属の乗馬クラブや馬術部等に事前に承認を取ることを条件にはしておりません」しかし、相談できる状況であれば普段、練習を見て頂いているスタッフさまからのアドバイスも非常に貴重だと思います。また、指導者、アドバイザーの同伴も可能です。（同伴者の下乗り、馬の調整等はできません）
        <span className="t-red">※中学2年・3年生の方は保護者またはコーチの同伴は必須となります。</span>
      </>
    ),
  },
  {
    q: "この競技へ参加申込みを行った場合でも、「参加選手として選考されない場合」もあるのでしょうか？",
    a: (
      <>
        はい、極力たくさんの方に楽しんでいただけるよう心掛けておりますが、年々開催回数を重ねるごとにお陰様で参加人数（お申込み人数）が増えてきています。その際、タイムスケジュールや馬匹の確保状況により
        <strong className="t-pink">
          「参加申込みをして頂いた皆さんの中から選考させて頂く事により、やむを得ず参加をお断りさせて頂く場合があります」また、馬術競技会への経験実績等
        </strong>
        を踏まえて申し込み後に、主催者側にて事前審査を行いますのでご了承ください。
      </>
    ),
  },
  {
    q: "自分が競技に出場する馬は、どのようにして決定されますか？",
    a: "各選手が出場する馬は、原則として抽選にて決定いたします。全国中高校生馬術選手権大会で活躍する馬は、主催者である株式会社馬事学院により集めた馬たちを、参加選手の前で、事前に主催者スタッフによるテスト走行を行い、技術的課題、安全的課題をクリアーした馬をこの全国中高校生馬術選手権大会で活用しています。",
  },
  {
    q: "宿泊形式で行うとされていますが、宿泊先は自分で手配するのでしょうか？また、コーチや保護者の宿泊については一緒に申込みできますか？",
    a: "参加選手につきましてはすべてこちらで宿舎（宿泊先）を手配させて頂きます。また、夕食・朝食もこちらで手配いたします。保護者様またはコーチの方は、原則としてご自分で宿泊先を手配して頂く事になります。※最寄りの日向駅より電車20分程度のJR佐倉駅近辺にビジネスホテルがございます。",
  },
];

export default function Page() {
  return (
    <article id="post-11" className="entry">
      <PageTitle sub="全国中高校生馬術選手権大会" main="よくある質問Ｑ＆Ａ" />

      <div className={styles.list}>
        {items.map((item, i) => {
          const n = i + 1;
          return (
            <section key={n} className={styles.qa}>
              {n === 1 && (
                <Img src="/images/theme/img/qa/img_001.jpg" className={`alignright ${styles.photo}`} />
              )}
              <div className={styles.row} data-kind="q">
                <Img src={`/images/theme/img/qa/icon_q${n}.gif` as ImageSrc} alt={`Q${n}`} className={styles.icon} unoptimized />
                <h2 className={styles.question}>
                  <strong className="t-wine">{item.q}</strong>
                </h2>
              </div>
              <div className={styles.row} data-kind="a">
                <Img src={`/images/theme/img/qa/icon_a${n}.gif` as ImageSrc} alt={`A${n}`} className={styles.icon} unoptimized />
                <div className={styles.answer}>{item.a}</div>
              </div>
            </section>
          );
        })}
      </div>
    </article>
  );
}
