import Image from "next/image";
import styles from "./Hero.module.scss";

type HeroProps = {
  image: any;
  content: string;
};

const colorArray = ["#CAE4DA","#E4C8A2", "#EDD6D6" ,"#B0CDC2","#E6D0B2", "#E8C4C4" ,"#8EB8A8","#EBDAC4","#DBA6A6"]

export default function Hero() {
  return (
    <div className={styles.component}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div className={styles.bricks}>
            {colorArray.map((item, index)=>(
              <div className={styles.bricks_each}
                key={index}
                style={{
                  backgroundColor:item,
                  transitionDelay: `${Math.random() * 300 + 500}ms`                
                }}
              ></div>
            ))}
          </div>          
          <div className={styles.content}>
            <h1>Paul Thanataweenont</h1>
            <h6>www.krupaul.com</h6>
          </div>  
        </div>
      </div>
    </div>
  );
}
