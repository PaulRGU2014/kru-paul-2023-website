"use client";

import React, {useState, useRef} from 'react';
import styles from './Accordion.module.scss';
import RichText from '../RichText/RichText';

export default function Accordion({content}: {content: any}) {
  const [expandedIndex, setExpandedIndex] = useState<number | undefined>(undefined);
  const [isToggle, setIsToggle] = useState (false);
  const accordionCollapsible = useRef<HTMLDivElement>(null);


  function toggleAccordion ({index}: {index: number}) {
    if(expandedIndex === index && isToggle === true){
      setIsToggle(false)
    } else if (expandedIndex === index && isToggle === false){
      setIsToggle(true)
    } else if (expandedIndex !== index && isToggle === true) {
      setExpandedIndex(index)
    }
    else{
      setExpandedIndex(index); setIsToggle(!isToggle)
    }
  }
  
  return(
    // <InViewAnim>
    <div className={styles.component}>
      <div className={styles.wrapper}>
        <h3>{content.title}</h3>
        <div className={styles.accordion_wrapper}>
          {content.list?.map((list: any, index: number)=>{
            return(
              <div 
                key={Math.random() + index}
                className={styles.accordion_collapsible}
                onClick={() => toggleAccordion({ index })}
              >
                <div className={styles.accordion_list} key={((index * Math.random()) + 1)}>
                  <div 
                    className={expandedIndex===index && isToggle === true ? styles.toggle_open : styles.toggle_close}
                    onClick={() => toggleAccordion({ index })}
                  />
                  <h6>{list.title}</h6>
                </div>
                <div className={`${styles.richtext_wrapper} ${expandedIndex===index && isToggle === true ? styles.open : styles.close}`}
                  ref={accordionCollapsible}
                  style={{
                    maxHeight: expandedIndex===index && isToggle === true ? accordionCollapsible.current?.scrollHeight + 'px' : '0px'
                  }}
                >
                  <RichText className={`${styles.richtext}`} 
                    html={list.desc}
                  />
                </div>
              </div> 
            )
          })}
          
        </div>
      </div>
    </div>
    // </InViewAnim>
  );
}