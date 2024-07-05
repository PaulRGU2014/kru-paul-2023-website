import styles from "./page.module.scss";
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Paul Thanataweenont - Online Resume',
}

export default function Resume() {
    return (
        <div className={styles.component}>
            <div>
                <h1>Paul Thanataweenont</h1>
                <ul>
                    <li>Denver, CO</li>
                    <li>(720) 416-0816</li>
                    <li>linkedin.com/in/paulrgu2014/</li>
                </ul>
            </div>
            <section>
                {/* this section is scrollable */}
                <p>Website developer with over 2 years of experience. My current projects are focusing on several frameworks such as NextJS, ReactJS, Twig, ElectronJS, Drupal, Stapi, SanityIO and Contentful</p>
            </section>
            <section>
                {/* we'll float this section at all time */}
            </section>
        </div>
    );
}