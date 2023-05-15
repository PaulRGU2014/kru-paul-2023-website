import React from 'react';
import styles from './MediaGallery.module.scss';
import RichText from '../../util/RichText/RichText';
import { getStrapiMedia } from "../../../pages/lib/media";
import Image from "../../../imageloader";



export default function MediaGallery({content}:any) {
  return(
    <div className={styles.component}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          {content.cards?.map((card: { id: React.Key; desc: any; media: any; isMediaLeft: boolean}) => {
            return (
              <div 
                className={styles.card}
                style={{flexDirection:`${card.isMediaLeft === false ? "row-reverse" : "row"}`}}
                key={card.id}
              >
                {card.media?.data?.map((item: {
                  attributes: any; media: { data: { attributes: { url: any; }; }[]; }; })=>{
                  return(
                    <div 
                    className={`${styles.media}`}
                    >
                      <Image 
                        src={getStrapiMedia(item.attributes?.url)}
                        layout="fill"
                        objectFit='cover'
                        styles={{
                          width: "100%",
                          height: "auto"
                        }}
                      />
                    </div>                    
                  )
                })}
                <RichText className={styles.richtext} html={card.desc} children={null}/>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
