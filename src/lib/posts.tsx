import type { ReactNode } from "react";
import { Img } from "@/components/Img";
import type { ImageSrc } from "./images";

export type Category = { slug: "news" | "topics"; name: string };

export const categories: Record<Category["slug"], Category> = {
  news: { slug: "news", name: "お知らせ" },
  topics: { slug: "topics", name: "トピックス" },
};

export const tags = ["馬術大会", "高校生", "馬術部", "高等学校", "馬の学校"] as const;
export type Tag = (typeof tags)[number];

export type Post = {
  id: number;
  /** 公開日 YYYY-MM-DD */
  date: string;
  title: string;
  category: Category["slug"];
  tags: Tag[];
  image: ImageSrc;
  metaTitle?: string;
  description?: string;
  body: ReactNode;
};

function Photo({ src }: { src: ImageSrc }) {
  return (
    <p>
      <Img
        src={src}
        className="alignright"
        sizes="(min-width: 768px) 360px, 100vw"
        preload
      />
    </p>
  );
}

function championPost(
  id: number,
  date: string,
  title: string,
  image: ImageSrc,
  preparing: boolean,
): Post {
  return {
    id,
    date,
    title,
    category: "topics",
    tags: [],
    image,
    body: (
      <>
        <Photo src={image} />
        {preparing && <p>準備中</p>}
      </>
    ),
  };
}

/** 新しい順 */
export const posts: Post[] = [
  {
    id: 393,
    date: "2025-04-20",
    title: "2025年度は第20回を記念して、特別なシリーズに！",
    category: "news",
    tags: ["馬術大会", "高校生", "馬術部", "高等学校", "馬の学校"],
    image: "/images/uploads/2021/07/IMG_0979-1024x683.jpg",
    metaTitle:
      "引退馬・引退競走馬だけの「全国中学生・高校生馬術選手権大会」を開催。／千葉県山武市の馬の学校",
    description:
      "年間7000頭以上が生産される競走馬。その競走馬の引退した後、馬術競技馬として再調教された馬たちが中学生・高校生の馬術競技会で活躍。引退競走馬の馬術大会が千葉県山武市で開催されます",
    body: (
      <>
        <p className="fs-xl">
          <strong>第20</strong>
          <strong>回　全国中学生・高校生馬術選手権大会／開催予定のご案内</strong>
        </p>
        <Photo src="/images/uploads/2021/07/IMG_0979-1024x683.jpg" />
        <p>
          <span className="t-green">
            <strong>2015年にスタートした当大会。</strong>
          </span>
          <span className="t-green">
            <strong>2025年は10周年、そして記念すべき第20回となります。</strong>
          </span>
        </p>
        <p>記念の年に、記念の回を。</p>
        <p>これまでご参加くださった皆様への感謝も込めて、特別なシリーズ戦として実施します。</p>
        <div className="schedule">
          <p>
            大阪予選 ー ７月<del>20日(日)</del> 19日(土)　会場：
            <a href="https://horserest.jp/">引退馬の森 ホースレスト</a> (内覆馬場)
          </p>
          <p>
            千葉予選 ー 10月４日(土) (雨天時は翌５日に順延)　会場：
            <a href="https://bajigaku.net/">東関東馬事高等学院</a>
          </p>
          <p>
            決勝戦　 ー 12月13, 14日(土日)　会場：
            <a href="https://bajigaku.net/">東関東馬事高等学院</a>
          </p>
        </div>
        <p>各予選を通過した選手の決勝戦エントリー代は、招待選手として無料。</p>
        <p>そして、決勝戦審判長は、初老ジャパンの生みの親、元明治大学馬術部監督の長田稔氏が担当いたします。</p>
        <p>走行や今後の練習についてのアドバイスをぜひお楽しみに。</p>
        <h2 className="entry-heading">＜参加選手の資格＞</h2>
        <ul>
          <li>
            <strong>
              国内の中学校・高等学校に在学していて
              <span className="t-orange u">
                「馬術大会に出場経験（2開催以上の馬術大会で過去に８０センチ以上の障害３走行以上の競技実績）」
              </span>
              がある方。
            </strong>
          </li>
        </ul>
        <p className="note">※中学生は２年生以上とし保護者（またはコーチ）の同伴が可能な方</p>
        <ul>
          <li>
            <strong>何らかの傷害保険に加入している方</strong>
          </li>
          <li>
            <strong>決勝戦は 2</strong>
            <strong>日目（2回戦目）の進出の有無に関わらず、2日間にわたり参加できる方</strong>
          </li>
        </ul>
        <p>
          （注意事項）参加申し込みをしていただいた後に、当方にて審査をさせて頂きます。参加資格をクリアーされた場合のみメールにてご連絡させて頂きます。
        </p>
        <p className="callout fs-xl">
          <strong className="t-red">※エントリー受付 ー ６月中旬、開始予定</strong>
        </p>
      </>
    ),
  },
  championPost(271, "2021-07-04", "第12回優勝チャンピオン「米山 咲希」選手", "/images/uploads/2021/07/IMG_5016-1024x683.jpg", false),
  championPost(266, "2021-07-04", "第11回優勝チャンピオン「田中 愛麗」選手", "/images/uploads/2021/07/MG_1658-1024x683.jpg", false),
  championPost(264, "2021-07-04", "第10回優勝チャンピオン「長瀬 晴香」選手", "/images/uploads/2021/07/o2992200014541779352.jpg", false),
  championPost(262, "2021-07-04", "第9回優勝チャンピオン「松本 東馬」選手", "/images/uploads/2021/07/IMG_0979-1024x683.jpg", false),
  championPost(163, "2018-08-29", "第8回優勝チャンピオン「神谷 詩」選手", "/images/uploads/2018/08/6b1b0b15efb7d613bd0bc856aca63e64-1024x683.jpg", true),
  championPost(161, "2018-08-29", "第7回優勝チャンピオン「梅津 頼」選手", "/images/uploads/2018/08/7f970bba71446c21f921734690f41047-1024x685.jpg", true),
  championPost(159, "2018-08-29", "第6回優勝チャンピオン「河内一馬」選手", "/images/uploads/2018/08/a7c0314322ac814ea2a998932f2bd312-1024x684.jpg", true),
  championPost(156, "2018-08-29", "第5回優勝チャンピオン「勝田 匠」選手", "/images/uploads/2018/08/619046237c889e883e8c67cc5a6d207a-1024x684.jpg", true),
  championPost(154, "2018-08-29", "第4回優勝チャンピオン「下野あずみ」選手", "/images/uploads/2018/08/0aa3323a6b90a04379e4e02db137fbac-1024x684.jpg", true),
  championPost(152, "2018-08-29", "第3回優勝チャンピオン「木村早希子」選手", "/images/uploads/2018/08/f1c637b3665aad0fe971924289347458-1024x682.jpg", true),
  championPost(149, "2018-08-29", "第2回優勝チャンピオン「福士 超文」選手", "/images/uploads/2018/08/466e0de9c9d4379d5a312d56c666015f-1024x685.jpg", true),
  championPost(147, "2018-08-29", "第1回優勝チャンピオン「中野 詠心」選手", "/images/uploads/2018/08/699cc72a399eb3bbc0071c2dc2b4ea84-1024x684.jpg", true),
];

