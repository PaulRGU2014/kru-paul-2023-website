import React from 'react';
import styles from './NewBlock.module.scss'

export default function NewBlock ({content}) {
  return(
    <div className= {styles.component}>
      This is a new block
      {content}
    </div>
  )
}
