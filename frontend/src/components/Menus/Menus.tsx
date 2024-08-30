"use client"

import styles from './Menus.module.scss';
import React, { useState , useEffect } from "react";
import Link from 'next/link';


export default function MenuNav({content}: {content: any}) {
  console.log("MenuContent", content)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return(
    <div className={isMenuOpen ? styles.component : styles.component_close}>
      <div className={`${styles.wrapper} ${!!isMenuOpen ? styles.open : ""}`}>
        <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        <div className={isMenuOpen ? styles.inner : styles.inner_close}>
            {<ul className={styles.content}>
              <li>
                <Link className={styles.link} href="/">Home</Link>
              </li>
              {!!content && content.footer_links?.map((item: any, index: number) => (
                  <li key={index}>
                      <Link className={styles.link} href={item.link_url}>{item.link_title}</Link>
                  </li>
              ))}
            </ul>}
        </div>
      </div>
    </div>
  );
}

function Hamburger ({isMenuOpen, setIsMenuOpen}: {isMenuOpen: boolean, setIsMenuOpen: (isOpen: boolean) => void}){
  return (
    <div 
      className={isMenuOpen ? styles.hamburger_wrapper_open : styles.hamburger_wrapper}
      // style={isMenuOpen ? {backgroundColor: '#000000'} : {backgroundColor: '#FFD100'}}
      onClick={()=>setIsMenuOpen(!isMenuOpen)}
    >
      <div className={styles.hamburger_first} />
      <div className={styles.hamburger_second}/>
      <div className={styles.hamburger_third}/>
    </div>
  )
}