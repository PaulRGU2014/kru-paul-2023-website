import Image from "next/image";
import styles from "./Hero.module.scss";

type HeroProps = {
  image: any;
  content: string;
};

export default function Hero({ image, content }: HeroProps) {
  return (
    <div className={styles.component}>
      <h1 className={styles.title}>{content}</h1>
      <Image
        src={image}
        alt="Paul's photo"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}
