"use client"

import { useEffect, useState } from "react";
import Link from 'next/link';
import styles from './Footer.module.scss';
import InViewAnim from './../../utils/InViewAnim/InViewAnim'


const colorArray = ["#CAE4DA", "#E4C8A2", "#EDD6D6", "#B0CDC2", "#E6D0B2", "#E8C4C4", "#8EB8A8", "#EBDAC4", "#DBA6A6"]

// get the content from sanity and pass it as props


export default function Footer({content, pathname}: {content?: any, pathname: string}) {
    const [isClient, setIsClient] = useState(false)
    const [isHomePage, setIsHomePage] = useState<boolean>()

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
      },[, pathname])

    useEffect(()=>{
    if(pathname === "/"){
        setIsHomePage(true)
    } else {
        setIsHomePage(false)
    }        
    },[, pathname])

    console.log('isHomePage', isHomePage)

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
                        {!isHomePage && <li>
                            <Link className={styles.link} href="/">Home</Link>
                        </li>}
                        {!!content && content.footer_links?.map((item: any, index: number) => (
                            <li key={index}>
                                <Link className={styles.link} href={item.link_url}>{item.link_title}</Link>
                            </li>
                        ))}
                    </ul>}
                    <div className={styles.social_wrapper}>
                        <Link href="https://github.com/PaulRGU2014" className={styles.social} target="_blank">
                            <img src="/socials/github.svg" alt="Github" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/paulrgu2014/" className={styles.social} target="_blank">
                            <img src="/socials/linkedin.svg" alt="LinkedIn" />
                        </Link>
                        <Link href="https://www.youtube.com/c/PaulsChemistryThailand" className={styles.social} target="_blank">
                            <img src="/socials/youtube.svg" alt="Youtube" />
                        </Link>
                    </div>
                    <h5 className={styles.disclaimer}>
                        This page is buit using Next.js, TypeScript and Sanity.io <br/> by Paul Thanataweenont
                    </h5>
                </div>
            </div>
        </footer></InViewAnim>
    )
}