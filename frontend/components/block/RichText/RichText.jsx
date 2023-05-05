import React from 'react';
import styles from './RichText.module.scss';
import RichTextUtil from '../../util/RichText/RichText'
import ScrollAnim from '../../util/ScrollAnim/ScrollAnim';

export default function RichText({content, maxWidth=645}) {
  return(
  <ScrollAnim>
    <div className={styles.component}>
      <div className={styles.wrapper}>
        
        { !!maxWidth ? 
          <div style={{maxWidth : `${content.maxWidth}px`}}>
            <RichTextUtil  html={content.text} className={styles.component}/>
          </div>
          :
          <RichTextUtil  html={content.text} className={styles.component}/>
        }
        
      </div>
    </div>
  </ScrollAnim>
  );
}
