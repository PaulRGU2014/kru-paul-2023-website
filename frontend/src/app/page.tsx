import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next'
import styles from "./page.module.scss";
import Hero from "./../components/Hero/Hero"
import InViewAnim from './../utils/InViewAnim/InViewAnim'
import client from "../../client"
// import { createClient } from 'next-sanity';

// const client = createClient({
//   projectId: 'p0zin5nb',
//   dataset: 'production',
//   apiVersion: '2021-03-25',
//   useCdn: true,
// });

// export async function getStaticProps() {
//   const query = `*`;
//   const data = await client.fetch(query);

//   return {
//     props: {
//       data,
//     },
//   };
// }

export async function getStaticProps() {
  const query = `*`;

  const data = await client.fetch(query);
  
  console.log('data', data);

  return {
    props: {
      data,
    },
  };
}

 
export const metadata: Metadata = {
  title: 'Paul Thanataweenont',
}



export default function Home({ data }: { data: any }) {

  return (<>
    <InViewAnim><Hero title="Paul Thanataweenont" subtitle="www.krupaul.com"/>
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
    </>
  );
}
