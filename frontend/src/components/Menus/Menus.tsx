"use client"

import styles from './Menus.module.scss';
import React, { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import Image from 'next/image';

interface MenuNavProps {
  content: any;
  onClick?: () => void; // Define the onClick prop
}

function Hamburger({ isMenuOpen, hamburgerRef, onClick }: { isMenuOpen: boolean, hamburgerRef: React.RefObject<HTMLDivElement>, onClick?: () => void }) {
  return (
    <div
      ref={hamburgerRef}
      className={isMenuOpen ? styles.hamburger_wrapper_open : styles.hamburger_wrapper}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      <div className={styles.hamburger_first} />
      <div className={styles.hamburger_second} />
      <div className={styles.hamburger_third} />
    </div>
  );
}

function MenuContent({ content, isMenuOpen, setIsMenuOpen, isMenuOpening, menuRef }: { content: any, isMenuOpen: boolean, setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>, isMenuOpening: boolean, menuRef: React.RefObject<HTMLUListElement> }) {
  return (
    <div className={isMenuOpen ? styles.inner : styles.inner_close}>
      <ul className={styles.content} ref={menuRef}>
        {/* <Link href="/" className={styles.logo_main}>
          <Image src="/Logo_New.svg" alt="Logo" width={200} height={120} style={{objectPosition: "left", objectFit: "cover"}} />
        </Link>           */}
        {content?.footer_links?.map((item: any, index: number) => (
          <li 
            className={`${styles.link} ${isMenuOpen === true ? styles.open : ""}`} 
            key={index} 
            style={{ transitionDelay: isMenuOpening ? `${(index + 1) * 200}ms` : "0ms" }}
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            <Link href={item.link_url}>{item.link_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MenuNav({ content }: MenuNavProps) {
  console.log("MenuContent", content);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpening, setIsMenuOpening] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  // This is the handle click outside function
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

  const menuListNumber = content?.footer_links?.length || 0;

  function handleMenuToggle () {
    if (!isMenuOpen) {
      setIsMenuOpening(true);
      setIsMenuOpen(true);
      setTimeout(() => {
        setIsMenuOpening(false);
      }, menuListNumber * 100 + 100);
    } else {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={isMenuOpen ? styles.component : styles.component_close}>
      <div className={`${styles.wrapper} ${isMenuOpen ? styles.open : ""}`}>
        <Hamburger isMenuOpen={isMenuOpen} hamburgerRef={hamburgerRef} onClick={handleMenuToggle} />
        <MenuContent {...{content, isMenuOpen, isMenuOpening, menuRef}} />
      </div>
    </div>
  );
}