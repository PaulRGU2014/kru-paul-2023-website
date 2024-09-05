"use client"

import styles from './Menus.module.scss';
import React, { useState, useEffect, useRef } from "react";
import Link from 'next/link';

function Hamburger({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean, setIsMenuOpen: (isOpen: boolean) => void }) {
  return (
    <div
      className={isMenuOpen ? styles.hamburger_wrapper_open : styles.hamburger_wrapper}
      onClick={() => {
        console.log("Hamburger clicked");
        setIsMenuOpen(!isMenuOpen);
      }}
    >
      <div className={styles.hamburger_first} />
      <div className={styles.hamburger_second} />
      <div className={styles.hamburger_third} />
    </div>
  );
}

export default function MenuNav({ content }: { content: any }) {
  console.log("MenuContent", content);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  console.log('isMenuOpen', isMenuOpen);


  return (
    <div className={isMenuOpen ? styles.component : styles.component_close}>
      <div className={`${styles.wrapper} ${isMenuOpen ? styles.open : ""}`}>
        <Hamburger {...{isMenuOpen, setIsMenuOpen}} />
        <div className={isMenuOpen ? styles.inner : styles.inner_close}>
          <ul className={styles.content} ref={menuRef}>
            <li>
              <Link className={styles.link} href="/">Home</Link>
            </li>
            {content?.footer_links?.map((item: any, index: number) => (
              <li key={index}>
                <Link className={styles.link} href={item.link_url}>{item.link_title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}