'use client'

import Image from "next/image";

export default function ImageLoader({ className, style, src, alt }: { className: string, style?: object, src: string, alt: string }) {
  return (
    <div className={className} style={style}>
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
}