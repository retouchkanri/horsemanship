import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 旧WordPressサイトと同じく末尾スラッシュ付きのURL（例: /about/）で配信する
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
