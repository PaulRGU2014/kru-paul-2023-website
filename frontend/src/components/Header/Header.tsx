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
        <nav className={styles.nav}>
          <ul>
            {/* <li>
              <Link href="/">Home</Link>
            </li> */}
            <li>
              <Link href="/about-me">About</Link>
            </li>
            <li>
              <Link href="/showcase">Showcase</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/backend">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;