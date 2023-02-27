import React from "react";
import styles from "../MediaCard/MediaCard.module.scss";
import ReactMarkdown from 'react-markdown'
import Image from "../util/Image";
import { getStrapiMedia } from "../../../lib/media";
import Slider from "react-slick";


const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: styles.image_wrapper
};

export default function MediaCard ({content}) {
  return (
    <>
      <div
        className={styles.component}
      >
        <div
          className={styles.wrapper}
          style={{flexDirection: `${content.MediaOrientation === 'right' ? "row-reverse" : "row"}`}}
        >
            <Slider {...settings}>
              {content.Media.data.map((item)=>{
                return(
                  <Image
                    key={item.id}
                    className={styles.image}
                    src={getStrapiMedia(item.attributes.url)}
                    alt={item.attributes.alternativeText}
                    objectFit='contain'
                    objectPosition="top left"
                  />
                )
              })}
            </Slider>
          <div
            className={styles.inner}
            style={{
              marginLeft: content.MediaOrientation === 'right' ? 0 : "20px",
              marginRight: content.MediaOrientation === 'right' ? "20px" : 0 ,
            }}
          >
            <ReactMarkdown>{content.Description}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  )
}
