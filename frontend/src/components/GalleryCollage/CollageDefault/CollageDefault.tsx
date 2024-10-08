"use client"

import styles from './CollageDefault.module.scss';
import ImageLoader from '@/utils/ImageLoader/ImageLoader';
// import content from "./content.json";
import RichText from '@/utils/RichText/RichText';
import InViewAnim from '@/utils/InViewAnim/InViewAnim';
import Modal from '@/utils/Modal/Modal';
import { useState, useEffect, useRef } from 'react';


export default function CollageDefault({content}: { content: any }) {
  const [isClient, setIsClient] = useState(false)
	const [modalOpen, setModalOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
	// console.log('gallery collage', content);

	useEffect(()=>{
    setIsClient(typeof window !== 'undefined');
    return (()=>{
      setIsClient(false)
    })
  },[])

	return (
		<InViewAnim>
			<Modal isOpen={modalOpen} onClose={()=>setModalOpen(false)}>
				<div className={styles.modal_inner}>
					{ currentImageIndex >=0 && <ImageLoader 
						className={styles.modalImage}	
						src={currentImageIndex !== undefined ? content.images[currentImageIndex].asset._ref : ''} 
						alt={currentImageIndex !== undefined ? content.images[currentImageIndex].image_title : ''}
						objectFit="contain"
						objectPosition='center'
						style={{
							// paddingTop: content.story[currentImageIndex].isPortrait===true ? '200%' : '100%',
						}}
					/>}
					<div className={styles.modal_content}>
						{/* {!!content.images[currentImageIndex].title && <h6>{content.images[currentImageIndex].title }</h6>} */}
						{!!content.images[currentImageIndex].image_description && <RichText html={content.images[currentImageIndex].image_description} />}
					</div>
				</div>
			</Modal>
			<div className={styles.component}>
			<div className={styles.wrapper}>
				<div className={styles.inner}>
					{content.images.map((item: any, index: number) => (
						<ImageLoader className={styles.image} 
							key={index} 	
							style={{
								gridRow: item.is_portrait===true ? 'span 2' : 'span 1',
								paddingTop: item.is_portrait===true ? '200%' : '100%',
								transitionDelay: isClient ? `${Math.random() * 300 + 1000}ms` : '0s'        
							}}
							src={item.asset._ref} 
							alt={item.image_title}
							onClick={()=>{
								setModalOpen(true);
								setCurrentImageIndex(index)
							}}
						/>
					))}
				</div>
			</div>
		</div></InViewAnim>
	);
}