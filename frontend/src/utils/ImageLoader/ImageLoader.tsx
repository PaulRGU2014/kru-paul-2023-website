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
      <Image src={src} alt={alt} layout="fill" objectFit={objectFit} objectPosition={objectPosition}/>
    </div>
  );
}