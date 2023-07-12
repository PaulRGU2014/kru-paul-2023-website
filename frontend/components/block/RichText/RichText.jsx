import React from 'react';
import styles from './RichText.module.scss';
import RichTextUtil from '../../util/RichText/RichText'
import ScrollAnim from '../../util/ScrollAnim/ScrollAnim';

export default function RichText({content}) {
  return(
  <ScrollAnim>
    <div className={styles.component}>
      <div className={styles.wrapper}>
        { !!content.maxWidth ? 
          <div style={{maxWidth : `${content.maxWidth}px`}}>
            <RichTextUtil  html={content.text} className={styles.component}/>
          </div>
          :
          <div style={{maxWidth : '645px'}}>
            <RichTextUtil  html={content.text} className={styles.component}/>
          </div>        }
      </div>
    </div>
  </ScrollAnim>
  );
}
