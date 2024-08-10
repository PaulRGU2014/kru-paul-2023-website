"use client";

import {useRef} from 'react';
import styles from './RichText.module.scss';

import { ReactNode } from 'react';

export default function RichText({html, className = ""}: { html: string, className?: string }) {
  //TODO: next/router handling for internal links
  const containerRef = useRef<HTMLDivElement>(null);
  if(html){
    return(
      <div className={`${styles.component} ${className}`} dangerouslySetInnerHTML={{__html: html}} ref={containerRef} />
    );
  } else {
    return
  }
}