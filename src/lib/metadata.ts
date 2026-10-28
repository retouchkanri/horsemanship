import type { Metadata } from "next";

type PageMeta = {
  title: string;
  description?: string;
  keywords?: string;
  path: string;
};

/** 旧サイトと同じ title / description / keywords を各ページに設定する */
export function pageMetadata({ title, description, keywords, path }: PageMeta): Metadata {
  return {
    title: { absolute: title },
    description: description || undefined,
    keywords: keywords ? keywords.split(",") : undefined,
    alternates: { canonical: path },
    openGraph: {
      title,
      description: description || undefined,
      url: path,
    },
    twitter: {
      title,
      description: description || undefined,
    },
  };
}
