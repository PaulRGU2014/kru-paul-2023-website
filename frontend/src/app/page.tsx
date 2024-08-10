import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next'
import styles from "./page.module.scss";
 
export const metadata: Metadata = {
  title: 'Paul Thanataweenont',
}

export default function Home() {
  return (
    <main className={styles.component}>
      <h1>Thank you for Visiting my website</h1>
      <h3>It is under maintenance right now</h3>
      <h4>I will see you soon</h4>
      <h6 style={{textAlign: "right"}}>Paul Thanataweenont</h6>
    </main>
  );
}
