"use client"

import { useEffect, useState } from "react";
import Link from 'next/link';
import styles from './Footer.module.scss';
import InViewAnim from './../../utils/InViewAnim/InViewAnim'
import { usePathname } from 'next/navigation';


const colorArray = ["#CAE4DA", "#E4C8A2", "#EDD6D6", "#B0CDC2", "#E6D0B2", "#E8C4C4", "#8EB8A8", "#EBDAC4", "#DBA6A6"]


export default function Footer() {
    const [isClient, setIsClient] = useState(false)
    const [isHomePage, setIsHomePage] = useState<boolean>()
    const pathname = usePathname()

    useEffect(()=>{
        setIsClient(typeof window !== 'undefined')
        if(pathname === "/"){
            setIsHomePage(true)
        } else {
            setIsHomePage(false)
        }
        return (()=>{
          setIsClient(false)
          setIsHomePage(false)
        })
      },[])

      useEffect(()=>{
        if(pathname === "/"){
            setIsHomePage(true)
        } else {
            setIsHomePage(false)
        }        
      },[pathname])


    return (
        <InViewAnim><footer className={styles.component}>
            <div className={styles.wrapper}>
                <div className={styles.bricks}>
                    {colorArray.map((item, index) => (
                        <div className={styles.bricks_each}
                            key={index}
                            style={{
                                backgroundColor: item,
                                transitionDelay: isClient ? `${Math.random() * 300 + 500}ms` : '0s'        
                            }}
                        ></div>
                    ))}
                </div>
                <div className={styles.inner}>
                    {!isHomePage &&
                    <ul className={styles.link_wrapper}>
                        <li><Link className={styles.link} href="/">Home</Link></li>
                        <li><Link className={styles.link} href="/about-me">My Story</Link></li>
                        <li><Link className={styles.link} href="/skills">My Skills</Link></li>
                        <li><Link className={styles.link} href="/projects">My Projects</Link></li>
                        <li><Link className={styles.link} href="/contact">My Contact</Link></li>
                        <li><Link className={styles.link} href="/online-resume">My Online Résumé</Link></li>
                    </ul>}
                    <h5 className={styles.disclaimer}>
                        This page was hard-coded with Next.js, TypeScript and SCSS, by Paul Thanataweenont
                    </h5>
                </div>
            </div>
        </footer></InViewAnim>
    )
}