import React from 'react';
import styles from './RichText.module.scss';

type Props = {
  children: any;
  className: any;
  html: string;
}

export default function RichText({children, html, className = ""}: Props) {
  if(html){
    return(
      <div className={`${styles.component} ${className}`} dangerouslySetInnerHTML={{__html: html}} />
    );
  } else {
    return <div className={styles.component}>{children}</div>
  }
}
