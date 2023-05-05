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
          <div className={styles.chronos}>
            <div className={styles.logo}>
              <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M56.2713 12.2398L46.6734 17.5175C50.0118 21.191 52.0823 26.0517 52.0823 31.4096C52.0823 42.8152 42.8374 52.0713 31.4098 52.0713C19.9823 52.0713 10.7535 42.8152 10.7535 31.4096C10.7535 20.004 19.9983 10.7479 31.4098 10.7479C36.9632 10.7479 41.9868 12.9456 45.6944 16.5069L50.9748 6.84979C45.6141 2.56667 38.8089 0 31.4098 0C14.0598 0 0 14.0525 0 31.3935C0 48.7346 14.0598 62.7871 31.4098 62.7871C48.7599 62.7871 62.8197 48.7346 62.8197 31.3935C62.8197 24.1748 60.3801 17.5175 56.2713 12.2238V12.2398Z" fill="#EF5033"/>
              </svg>
            </div>
            <p>Copyright © {new Date().getFullYear()} Chronos Interactive All rights reserved</p>
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
