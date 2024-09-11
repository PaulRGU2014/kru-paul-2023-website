"use client"

import styles from './Menus.module.scss';
import React, { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import Image from 'next/image';

function Hamburger({ isMenuOpen, setIsMenuOpen, hamburgerRef }: { isMenuOpen: boolean, setIsMenuOpen: (isOpen: boolean) => void, hamburgerRef: React.RefObject<HTMLDivElement> }) {
  return (
    <div
      ref={hamburgerRef}
      className={isMenuOpen ? styles.hamburger_wrapper_open : styles.hamburger_wrapper}
      onClick={() => {
        console.log("Hamburger clicked");
        setTimeout(() => {
          setIsMenuOpen(!isMenuOpen);
        }, 100);
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
  const hamburgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, hamburgerRef]);

  return (
    <div className={isMenuOpen ? styles.component : styles.component_close}>
      <div className={`${styles.wrapper} ${isMenuOpen ? styles.open : ""}`}>
        <Hamburger {...{isMenuOpen, setIsMenuOpen, hamburgerRef}} />
        <div className={isMenuOpen ? styles.inner : styles.inner_close}>
          <ul className={styles.content} ref={menuRef}>
            <Link href="/" className={styles.logo_main}>
              <Image src="/Logo_New.svg" alt="Logo" width={150} height={90} style={{objectPosition: "left", objectFit: "cover"}} />
            </Link>          
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