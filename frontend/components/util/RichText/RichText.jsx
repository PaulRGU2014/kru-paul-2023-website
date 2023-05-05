import React, {useEffect, useRef} from 'react';
import styles from './RichText.module.scss'
import ReactMarkdown from 'react-markdown'

export default function RichText({children, html, className = ""}) {
  const containerRef = useRef();
  useEffect(() => {
    if(containerRef.current){
      let el = containerRef.current;
      let firstPs = el.querySelectorAll('.chronos-grid__child > p:first-child');
      firstPs.forEach(p =>  {
        if((p.innerHTML === "&nbsp;") && !p.nextElementSibling){
          p.parentNode.classList.add('is-empty');
        } 
      });
    } 
  }, []); 

  if(html){
    return(
      // <div className={`rich-text ${styles.component} ${className}`} dangerouslySetInnerHTML={{__html: html}} ref={containerRef} />
      <ReactMarkdown className={`rich-text ${styles.component} ${className}`} children={html}/>
    );
  } else {
    return <div className={styles.component}>{children}</div>
  }
}