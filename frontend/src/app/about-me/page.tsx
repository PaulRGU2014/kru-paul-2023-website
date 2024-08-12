"use client"

import styles from './about-me.module.scss';
import ImageLoader from '@/utils/ImageLoader/ImageLoader';
import content from "./content.json";
import InViewAnim from '@/utils/InViewAnim/InViewAnim';
import { useState, useEffect } from 'react';


export default function AboutMe() {
  const [isClient, setIsClient] = useState(false)

	useEffect(()=>{
    setIsClient(typeof window !== 'undefined')
    return (()=>{
      setIsClient(false)
    })
  },[])

	return (
		<InViewAnim><div className={styles.component}>
			<div className={styles.wrapper}>
				<div className={styles.inner}>
					{content.story.map((item, index) => (
						<ImageLoader className={styles.image} 
							key={index} 	
							style={{
								// if isPortrait is true, then the height will be 2fr, else 1fr
								gridRow: item.isPortrait ? 'span 2' : 'span 1',
								transitionDelay: isClient ? `${Math.random() * 300 + 1000}ms` : '0s'        
							}}
							src={item.image.url} 
							alt={item.image.alt} 
						/>
					))}
				</div>
			</div>
		</div></InViewAnim>
	);
}