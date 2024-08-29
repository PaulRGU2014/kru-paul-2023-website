"use client"

import '../../scss/global.scss'
import client from "../../../client"
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'


export default function Page({children}: {children: React.ReactNode}) {
  const [data, setData] = useState(null);
  const pathname = usePathname();
  console.log('pathname', pathname);
  useEffect(() => {
    async function fetchData() {
      const query = `*[_type=="pages"&& page_url.current=="${pathname}"]{...,components[]->}`;
      const res = await client.fetch(query);
      setData(res);
    }
    fetchData();
  }, [pathname]);

  if (!data) {
    return <div>Loading...</div>;
  }

  console.log('data', data);

  return (
    <>
      <div>It works</div>
    </>
  )
}