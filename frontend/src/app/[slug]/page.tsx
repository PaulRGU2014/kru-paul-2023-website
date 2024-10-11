import '../../scss/global.scss'
import client from "../../../client"
import styles from './page.module.scss'
import ComponentLoader from '@/components/ComponentLoader'
import MenuNav from '@/components/Menus/Menus'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { headers } from 'next/headers'
import { GoogleAnalytics } from '@next/third-parties/google'


export default async function Page() {
  const headersList = headers();
  const pathname = headersList.get('x-pathname') || '';

  const query = `*[_type=="pages"&& page_url.current=="${pathname}"]{...,components[]->}`;
  const footerQuery = `*[_type=="footer"]{...}`;
  const data = await client.fetch(query);
  const footerData = await client.fetch(footerQuery);
  const menuData = await client.fetch(`*[_type=="header"]{...}`);

  if (!data) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <>
      <div className={styles.menuBurger}><MenuNav content={(menuData as any)[0]} /></div>
      <Header content={(menuData as any)[0]} />
      <ComponentLoader components={(data as any[])[0]?.components} />
      <Footer content={(footerData as any)[0]} pathname={pathname} />
      <GoogleAnalytics gaId="G-606GP5V2VM" />
    </>
  );
}