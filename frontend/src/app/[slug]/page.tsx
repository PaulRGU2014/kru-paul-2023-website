"use client"

import '../../scss/global.scss'
import client from "../../../client"
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import ComponentLoader from '@/components/ComponentLoader'
import MenuNav from '@/components/Menus/Menus'
import Footer from '@/components/Footer/Footer'

export default function Page() {
  const [data, setData] = useState(null);
  const [footerData, setFooterData] = useState(null);
  const pathname = usePathname();
  console.log('pathname', pathname);
  
  useEffect(() => {
    async function fetchData() {
      const query = `*[_type=="pages"&& page_url.current=="${pathname}"]{...,components[]->}`;
      const footerQuery = `*[_type=="footer"]{...}`;
      const res = await client.fetch(query);
      const footerRes = await client.fetch(footerQuery);
      setData(res);
      setFooterData(footerRes);
    }
    fetchData();
  }, [pathname]);
  
  if (!data) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <>
      <MenuNav content={(footerData as any)[0]} />
      <ComponentLoader components={(data as any[])[0]?.components} />
      <Footer content={(footerData as any)[0]} pathname={pathname} />
    </>
  );
}