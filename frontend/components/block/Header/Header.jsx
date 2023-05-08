import React from "react";
import styles from "./Header.module.scss";
import LinkWrapper from "../../util/LinkWrapper/LinkWrapper";
import { getStrapiMedia } from "../../../pages/lib/media";
import Image from "../../../imageloader";


export default function Header({ isDark = false }) {
  return (
    <div 
      className={styles.component}
      style={{backgroundColor: `${!!isDark ? '#000000' : '#FFF'}`}}
    >
      <div className={styles.wrapper}>
        <MenuBurger />
        <LinkWrapper href={"/"} className={isDark = true ? styles.homelink : styles.homelink_light}>
          <Logo isDark={isDark}/>
        </LinkWrapper>
      </div>
    </div>
  );
}
function Logo({isDark}) {
  return (
    <div className={styles.logo}>
      <h5 className={styles.logoText}>
        Paul Thanataweenont
      </h5>      
      <div className={styles.icon}>
        <Image
          src="/Logo.svg"
          layout="fill"
          objectFit='cover'
          objectPosition="center"
          style={{
            width: "122px",
            height: "122px"
          }}          
        />
      </div>
    </div>
  );
}
function MenuBurger() {
  return (
    <div className={styles.menuBurger}>
      <div />
      <div />
      <div />
    </div>
  );
}
