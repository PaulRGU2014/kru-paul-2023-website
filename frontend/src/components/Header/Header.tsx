import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/Logo_big.svg" alt="Logo" width={70} height={70} />
        </Link>
        <h4>Paul Thanataweenont</h4>
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;