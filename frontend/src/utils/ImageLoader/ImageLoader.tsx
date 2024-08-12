'use client'

import Image from "next/image";

export default function ImageLoader({ className, src, alt }: { className: string, src: string, alt: string }) {
  return (
    <div className={className}>
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
}