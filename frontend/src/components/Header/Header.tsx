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
            <Image src="/Logo_big.svg" alt="Logo" width={72} height={72} style={{objectPosition: "center", objectFit: "cover"}} />
          </Link>
          <h5>Paul Thanataweenont</h5>
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