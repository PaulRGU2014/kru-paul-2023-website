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
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about-me">About Me</Link></li>
                        <li><Link href="/skills">My Skills</Link></li>
                        <li><Link href="/projects">My Projects</Link></li>
                        <li><Link href="/contact">Contact Me</Link></li>
                        <li><Link href="/online-resume">My Online Résumé</Link></li>
                    </ul>}
                    <h5 className={styles.disclaimer}>
                        This page was hard-coded with Next.js, TypeScript and SCSS, by Paul Thanataweenont
                    </h5>
                </div>
            </div>
        </footer></InViewAnim>
    )
}