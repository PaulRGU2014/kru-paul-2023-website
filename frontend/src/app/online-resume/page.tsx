"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./page.module.scss";
import RichText from "@/utils/RichText/RichText";
import content from "./content.json";

export default function Resume() {
  // get the height of .component everytime the window is resized
  const [height, setHeight] = useState<any>("auto");
  const componentRef = useRef<HTMLDivElement>(null);
  const baseRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleResize = () => {
      if ((componentRef.current && baseRef.current) && (componentRef.current.clientHeight > baseRef.current.clientHeight)) {
        setHeight(componentRef.current.clientHeight);
      } else {
        setHeight("auto");
      }
    };
    window.addEventListener("load resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("load resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.component}>
      <div className={styles.headers}>
        <h1>Paul Thanataweenont</h1>
        <ul>
          <li>Denver, CO</li>
          <li>(720) 416-0816</li>
          <li>linkedin.com/in/paulrgu2014/</li>
        </ul>
      </div>
      <section className={styles.desc} ref={baseRef}>
        {/* this section is scrollable */}
        <p>
          Website developer with over 2 years of experience. My current projects
          are focusing on several frameworks such as NextJS, ReactJS, Twig,
          ElectronJS, Drupal, Stapi, SanityIO and Contentful
        </p>
        <h2>CAREER EXPERIENCE</h2>
        {content.career.map(
          (
            career: {
              company: string;
              position: string;
              start_date: string;
              end_date: string;
              description: string;
            },
            index: number
          ) => (
            <div key={index}>
              <h3>{career.position}</h3>
              <h3>
                {career.start_date} - {career.end_date}
              </h3>
              <h3>{career.company}</h3>
              <RichText html={career.description} children={null} />
            </div>
          )
        )}
      </section>
      <section
        className={styles.floatBox_wrapper}
        ref={componentRef}
        style={{ height: height }}
      >
        <div className={styles.floatBox}>
          <h2>Skills</h2>
          <ul>
            {content.skills.map(
              (
                skill: { name: string; level: number | string },
                index: number
              ) => (
                <li key={index}>{skill.name}</li>
              )
            )}
          </ul>
          <h2>Education</h2>
          <ul>
            {content.education.map(
              (
                list: {
                  school: string;
                  degree: string;
                  graduation_date: string;
                },
                index: number
              ) => (
                <li key={index}>
                  <h3>{list.school}</h3>
                  <p>{list.degree}</p>
                  <p>{list.graduation_date}</p>
                </li>
              )
            )}
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
