import React from "react";
import styles from "./Header.module.scss";
import LinkWrapper from "../../util/LinkWrapper/LinkWrapper";
import { getStrapiMedia } from "../../../pages/lib/media";
import Image from "../../../imageloader";


export default function Header({ isDark = false }) {
  return (
    <div 
      className={styles.component}
      style={{backgroundColor: `${!!isDark ? '#221E1F' : '#FFF'}`}}
    >
      <div className={styles.wrapper}>
        <LinkWrapper href={"/"} className={isDark = true ? styles.homelink : styles.homelink_light}>
          <Logo isDark={isDark}/>
        </LinkWrapper>
        <MenuBurger />
      </div>
    </div>
  );
}
function Logo({isDark}) {
  return (
    <div className={styles.logo}>
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
      <h4 className={styles.logoText}>
        Paul Thanataweenont's <br/> Official Website
      </h4>
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