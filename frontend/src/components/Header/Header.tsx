import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logo_main}>
            <Image src="/Logo_New.svg" alt="Logo" width={150} height={90} style={{objectPosition: "center", objectFit: "cover"}} /><div className={styles.logo_shadow}></div>
          </Link>
          <h5>Krupaul.com</h5>
        </div>
        <ul className={styles.menuLink_wrapper}>
          <li className={styles.menuLink} style={{animationDelay: "200ms"}}>
            <Link href="/about-me">About</Link>
          </li>
          <li className={styles.menuLink} style={{animationDelay: "400ms"}}>
            <Link href="/showcase">Showcase</Link>
          </li>
          <li className={styles.menuLink} style={{animationDelay: "600ms"}}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <ul className={styles.menuLink_wrapper}>
          <li className={styles.menuLink} style={{animationDelay: "800ms"}}>
            <Link href="/backend">Admin</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;