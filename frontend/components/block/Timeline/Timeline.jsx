import React from 'react';
import styles from './Timeline.module.scss';

export default function Timeline({content}) {
  return(
    <div className={styles.component}>
      <div className={styles.wrapper}>
        <h4>{content.title}</h4>
        <div className={styles.inner}>
          {content.Events.map((card, index)=>{
            return (
              <div className={styles.card_left}>
                Test card
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
