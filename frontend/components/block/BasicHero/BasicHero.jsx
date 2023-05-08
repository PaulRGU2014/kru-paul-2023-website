import React, { useState, useRef, useEffect } from 'react';
import styles from './BasicHero.module.scss';
import reactStringReplace from 'react-string-replace';
import RichText from '../../util/RichText/RichText';
import { Tween } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);
// Change Image source to '../../util/Img/Img' + imageObject when integrated into backend
import Image from "../../../imageloader";
import ScrollAnim from '../../util/ScrollAnim/ScrollAnim';
import { getStrapiMedia } from "../../../pages/lib/media";


export default function BasicHero({content}) {
  const el = useRef()
  const [scrollTrigger, setScrollTrigger] = useState();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    setScrollTrigger({
      trigger: `${styles.component}`,
      start: "top",
      end: "bottom",
      scrub: true,
    });
  }, []);

  let replacedAlphabets;

  replacedAlphabets = reactStringReplace(`${content.title}`, "o", (match, i) => (
    <div key={match +i} style={{color:"#FFD75B"}}>O</div>
  ))
  

  if (!scrollTrigger) return false;

  return(
    <ScrollAnim>
      <div className={styles.component}  ref={el}>
        <div className={styles.wrapper}>
          <div className={styles.inner}>
            {/* <div className={styles.logo}>
              <ChronosLogo />
            </div> */}
            <div className={styles.heading}>
              {
                replacedAlphabets
              }
            </div>
            <RichText className={styles.richtext} html={content.desc}/>
          </div>
          <div className={styles.image_wrapper}>
            <Tween
              to={{
                x: '-400px',
                scrollTrigger,
                rotation: 0
              }}
              duration={1}
            >
              <div className={styles.image}>
                <div className={styles.image_inner}>
                  <Image
                    src={getStrapiMedia(content.img.data?.attributes?.url)}
                    layout="fill"
                    objectFit='contain'
                    objectPosition="center"
                    style={{
                      width: "100%",
                      height: "auto"
                    }}          
                  />
                </div>
              </div>
            </Tween>
          </div>          
        </div>
      </div>
    </ScrollAnim>
  );
}
