import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <p>
        Thank you for visiting my website. I am a software engineer with a passion for web development.
      </p>
      <div className={styles.description}>
        <Link href="/about-me">About Me</Link>
        <Link href="/skills">My Skills</Link>
        <Link href="/projects">My Projects</Link>
        <Link href="/contact">Contact Me</Link>
        <Link href="/online-resume">My Online Résumé</Link>
      </div>
    </main>
  );
}
