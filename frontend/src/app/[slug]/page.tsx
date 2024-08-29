"use client"

import '../../scss/global.scss'
import client from "../../../client"
import { useState, useEffect } from 'react'


export default function Page({children}: {children: React.ReactNode}) {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const query = `*[_type=="pages"]{...,components[]->}`;
      const res = await client.fetch(query);
      setData(res);
    }
    fetchData();
  }, []);

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