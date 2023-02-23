import React from "react";
import styles from "../MediaCard/MediaCard.module.scss";
import ReactMarkdown from 'react-markdown'
import Image from "../util/Image";
import Slider from "react-slick";



type Props = {
  content : any
}


export default function MediaCard ({content} : Props) {
  const orientation : React.CSSProperties =
  {
    flexDirection: `${content.MediaOrientation === 'right' ? "row-reverse" : "row"}`
  }



  return (
    <>
      <div
        className={styles.component}
      >
        <div className={styles.wrapper} style={orientation}>

            {/* <Slider> */}
              {content.Media.data.map((item:any)=>{
                return(
                  <></>
                  // <Image
                  //   key={item.id}
                  //   className={styles.image}
                  //   src={item.attributes.url}
                  //   objectFit='contain'
                  //   objectPosition="top left"
                  // />
                )
              })}
            {/* </Slider> */}
          <div className={styles.inner}>
            <ReactMarkdown>{content.Description}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  )
}
