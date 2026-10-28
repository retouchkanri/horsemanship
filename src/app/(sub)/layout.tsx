import type { ReactNode } from "react";
import { Sidebar } from "@/components/Sidebar";
import styles from "./layout.module.css";

/** 下層ページ共通：本文 + サイドバー */
export default function SubLayout({ children }: { children: ReactNode }) {
  return (
    <div id="wrapper" className={styles.wrapper}>
      <div className={`container ${styles.grid}`}>
        <main id="content" className={styles.content}>
          {children}
        </main>
        <Sidebar />
      </div>
    </div>
  );
}
