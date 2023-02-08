import React from "react";
import styles from "../MediaCard/MediaCard.module.scss";



type Props = {
  content : any
}


export default function MediaCard ({content} : Props) {
  return (
    <>
      <div
        className={styles.wrapper}
      >
        <div>Image Area</div>
        <div>
          {content.Description}
        </div>
      </div>
    </>
  )
}
