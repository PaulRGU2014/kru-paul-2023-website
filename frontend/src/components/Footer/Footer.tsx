import Link from 'next/link';
import styles from './Footer.module.scss';

const colorArray = ["#CAE4DA", "#E4C8A2", "#EDD6D6", "#B0CDC2", "#E6D0B2", "#E8C4C4", "#8EB8A8", "#EBDAC4", "#DBA6A6"]

export default function Footer() {
    return (
        <footer className={styles.component}>
            <div className={styles.wrapper}>
                <div className={styles.bricks}>
                    {colorArray.map((item, index) => (
                        <div className={styles.bricks_each}
                            key={index}
                            style={{
                                backgroundColor: item,
                                transitionDelay: `${Math.random() * 300 + 500}ms`
                            }}
                        ></div>
                    ))}
                </div>
                <div className={styles.inner}>
                    <div className={styles.link_wrapper}>
                        <Link href="/">Home</Link>
                        <Link href="/about-me">About Me</Link>
                        <Link href="/skills">My Skills</Link>
                        <Link href="/projects">My Projects</Link>
                        <Link href="/contact">Contact Me</Link>
                        <Link href="/online-resume">My Online Résumé</Link>
                    </div>
                    <p className={styles.disclaimer}>
                        This page was hard-coded with Next.js, TypeScript and SCSS, by Paul Thanataweenont
                    </p>
                </div>
            </div>
        </footer>
    )
}