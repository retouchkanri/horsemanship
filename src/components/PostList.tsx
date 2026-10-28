import Link from "next/link";
import { formatDateShort, postPath, type Post } from "@/lib/posts";
import styles from "./PostList.module.css";

/** カテゴリー・タグの記事一覧 */
export function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className={styles.list}>
      {posts.map((post) => (
        <article key={post.id} id={`post-${post.id}`} className={styles.item}>
          <Link href={postPath(post)} rel="bookmark" title={`Permanent Link to ${post.title}`}>
            <time dateTime={post.date} className={styles.date}>
              {formatDateShort(post.date)}
            </time>{" "}
            <span className={styles.title}>{post.title}</span>
            <i aria-hidden="true" />
          </Link>
        </article>
      ))}
    </div>
  );
}

type PagerLink = { href: string; label: string } | undefined;

/** 前のページ / 次のページ */
export function Pager({ prev, next }: { prev?: PagerLink; next?: PagerLink }) {
  if (!prev && !next) return null;
  return (
    <nav className={styles.pager} aria-label="ページ送り">
      <div className={styles.prev}>
        {prev && (
          <Link href={prev.href} rel="prev">
            <span aria-hidden="true">&laquo;</span> {prev.label}
          </Link>
        )}
      </div>
      <div className={styles.next}>
        {next && (
          <Link href={next.href} rel="next">
            {next.label} <span aria-hidden="true">&raquo;</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
