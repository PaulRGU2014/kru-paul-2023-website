import React from 'react';
import styles from './MediaGallery.module.scss';
import RichText from '../../util/RichText/RichText';
import { getStrapiMedia } from "../../../pages/lib/media";
import Image from "../../../imageloader";
import Slider from 'react-slick';
import ScrollAnim from '../../util/ScrollAnim/ScrollAnim';


export default function MediaGallery({content}:any) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };  
  return(
    <div className={styles.component}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          
            {content.cards?.map((card: { id: React.Key; desc: any; media: any; isMediaLeft: boolean}) => {
              return (
                <ScrollAnim>
                <div 
                  className={styles.card}
                  style={{flexDirection:`${card.isMediaLeft === false ? "row-reverse" : "row"}`}}
                  key={card.id}
                >
                  {card.media?.data.length > 1 ? 
                  <div className={styles.sliderWrapper}>
                  <Slider {...settings}>
                    {card.media?.data?.map((item: {
                      attributes: any; media: { data: { attributes: { url: any; }; }[]; }; })=>{
                      return(
                        <div 
                        className={`${styles.media}  ${card.isMediaLeft === true ? styles.fadeinLeft : styles.fadeinRight }`}
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
                  </Slider>
                  </div>
                  :
                  card.media?.data?.map((item: {
                    attributes: any; media: { data: { attributes: { url: any; }; }[]; }; })=>{
                    return(
                      <div 
                      className={`${styles.media}  ${card.isMediaLeft === true ? styles.fadeinLeft : styles.fadeinRight }`}
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
                  })                
                  }
                  <RichText className={`${styles.richtext} ${card.isMediaLeft === false ? styles.fadeinLeft : styles.fadeinRight }`} html={card.desc} children={null}/>
                </div>
                </ScrollAnim>
              )
            })}
          
        </div>
      </div>
    </div>
  );
}
