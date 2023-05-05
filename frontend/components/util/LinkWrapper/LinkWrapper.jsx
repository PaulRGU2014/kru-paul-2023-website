import React, { useEffect } from "react";
import Link from "next/link";

export default function LinkWrapper({
  href,
  target= "_self",
  children,
  className = "",
  onClick,
  style
}) {
  if(!href){
    return <a className={className} onClick={onClick} style={style}>{children}</a>
  }
    return <Link href={href} passHref>
      <a className={className} target={target} onClick={onClick} style={style}>{children}</a>
    </Link>;
}
