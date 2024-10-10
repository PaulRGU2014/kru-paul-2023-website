"use client"

import styles from './SquareLogos.module.scss';
import ImageLoader from '@/utils/ImageLoader/ImageLoader';
// import content from "./content.json";
import RichText from '@/utils/RichText/RichText';
import InViewAnim from '@/utils/InViewAnim/InViewAnim';
import Modal from '@/utils/Modal/Modal';
import { useState, useEffect, useRef} from 'react';
import { set } from 'lodash';


export default function SquareLogos({content}: { content: any }) {
  const [isClient, setIsClient] = useState(false)
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [currentScreenWidth, setCurrentScreenWidth] = useState<number>(0);
    const [currentImageHeight, setCurrentImageHeight] = useState<number>(0);
    const [showTransitionDelay, setShowTransitionDelay] = useState<boolean>(true);
    
    const imageRef = useRef<HTMLImageElement>(null);
    console.log('currentImageHeight', currentImageHeight);

    useEffect(()=>{
    setIsClient(typeof window !== 'undefined');
        setCurrentScreenWidth(window.innerWidth)
        setCurrentImageHeight(imageRef.current?.clientHeight || 0)
    return (()=>{
      setIsClient(false)
            setCurrentScreenWidth(0)
            setCurrentImageHeight(0)
    })
  },[])

    // when resizing the window, update the currentScreenWidth state
    useEffect(()=>{
        const handleResize = () => {
            setCurrentScreenWidth(window.innerWidth)
            setCurrentImageHeight(imageRef.current?.clientHeight || 0)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    },[])

    // Remove transitionDelay after 1300ms
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTransitionDelay(false);
        }, 1300);

        return () => clearTimeout(timer);
    }, []);

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
                        }}
                    />}
                    <div className={styles.modal_content}>
                        {!!content.images[currentImageIndex].image_description && <RichText html={content.images[currentImageIndex].image_description} />}
                    </div>
                </div>
            </Modal>
            <div className={styles.component}>
            <div className={styles.wrapper}
                style={{
                    paddingBottom: currentScreenWidth >= 768 ?
                        content.images.length % 3 === 2 ?
                            `${currentImageHeight / 4}px` : 
                                content.images.length % 3 === 1 ? 
                                    '0px' : 
                                    `${currentImageHeight / 2}px` :
                        content.images.length % 2 === 1 ?
                            '0px' : 
                            `${currentImageHeight / 4}px`
                }}
            >
                <div className={styles.inner}>
                    {content.images.map((item: any, index: number) => (
                        <ImageLoader className={styles.image} 
                            key={index} 	
                            ref={imageRef}
                            style={{
                                top: currentScreenWidth >= 768 ? `calc(${(index % 3) * 25}%)` : `calc(${(index % 2) * 25}%)`,
                                transitionDelay: showTransitionDelay && isClient ? `${Math.random() * 300 + 1000}ms` : '0s'
                            }}
                            src={item.asset._ref} 
                            alt={item.image_title}
              objectFit='contain'
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