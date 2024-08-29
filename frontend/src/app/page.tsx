// 'use client'

import Link from "next/link";
// import { Metadata } from 'next'
import styles from "./page.module.scss";
import Hero from "../components/Hero/Hero"
import InViewAnim from '../utils/InViewAnim/InViewAnim'
import Footer from '../components/Footer/Footer'



export default function Home() {

  return (<>
    <InViewAnim><Hero content={{hero_title:"Paul Thanataweenont", hero_subtitle:"www.krupaul.com"}}/>
    <main className={styles.component}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div className={styles.linkWrapper}>
            <Link className={styles.link} href="/about-me">My Story</Link>
            {/* <Link className={styles.link} href="/skills">My Skills</Link> */}
            {/* <Link className={styles.link} href="/projects">My Projects</Link> */}
            {/* <Link className={styles.link} href="/contact">My Contact</Link> */}
            <Link className={styles.link} href="/online-resume">My Online Résumé</Link>
            {/* <Link className={styles.link} href="/">My Tech Blog</Link> */}
          </div>
        </div>
      </div>
    </main></InViewAnim>
    <Footer pathname="/" />
    </>
  );
}
