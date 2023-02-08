import React from "react";
import styles from "../MediaCard/MediaCard.module.scss";
import ReactMarkdown from 'react-markdown'
import { detectContentType } from "next/dist/server/image-optimizer";



type Props = {
  content : any
}



export default function MediaCard ({content} : Props) {
  const orientation : React.CSSProperties =
    {
      alignItems: `${content.MediaOrientation === 'right' ? "flex-end" : "flex-start"}`
    }
  return (
    <>
      <div
        className={styles.component}
      >
        <div className={styles.wrapper} style={orientation}>
          <div
            className={styles.inner}
          >
            <div>Image Area</div>
            <ReactMarkdown>{content.Description}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  )
}
