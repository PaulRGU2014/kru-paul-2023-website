"use client";

import React from 'react';
import { PortableText } from '@portabletext/react';
import styles from './RichText.module.scss';

interface RichTextProps {
  children: React.ReactNode;
  html: any;
  className?: string;
  [key: string]: any;
}

export default function RichText({ children, html, className = "", ...props }: RichTextProps) {
  console.log(html);
  if (html) {
    return (
      <div className={`${styles.component} ${className}`} {...props}>
        <PortableText value={html} />
      </div>
    );
  } else {
    return (
      <div className={`${styles.component} ${className}`} {...props}>
        {children}
      </div>
    );
  }
}