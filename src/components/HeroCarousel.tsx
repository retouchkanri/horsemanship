"use client";

import Link from "next/link";
import { useRef, useState, useSyncExternalStore, type CSSProperties } from "react";
import { Img } from "./Img";
import { sliderGroups } from "@/lib/site";
import styles from "./HeroCarousel.module.css";

// 旧サイトの random.js と同様、ページを開くたびに3グループのうち1つを表示する。
// サーバー描画時はグループ0、ハイドレーション後にクライアント側で抽選結果へ切り替える。
let clientGroup: number | null = null;
const subscribe = () => () => {};
const getClientGroup = () => {
  if (clientGroup === null) clientGroup = Math.floor(Math.random() * sliderGroups.length);
  return clientGroup;
};
const getServerGroup = () => 0;

const pad = (n: number) => String(n).padStart(2, "0");

export function HeroCarousel() {
  const group = useSyncExternalStore(subscribe, getClientGroup, getServerGroup);
  const slides = sliderGroups[group];
  const count = slides.length;

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const pointerX = useRef<number | null>(null);
  const swiped = useRef(false);

  const go = (step: number) => setActive((i) => (i + step + count) % count);

  return (
    <div
      className={styles.root}
      data-paused={paused}
      role="region"
      aria-roledescription="carousel"
      aria-label="メインビジュアル"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className={styles.stage}
        onPointerDown={(e) => {
          pointerX.current = e.clientX;
          swiped.current = false;
        }}
        onPointerUp={(e) => {
          if (pointerX.current === null) return;
          const dx = e.clientX - pointerX.current;
          pointerX.current = null;
          if (Math.abs(dx) > 40) {
            swiped.current = true;
            go(dx < 0 ? 1 : -1);
          }
        }}
      >
        {slides.map((src, i) => {
          // アクティブスライドからの相対位置（-3〜2）。旧サイト同様、左右の1枚を半透明の白で覆って見せる
          const offset = ((i - active + count + Math.floor(count / 2)) % count) - Math.floor(count / 2);
          const pos = offset === 0 ? "center" : Math.abs(offset) === 1 ? "side" : "hidden";
          return (
            <div
              key={src}
              className={styles.slide}
              data-pos={pos}
              style={{ "--offset": Math.max(-2, Math.min(2, offset)) } as CSSProperties}
              aria-hidden={pos !== "center"}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${count}`}
            >
              <Link
                href="/boshu/"
                aria-label="第21回　全国中学生・高校生馬術選手権大会のお申し込み"
                tabIndex={pos === "center" ? undefined : -1}
                draggable={false}
                onClick={(e) => {
                  // スワイプ直後のクリックは遷移させない
                  if (swiped.current) {
                    e.preventDefault();
                    swiped.current = false;
                  } else if (pos === "side") {
                    e.preventDefault();
                    go(offset);
                  }
                }}
              >
                <Img
                  src={src}
                  alt=""
                  loading="eager"
                  fetchPriority={i === 0 ? "high" : "auto"}
                  sizes="(min-width: 960px) 960px, 100vw"
                  draggable={false}
                />
              </Link>
            </div>
          );
        })}
      </div>

      <div className={styles.controls}>
        <button type="button" className={styles.arrow} onClick={() => go(-1)} aria-label="前のスライド">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <ol className={styles.dots}>
          {slides.map((src, i) => (
            <li key={src}>
              <button
                type="button"
                aria-label={`${i + 1}枚目のスライド`}
                aria-current={i === active}
                onClick={() => setActive(i)}
              >
                {i === active && (
                  <span
                    key={`${group}-${active}`}
                    className={styles.progress}
                    onAnimationEnd={() => go(1)}
                  />
                )}
              </button>
            </li>
          ))}
        </ol>
        <p className={styles.counter} aria-hidden="true">
          <span>{pad(active + 1)}</span> / {pad(count)}
        </p>
        <button type="button" className={styles.arrow} onClick={() => go(1)} aria-label="次のスライド">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
