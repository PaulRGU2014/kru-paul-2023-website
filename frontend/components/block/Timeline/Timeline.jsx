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
              <div className={styles.card}>
                <div className={styles.card_left}>
                  {card.dateStart} - {card.dateEnd}
                </div>
                <div className={styles.line}/>
                <div className={styles.card_right}>
                  <h5>{card.title}</h5>
                  <h6>{card.subtitle}</h6>
                  <div>{card.desc}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
