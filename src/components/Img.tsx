import Image, { type ImageProps } from "next/image";
import { imageSizes, type ImageSrc } from "@/lib/images";

type Props = Omit<ImageProps, "src" | "width" | "height" | "alt"> & {
  src: ImageSrc;
  alt?: string;
};

/** public/images の画像を実寸（width/height）付きで next/image に渡す */
export function Img({ src, alt = "", ...rest }: Props) {
  const [width, height] = imageSizes[src];
  return <Image src={src} width={width} height={height} alt={alt} {...rest} />;
}
