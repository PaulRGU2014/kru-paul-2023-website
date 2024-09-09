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
import ScrollSync from '@/utils/ScrollSync/ScrollSync'
import HomeScroll from '@/components/HomeScroll/HomeScroll'

export default async function Page() {
  const headersList = headers();
  const pathname = headersList.get('x-pathname') || '';

  const query = `*[_type=="pages"&& page_url.current=="${pathname}"]{...,components[]->}`;
  const footerQuery = `*[_type=="footer"]{...}`;
  const data = await client.fetch(query);
  const footerData = await client.fetch(footerQuery);

  if (!data) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <div>
      <div className={styles.menuBurger}><MenuNav content={(footerData as any)[0]} /></div>
      <Header />
      <HomeScroll />
      <Footer content={(footerData as any)[0]} pathname={pathname} />
    </div>
  );
}
