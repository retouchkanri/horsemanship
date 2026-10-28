"use client";

import { useSyncExternalStore } from "react";
import { Img } from "./Img";
import styles from "./PageTop.module.css";

const subscribe = (onChange: () => void) => {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
};
const getScrolled = () => window.scrollY > 480;
const getServerScrolled = () => false;

export function PageTop() {
  const visible = useSyncExternalStore(subscribe, getScrolled, getServerScrolled);

  return (
    <button
      type="button"
      id="pagetop"
      className={styles.button}
      data-visible={visible}
      aria-label="ページの先頭へ"
      tabIndex={visible ? undefined : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <Img src="/images/theme/img_cmn/icon_top.png" alt="" />
    </button>
  );
}
