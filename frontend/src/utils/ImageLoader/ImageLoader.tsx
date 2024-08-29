'use client'

import Image, { ImageProps} from "next/image";
import { urlForImage } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface ImageLoaderProps extends React.HTMLProps<HTMLDivElement> {
  className: string;
  style?: object;
  objectFit?: string;
  objectPosition?: string;
  src: string;
  alt: string;
}

type Props = Omit<ImageProps, "src" > & {
  src: SanityImageSource;
};

export default function ImageLoader({ className, style, src, alt, objectFit="cover", objectPosition, ...rest }: ImageLoaderProps) {
  return (
    <div className={className} 
      style={style}
      {...rest}
    >
      <Image 
        src="src"
        alt={alt} 
        fill={true}
        sizes="100%"
        style={{
          objectFit: objectFit as React.CSSProperties['objectFit'],
          objectPosition: objectPosition as React.CSSProperties['objectPosition']
        }}
        loader={({ width, quality = 100 }) =>
          urlForImage(src).width(width).quality(quality).url()
        }
        />
    </div>
  );
}