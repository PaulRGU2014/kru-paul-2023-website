import '../scss/global.scss'
import styles from './page.module.scss'
import client from "../../client"
import ComponentLoader from '@/components/ComponentLoader'
import MenuNav from '@/components/Menus/Menus'
import Footer from '@/components/Footer/Footer'
import { headers } from 'next/headers'
import Header from '@/components/Header/Header'
import InViewAnim from '@/utils/InViewAnim/InViewAnim'
import Link from 'next/link'

type FooterDataType = {
  // Define the structure of your footer data here
  // Example:
  title: string;
  links: { title: string; url: string }[];
};

export default async function Page() {
  const headersList = headers();
  const pathname = headersList.get('x-pathname') || '';

  const query = `*[_type=="pages"&& page_url.current=="${pathname}"]{...,components[]->}`;
  const footerQuery = `*[_type=="footer"]{...}`;
  const data = await client.fetch(query);
  const footerData = await client.fetch(footerQuery);
      <div className={styles.menuBurger}><MenuNav content={(footerData as FooterDataType[])[0]} /></div>
  if (!data) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <InViewAnim>
      <div className={styles.menuBurger}><MenuNav content={(footerData as any)[0]} /></div>
      <Header />
      <ComponentLoader components={(data as any[])[0]?.components} />
      <main className={styles.component}>
        <div className={styles.wrapper}>
          <div className={styles.inner}>
            <div className={styles.linkWrapper}>
              {/* <Link className={styles.link} href="/about-me">My Story</Link> */}
              {/* <Link className={styles.link} href="/skills">My Skills</Link> */}
              {/* <Link className={styles.link} href="/projects">My Projects</Link> */}
              {/* <Link className={styles.link} href="/contact">My Contact</Link> */}
              {/* <Link className={styles.link} href="/online-resume">My Online Résumé</Link> */}
              {/* <Link className={styles.link} href="/">My Tech Blog</Link> */}
            </div>
          </div>
        </div>
      </main>      
      <Footer content={(footerData as any)[0]} pathname={pathname} />
    </InViewAnim>
  );
}