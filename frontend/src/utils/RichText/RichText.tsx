"use client";

import {useRef} from 'react';
import styles from './RichText.module.scss';


export default function RichText({html, className = "" , children }: { html: string, className?: string, children?: React.ReactNode }) {
  //TODO: next/router handling for internal links
  const containerRef = useRef<HTMLDivElement>(null);
  if(html){
    return(
      <div className={`${styles.component} ${className}`} dangerouslySetInnerHTML={{__html: html}} ref={containerRef} />
    );
  } else {
    return (
      <div className={`${styles.component} ${className}`} ref={containerRef}>{children}</div>
    )
  }
}