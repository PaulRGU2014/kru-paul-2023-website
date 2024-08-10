import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.component}>
            <div className={styles.inner}>
                <p className={styles.disclaimer}>
                    This page was hard-coded with Next.js, TypeScript and SCSS, by Paul Thanataweenont
                </p>
                <div className={styles.link_wrapper}>
                    <Link href="/">Home</Link>
                    <Link href="/about-me">About Me</Link>
                    <Link href="/skills">My Skills</Link>
                    <Link href="/projects">My Projects</Link>
                    <Link href="/contact">Contact Me</Link>
                    <Link href="/online-resume">My Online Résumé</Link>
                </div>
            </div>
        </footer>
    )
}