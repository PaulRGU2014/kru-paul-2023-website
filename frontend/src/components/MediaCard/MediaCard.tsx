import React from "react";
import RichText from "./util/RichText";
import styles from "../MediaCard/MediaCard.module.scss";
import ReactMarkdown from 'react-markdown'



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
        <ReactMarkdown>{content.Description}</ReactMarkdown>
      </div>
    </>
  )
}
