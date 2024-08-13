import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next'
import styles from "./page.module.scss";
import Hero from "./../components/Hero/Hero"
import InViewAnim from './../utils/InViewAnim/InViewAnim'


 
export const metadata: Metadata = {
  title: 'Paul Thanataweenont',
}

export default function Home() {
  return (<>
    <InViewAnim><Hero title="Paul Thanataweenont" subtitle="www.krupaul.com"/>
    <main className={styles.component}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div className={styles.linkWrapper}>
            <Link className={styles.link} href="/about-me">My Story</Link>
            <Link className={styles.link} href="/skills">My Skills</Link>
            <Link className={styles.link} href="/projects">My Projects</Link>
            <Link className={styles.link} href="/contact">My Contact</Link>
            <Link className={styles.link} href="/online-resume">My Online Résumé</Link>
            <li><Link className={styles.link} href="/">My Tech Blog</Link></li>
          </div>
        </div>
      </div>
    </main></InViewAnim>
    </>
  );
}
