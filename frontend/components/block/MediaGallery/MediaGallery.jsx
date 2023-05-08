import React from 'react';
import styles from './MediaGallery.module.scss';
import RichText from '../../util/RichText/RichText';

export default function MediaGallery({content}) {
  return(
    <div className={styles.component}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          {content.cards.map((card, index) => {
            return (
              <div className={styles.card} key={index}>
                <RichText html={card.desc}/>
                
              </div>
            )
          })}

        </div>
        <RichText html={content}/>
      </div>
    </div>
  );
}
