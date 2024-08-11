"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import { usePathname } from 'next/navigation';


type HeroProps = {
  title: string;
  subtitle: string;
};

const colorArray = ["#CAE4DA","#E4C8A2", "#EDD6D6" ,"#B0CDC2","#E6D0B2", "#E8C4C4" ,"#8EB8A8","#EBDAC4","#DBA6A6"]

export default function Hero({ title, subtitle }: HeroProps) {
  const [isInView, setIsInView] = useState(false);
  
  const pathname = usePathname()

  useEffect(()=>{
    setTimeout(() => {
      setIsInView(true)
    }, 200);
    return (()=>{
      setIsInView(false)
    })
  },[])

  useEffect(() => {
    setIsInView(false);
    setTimeout(() => {
      setIsInView(true)
    }, 1100);
  }, [pathname])

  return (
    <div  data-in-view={isInView}>
    <div className={styles.component}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div className={styles.bricks}>
            {colorArray.map((item, index)=>(
              <div className={styles.bricks_each}
                key={index}
                style={{
                  backgroundColor:item,
                  transitionDelay: `${Math.random() * 300 + 500}ms`                
                }}
              ></div>
            ))}
          </div>          
          <div className={styles.content}>
            <h2>{title}</h2>
            <h6>{subtitle}</h6>
          </div>  
        </div>
      </div>
    </div>
    </div>
  );
}
