"use client";


import styles from './RichText.module.scss';


export default function RichText({html, className = "" , children, ref, ...rest }: { html: string, className?: string, children?: React.ReactNode, ref?: React.RefObject<HTMLDivElement>, [key: string]: any }) {
  //TODO: next/router handling for internal links
  if(html){
    return(
      <div className={`${styles.component} ${className}`} dangerouslySetInnerHTML={{__html: html}} ref={ref} {...rest}/>
    );
  } else {
    return (
      <div className={`${styles.component} ${className}`} ref={ref} {...rest}>{children}</div>
    )
  }
}