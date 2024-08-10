import Image from "next/image";
import styles from "./Hero.module.scss";

type HeroProps = {
  image: any;
  content: string;
};

export default function Hero() {
  return (
    <div className={styles.component}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1>Paul Thanataweenont</h1>
          <h6>www.krupaul.com</h6>
        </div>  
      </div>
    </div>
  );
}