/** 旧サイトと同じパーマリンク /YYYY/MMDD/ID/ */
export function postPath(post: Pick<Post, "id" | "date">) {
  const [y, m, d] = post.date.split("-");
  return `/${y}/${m}${d}/${post.id}/`;
}

export function postParams(post: Post) {
  const [y, m, d] = post.date.split("-");
  return { year: y, monthday: `${m}${d}`, id: String(post.id) };
}

export function findPost(year: string, monthday: string, id: string) {
  return posts.find((p) => {
    const params = postParams(p);
    return params.year === year && params.monthday === monthday && params.id === id;
  });
}

/** 前後の記事（前 = ひとつ古い記事 / 次 = ひとつ新しい記事） */
export function adjacentPosts(post: Post) {
  const i = posts.indexOf(post);
  return { prev: posts[i + 1], next: posts[i - 1] };
}

export function postsInCategory(slug: Category["slug"]) {
  return posts.filter((p) => p.category === slug);
}

export function postsWithTag(tag: Tag) {
  return posts.filter((p) => p.tags.includes(tag));
}

export const TOPICS_PER_PAGE = 10;

const pad = (n: string) => n.padStart(2, "0");

/** 2021年07月04日（トップページのトピックス） */
export function formatDateJa(date: string) {
  const [y, m, d] = date.split("-");
  return `${y}年${pad(m)}月${pad(d)}日`;
}

/** 2021/07/04（記事ページ） */
export function formatDateSlash(date: string) {
  return date.replaceAll("-", "/");
}

/** 2021/7/4（一覧ページ） */
export function formatDateShort(date: string) {
  const [y, m, d] = date.split("-");
  return `${y}/${Number(m)}/${Number(d)}`;
}
