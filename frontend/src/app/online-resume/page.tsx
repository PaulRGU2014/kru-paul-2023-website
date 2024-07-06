'use client'

import {useState, useEffect, useRef} from "react";
import styles from "./page.module.scss";


export default function Resume() {
    // get the height of .component everytime the window is resized
    const [height, setHeight] = useState<any>("auto");
    const componentRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleResize = () => {
            if (componentRef.current) {
                setHeight(componentRef.current.clientHeight);
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [componentRef]);
    
    return (
        <div 
            className={styles.component} 
            ref={componentRef}
            style={{height: height}}
        >
            <div className={styles.headers}>
                <h1>Paul Thanataweenont</h1>
                <ul>
                    <li>Denver, CO</li>
                    <li>(720) 416-0816</li>
                    <li>linkedin.com/in/paulrgu2014/</li>
                </ul>
            </div>
            <section className={styles.desc}>
                {/* this section is scrollable */}
                <p>Website developer with over 2 years of experience. My current projects are focusing on several frameworks such as NextJS, ReactJS, Twig, ElectronJS, Drupal, Stapi, SanityIO and Contentful</p>
                <h2>CAREER EXPERIENCE</h2>
                <div>
                    <h3>Full Stack Developer• 01/2024 – Present</h3>
                    <h3>CorporateAlliance</h3>
                    <ul>
                        <li>esigned and developed a secure, scalable e-commerce platform that increased online sales by 40% within the first six months of launch.</li>
                        <li>Implemented a continuous integration/continuous deployment (CI/CD) pipeline, reducing the code deployment time by 50% and increasing the development team's productivity.</li>
                        <li>Collaborated with the UX/UI team to create intuitive and responsive web interfaces, improving the website's bounce rate by 20%.</li>
                        <li>Developed a real-time analytics tool that provided valuable insights into customer behavior, leading to a 15% increase in marketing campaign effectiveness.</li>
                    </ul>
                </div>
                <div>
                    <h3>Full Stack Developer• 01/2024 – Present</h3>
                    <h3>CorporateAlliance</h3>
                    <ul>
                        <li>esigned and developed a secure, scalable e-commerce platform that increased online sales by 40% within the first six months of launch.</li>
                        <li>Implemented a continuous integration/continuous deployment (CI/CD) pipeline, reducing the code deployment time by 50% and increasing the development team's productivity.</li>
                        <li>Collaborated with the UX/UI team to create intuitive and responsive web interfaces, improving the website's bounce rate by 20%.</li>
                        <li>Developed a real-time analytics tool that provided valuable insights into customer behavior, leading to a 15% increase in marketing campaign effectiveness.</li>
                    </ul>
                </div>
                <div>
                    <h3>Full Stack Developer• 01/2024 – Present</h3>
                    <h3>CorporateAlliance</h3>
                    <ul>
                        <li>esigned and developed a secure, scalable e-commerce platform that increased online sales by 40% within the first six months of launch.</li>
                        <li>Implemented a continuous integration/continuous deployment (CI/CD) pipeline, reducing the code deployment time by 50% and increasing the development team's productivity.</li>
                        <li>Collaborated with the UX/UI team to create intuitive and responsive web interfaces, improving the website's bounce rate by 20%.</li>
                        <li>Developed a real-time analytics tool that provided valuable insights into customer behavior, leading to a 15% increase in marketing campaign effectiveness.</li>
                    </ul>
                </div>
                <div>
                    <h3>Full Stack Developer• 01/2024 – Present</h3>
                    <h3>CorporateAlliance</h3>
                    <ul>
                        <li>esigned and developed a secure, scalable e-commerce platform that increased online sales by 40% within the first six months of launch.</li>
                        <li>Implemented a continuous integration/continuous deployment (CI/CD) pipeline, reducing the code deployment time by 50% and increasing the development team's productivity.</li>
                        <li>Collaborated with the UX/UI team to create intuitive and responsive web interfaces, improving the website's bounce rate by 20%.</li>
                        <li>Developed a real-time analytics tool that provided valuable insights into customer behavior, leading to a 15% increase in marketing campaign effectiveness.</li>
                    </ul>
                </div>
            </section>
            <section className={styles.floatBox_wrapper}>
                <div className={styles.floatBox}>
                    <h2>Skills</h2>
                    <ul>
                        <li>JavaScript</li>
                        <li>ReactJS</li>
                        <li>NextJS</li>
                        <li>NodeJS</li>
                        <li>ElectronJS</li>
                        <li>Drupal</li>
                        <li>Stapi</li>
                        <li>SanityIO</li>
                        <li>Contentful</li>
                    </ul>
                    <h2>Education</h2>
                    <ul>
                        <li>BS in Computer Science, University of Colorado Boulder</li>
                    </ul>
                    <h2>Projects</h2>
                    <ul>
                        <li>Project 1</li>
                        <li>Project 2</li>
                        <li>Project 3</li>
                    </ul>
                    <h2>Certifications</h2>
                    <ul>
                        <li>CompTIA Security+</li>
                        <li>CompTIA Network+</li>
                        <li>CompTIA A+</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}