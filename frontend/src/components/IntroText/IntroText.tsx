import React from "react";
import styles from "./Introtext.module.scss"

type Props = {
  content : string
}

export default function IntroText ({content}:Props) {
  return (
    <div className={styles.component}>
      <h1>{content}</h1>
    </div>

  )
}
