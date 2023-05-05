import React from 'react';
import styles from './ErrorPage.module.scss';


function fourOhFour(){
  return <div className={styles.status404}>
    <h2>404</h2>
    <h3>This page wasn't found.</h3>
  </div>
}


function fiveHundred(status){
  return <div className={styles.status500}>
    <h2>{status}</h2>
    <h3>Oops! there was an error getting page from backend.</h3>
  </div>
}

export default function ErrorPage({status}){
  return (
    <div className={`${styles.page} error-page`}>
      {(() => {
        switch(status){
          case 404: return fourOhFour(); 
          default: return fiveHundred(status);
        }
      })()}
    </div>
  )
}