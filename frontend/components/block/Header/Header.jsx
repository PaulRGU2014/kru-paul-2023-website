import React from "react";
import styles from "./Header.module.scss";
import LinkWrapper from "../../util/LinkWrapper/LinkWrapper";
export default function Header({ isDark = false }) {
  return (
    <div 
      className={styles.component}
      style={{backgroundColor: `${!!isDark ? '#221E1F' : '#FFF'}`}}
    >
      <div className={styles.wrapper}>
        <LinkWrapper href={"/"}>
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
        <div className={styles.iconCut}>
          {!!isDark ? 
          <svg
          width="47"
          height="46"
          viewBox="0 0 47 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.6733 11.0946L46.2712 5.81688L44.4999 2.5L40.9747 0.42688L35.6943 10.084C31.9867 6.52272 26.9631 4.32501 21.4098 4.32501C9.99822 4.32501 0.753418 13.581 0.753418 24.9867C0.753418 36.3923 9.98217 45.6483 21.4098 45.6483C32.8374 45.6483 42.0822 36.3923 42.0822 24.9867C42.0822 19.6288 40.0117 14.7681 36.6733 11.0946Z"
              fill="#221E1F"
            />
          </svg>          
          :
          <svg
            width="47"
            height="46"
            viewBox="0 0 47 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.6733 11.0946L46.2712 5.81688L44.4999 2.5L40.9747 0.42688L35.6943 10.084C31.9867 6.52272 26.9631 4.32501 21.4098 4.32501C9.99822 4.32501 0.753418 13.581 0.753418 24.9867C0.753418 36.3923 9.98217 45.6483 21.4098 45.6483C32.8374 45.6483 42.0822 36.3923 42.0822 24.9867C42.0822 19.6288 40.0117 14.7681 36.6733 11.0946Z"
              fill="white"
            />
          </svg>          
          }
        </div>
      </div>
      <div className={styles.logoText}>
        <img
          className={styles.logo}
          src={!!isDark ? "/logo_white.svg": "/logo.svg"}
          alt="Chronos Interactive"
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
