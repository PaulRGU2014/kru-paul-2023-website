import React from 'react';
import LinkWrapper from '../../util/LinkWrapper/LinkWrapper';
import styles from './Footer.module.scss';

// Change Image source to '../../util/Img/Img' + imageObject when integrated into backend
import Image from "../../../imageloader";
import ScrollAnim from '../../util/ScrollAnim/ScrollAnim';

export default function Footer({content}) {
  return(
    <ScrollAnim><div className={styles.component}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div className={styles.logo_wrapper}>
            <div className={styles.logo}>
              <Image
                src="/Logo_1080.png"
                layout="fill"
                objectFit='contain'
                objectPosition="center"
                style={{
                  width: "100%",
                  height: "auto"
                }}          
              />
            </div>
            <p>Copyright © {new Date().getFullYear()} Paul Thanataweenont All rights reserved</p>
          </div>
          <div className={styles.links}>
            {content.links.map((link, index)=>{return(
              <LinkWrapper key={index * Math.random()} href={link.url}>{link.title}</LinkWrapper>
            )})}
          </div>
        </div>
      </div>
    </div></ScrollAnim>
  );
}
