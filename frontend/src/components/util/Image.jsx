import Img from "next/image";


export default function Image ({className, src, alt, objectFit, objectPosition}) {
  return(
    <div className={className}>
      <Img
        src={src}
        alt={alt}
        layout="fill"
        objectFit={objectFit}
        objectPosition={objectPosition}
        position="relative"
        styles={{
          width: "100%",
          height: "auto"
        }}
      />
    </div>
  )
}
