import Image from "next/image"
import styles from "./Hero.module.scss"

export default function Hero({image}: {image: any}) {
    return (
        <div className={styles.component}>
            {/* <div className={styles.gradient}></div> */}
            <Image
                src={image}
                alt="Paul's photo"
                sizes="100vw"
                style={{
                width: '100%',
                height: 'auto',
                }}
            />
        </div>
    )
}