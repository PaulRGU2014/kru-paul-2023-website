import React, {useState,useEffect} from "react";
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

export default function Header({ isDark = false }) {
  const [scrollTrigger, setScrollTrigger] = useState<scrollTriggerType>();

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
      style={{backgroundColor: `${!!isDark ? '#000000' : '#FFF'}`}}
    >
      <div className={styles.wrapper}>
        <MenuBurger />
        <Logo isDark={isDark} scrollTrigger={scrollTrigger}/>
      </div>
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
    <div onClick={()=>router.push('/')} className={isDark = true ? styles.homelink : styles.homelink_light}>
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
function MenuBurger() {
  return (
    <div className={styles.menuBurger}>
      <div />
      <div />
      <div />
    </div>
  );
}
