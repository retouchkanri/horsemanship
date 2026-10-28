import type { ReactNode } from "react";
import styles from "./PageTitle.module.css";

type Props = {
  /** 上段の小見出し */
  sub?: ReactNode;
  /** 下段のメイン見出し */
  main: ReactNode;
  as?: "h1" | "h2";
};

export function PageTitle({ sub, main, as: Tag = "h1" }: Props) {
  return (
    <Tag className={styles.title}>
      {sub && (
        <>
          <span className={styles.sub}>{sub}</span>
          <br />
        </>
      )}
      <span className={styles.main}>{main}</span>
    </Tag>
  );
}
