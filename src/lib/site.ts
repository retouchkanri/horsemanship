import type { ImageSrc } from "./images";

export const SITE_NAME = "全国中高生馬術選手権大会";
export const SITE_URL = "https://horsemanship.biz";
export const TEL = "050-6875-3336";
export const TEL_HREF = "tel:05068753336";

export type NavItem = { href: string; ja: string; en?: string };

/** グローバルナビ（ヘッダー下のメインメニュー） */
export const mainNav: NavItem[] = [
  { href: "/", ja: "ホーム", en: "Home" },
  { href: "/about/", ja: "本大会の趣旨・目的", en: "About Competition" },
  { href: "/access/", ja: "会場・アクセス案内", en: "Access" },
  { href: "/qa/", ja: "よくある質問Ｑ＆Ａ", en: "Ｑ＆Ａ" },
  { href: "/promoter/", ja: "主催者情報", en: "Promoter" },
  { href: "/contact/", ja: "お問い合わせ", en: "Contact" },
];

/** フッターメニュー */
export const footerNav: NavItem[] = [
  { href: "/", ja: "ホーム" },
  { href: "/about/", ja: "全国中高生馬術選手権大会とは？" },
  { href: "/access/", ja: "会場・アクセス案内" },
  { href: "/qa/", ja: "よくある質問Ｑ＆Ａ" },
  { href: "/promoter/", ja: "主催者情報" },
  { href: "/contact/", ja: "お問い合わせ" },
  { href: "/champion/", ja: "歴代優勝者・入賞者" },
  { href: "/koho/", ja: "取材・リリース依頼" },
  { href: "/daigaku/", ja: "大学馬術部関係者様" },
  { href: "/horse/", ja: "主な活躍競技馬紹介" },
  { href: "/support/", ja: "個人・団体・企業協賛のお願い" },
];

/** サイドバーの SUB MENU（ja の配列は改行位置） */
export const subNav: { href: string; lines: string[] }[] = [
  { href: "/champion/", lines: ["歴代優勝者・入賞者"] },
  { href: "/koho/", lines: ["取材・リリース依頼"] },
  { href: "/daigaku/", lines: ["大学馬術部関係者様"] },
  { href: "/horse/", lines: ["主な活躍競技馬紹介"] },
  { href: "/support/", lines: ["入賞者への賞品提供", "協賛・協力者様募集"] },
];

/** メインビジュアル：表示のたびに3グループのうち1つをランダム表示（旧サイトの random.js と同じ） */
export const sliderGroups: ImageSrc[][] = (["a", "b", "c"] as const).map((g) =>
  ([1, 2, 3, 4, 5, 6] as const).map(
    (n) => `/images/theme/img_cmn/img_group_${g}${n}.jpg` as ImageSrc,
  ),
);

/** フッター下部「入学可能エリア」「求人・就職エリア」のリンク */
const AREA_HOST = "http://xn--u9jt70km8ho23c.com";
const prefectures: [string, string][] = [
  ["01_hokkaido", "北海道"],
  ["02_aomori", "青森県"],
  ["03_iwate", "岩手県"],
  ["04_miyagi", "宮城県"],
  ["05_akita", "秋田県"],
  ["06_yamagata", "山形県"],
  ["07_fukushima", "福島県"],
  ["08_tochigi", "栃木県"],
  ["09_gunma", "群馬県"],
  ["10_ibaragi", "茨城県"],
  ["11_saitama", "埼玉県"],
  ["12_chiba", "千葉県"],
  ["13_tokyo", "東京都"],
  ["14_kanagawa", "神奈川県"],
  ["15_nigata", "新潟県"],
  ["16_toyama", "富山県"],
  ["17_ishikawa", "石川県"],
  ["18_fukui", "福井県"],
  ["19_yamanashi", "山梨県"],
  ["20_nagano", "長野県"],
  ["21_gifu", "岐阜県"],
  ["22_shizuoka", "静岡県"],
  ["23_aichi", "愛知県"],
  ["24_mie", "三重県"],
  ["25_shiga", "滋賀県"],
  ["26_kyoto", "京都府"],
  ["27_osaka", "大阪府"],
  ["28_hyogo", "兵庫県"],
  ["29_nara", "奈良県"],
  ["30_wakayama", "和歌山県"],
  ["31_tottori", "鳥取県"],
  ["32_shimane", "島根県"],
  ["33_okayama", "岡山県"],
  ["34_hiroshima", "広島県"],
  ["35_yamaguchi", "山口県"],
  ["36_tokushima", "徳島県"],
  ["37_kagawa", "香川県"],
  ["38_ehime", "愛媛県"],
  ["39_kochi", "高知県"],
  ["40_fukuoka", "福岡県"],
  ["41_saga", "佐賀県"],
  ["42_nagasaki", "長崎県"],
  ["43_kumamoto", "熊本県"],
  ["44_oita", "大分県"],
  ["45_miyazaki", "宮崎県"],
  ["46_kagoshima", "鹿児島県"],
  ["47_okinawa", "沖縄県"],
];

export const areaGroups = [
  { label: "入学可能エリア", tone: "green" as const, prefix: "kyumuin" },
  { label: "求人・就職エリア", tone: "blue" as const, prefix: "kyujin" },
].map((g) => ({
  ...g,
  links: prefectures.map(([slug, name]) => ({
    name,
    href: `${AREA_HOST}/${g.prefix}_${slug}/`,
  })),
}));
