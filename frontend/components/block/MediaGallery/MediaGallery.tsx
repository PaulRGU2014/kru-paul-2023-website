import React from 'react';
import styles from './MediaGallery.module.scss';
import RichText from '../../util/RichText/RichText';



export default function MediaGallery({content}:any) {
  return(
    <div className={styles.component}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          {content.cards?.map(card => {
            return (
              <div 
                className={styles.card} 
                key={card.id}
              >
                <RichText html={card.desc} children={null}/>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
