import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next'
import styles from "./page.module.scss";
import Hero from "./../components/Hero/Hero"


 
export const metadata: Metadata = {
  title: 'Paul Thanataweenont',
}

export default function Home() {
  return (<>
    <Hero title="Paul Thanataweenont" subtitle="www.krupaul.com"/>
    <main className={styles.component}>
      <div className={styles.wrapper}>
        <div className={styles.linkWrapper}>
          <Link href="/about-me">My Story</Link>
          <Link href="/skills">My Skills</Link>
          <Link href="/projects">My Projects</Link>
          <Link href="/contact">My Contact</Link>
          <Link href="/online-resume">My Online Résumé</Link>
        </div>
      </div>
    </main>
    </>
  );
}
