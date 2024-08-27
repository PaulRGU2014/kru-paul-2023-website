'use client'

import Image from "next/image";

interface ImageLoaderProps extends React.HTMLProps<HTMLDivElement> {
  className: string;
  style?: object;
  objectFit?: string;
  objectPosition?: string;
  src: string;
  alt: string;
}

export default function ImageLoader({ className, style, src, alt, objectFit="cover", objectPosition, ...rest }: ImageLoaderProps) {
  return (
    <div className={className} 
      style={style}
      {...rest}
    >
      <Image 
        src={src} 
        alt={alt} 
        fill={true}
        sizes="100%"
        style={{
          objectFit: objectFit as React.CSSProperties['objectFit'],
          objectPosition: objectPosition as React.CSSProperties['objectPosition']
        }}
        />
    </div>
  );
}