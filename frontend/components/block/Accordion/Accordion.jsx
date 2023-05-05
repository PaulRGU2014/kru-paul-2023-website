import React, {useState} from 'react';
import styles from './Accordion.module.scss';
import RichText from '../../util/RichText/RichText';
import ScrollAnim from '../../util/ScrollAnim/ScrollAnim';

export default function Accordion({content}) {
  const [expandedIndex, setExpandedIndex] = useState ();
  const [isToggle, setIsToggle] = useState (false)
  function toggleAccordion (index) {
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
    <ScrollAnim>
    <div className={styles.component}>
      <div className={styles.wrapper}>
        <h3>{content.title}</h3>
        <div className={styles.accordion_wrapper}>
          {content.list?.map((list, index)=>{
            return(
              <div 
                key={Math.random + index}
                className={styles.accordion_collapsible}
                onClick={()=>toggleAccordion(index)}
              >
                <div className={styles.accordion_list} key={index * Math.random + 1}>
                  <div 
                    className={expandedIndex===index && isToggle === true ? styles.toggle_open : styles.toggle_close}
                    onClick={()=>toggleAccordion(index)}
                  />
                  <h6>{list.title}</h6>
                </div>
                <div className={expandedIndex===index && isToggle === true ? styles.richtext_expanded : styles.richtext_shrink}>
                  <RichText className={`${styles.richtext} ${expandedIndex===index && isToggle === true ? styles.open : styles.close}`} html={list.desc}/>
                </div>
              </div> 
            )
          })}
          
        </div>
      </div>
    </div>
    </ScrollAnim>
  );
}
