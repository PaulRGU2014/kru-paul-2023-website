import React, { useState , useEffect } from "react";
import styles from "./Header.module.scss";
import { getStrapiMedia } from "../../../pages/lib/media";
import Image from "../../../imageloader";
import { Tween } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import { useRouter } from "next/router";

gsap.registerPlugin(ScrollTrigger);

type scrollTriggerType ={
  trigger: string,
  start: any,
  end: any,
  scrub: boolean
}

export default function Header({ isDark = false , menuData}) {
  const [scrollTrigger, setScrollTrigger] = useState<scrollTriggerType>();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      setScrollTrigger({
        trigger: `${styles.component}`,
        start: "top",
        end: "500px",
        scrub: true,
      });
    }, []);

    if (!scrollTrigger) return false;

  return (
    <Tween
    to={{
      scrollTrigger,
      rotation: 0,
      height:100,
      paddingTop:10,
      paddingBottom:10,
    }}
  >
    <div 
      className={styles.component}
      style={{backgroundColor: `${isDark === true ? '#000000' : '#FFF'}`}}
    >
      <div className={styles.wrapper}>
        <MenuBurger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        <Logo isDark={isDark} scrollTrigger={scrollTrigger}/>
      </div>
      <MenuPopup isMenuOpen={isMenuOpen} menuData={menuData}/>
   </div>
</Tween>
  );
}

function Logo({isDark, scrollTrigger}) {
  const router = useRouter()
  return (
    <Tween
      to={{
        scrollTrigger,
        rotation: 0,
        scaleX:0.5,
        scaleY:0.5,
        x:120
      }}
    >
    <div onClick={()=>router.push('/')} className={isDark === true ? styles.homelink : styles.homelink_light}>
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
      </div>
    </Tween>
  );
}

function MenuBurger({isMenuOpen, setIsMenuOpen}) {
  if (isMenuOpen === false){
    return (
      <div className={styles.menuBurger} onClick={()=>setIsMenuOpen(true)}>
        <div />
        <div />
        <div />
      </div>
    );  
  } else if (isMenuOpen === true) {
    return(
      <div className={styles.menuBurger_close} onClick={()=>setIsMenuOpen(false)}>
        <div/>
        <div style={{rotate:"90deg"}}/>
        <div style={{opacity:"0"}}/>
      </div>              
    )
  }
}

function MenuPopup({menuData, isMenuOpen}) {
  const router = useRouter()
  return(
    <div className={`${styles.menu_wrapper} ${isMenuOpen === true ? styles.menuOpen : styles.menuClose}`}>
      <div className={styles.menu}>
        {menuData.links.map((link: { id: React.Key; url: any; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal; }) => {
          return(
            <div key={link.id} className={styles.menu_list} onClick={()=>router.push(`${link.url}`)}>{link.title}</div>
          )
        })}
      </div>
    </div>
  )
}