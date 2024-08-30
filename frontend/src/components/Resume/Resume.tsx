"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from './Resume.module.scss';
import RichText from '../../utils/RichText/RichText';

type AccordionState = {
  [key: string]: boolean;
};

type MaxHeightState = {
  [key: string]: string;
};

export default function Resume({ content }: { content: any }) {
  const [height, setHeight] = useState<any>("auto");
  const [currentScreenSize, setCurrentScreenSize] = useState<number>(0);
  const [accordionState, setAccordionState] = useState<AccordionState>({
    skills: true,
    career: true,
  });
  const [careerAccordionHeights, setCareerAccordionHeights] = useState<MaxHeightState>({});

  const componentRef = useRef<HTMLDivElement>(null);
  const baseRef = useRef<HTMLDivElement>(null);
  const skillsAccordionRef = useRef<HTMLUListElement>(null);
  const educationAccordionRef = useRef<HTMLUListElement>(null);
  const careerAccordionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (section: string) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleResize = () => {
    if ((componentRef.current && baseRef.current) && (componentRef.current.clientHeight > baseRef.current.clientHeight)) {
      setHeight(componentRef.current.clientHeight);
    } else {
      setHeight("auto");
    }
  };

  const handleAccodionHeights = useCallback(() => {
    const heights: MaxHeightState = {};
    content.career.forEach((_ : any, index: number) => {
      if (careerAccordionRefs.current[index]) {
        heights[`career-${index}`] = `${careerAccordionRefs.current[index]?.scrollHeight}px`;
      }
    });   
    setCareerAccordionHeights(heights); 
  }, [content.career]);

  useEffect(() => {
    setCurrentScreenSize(window.innerWidth);
    setAccordionState({
      skills: true,
      career: true,
    });
    handleAccodionHeights();
    setTimeout(() => {
      setAccordionState({
        skills: false,
        career: false,
      });
      window.addEventListener("resize", () => {
        setCurrentScreenSize(window.innerWidth);
      });
    }, 200);
    return () => {
      window.removeEventListener("resize", () => {
        setCurrentScreenSize(window.innerWidth);
      });
      setAccordionState({
        skills: true,
        career: true,
      });
      setCareerAccordionHeights({});
    };
  }, [handleAccodionHeights]);

  useEffect(() => {
    handleResize();
    handleAccodionHeights();
  }, [currentScreenSize, handleAccodionHeights]);

  console.log('currentScreenSize', currentScreenSize);
  console.log('careerAccordionHeights', careerAccordionHeights);  

  return (
    <div className={styles.component}>
      <div className={styles.headers}>
        <h4>CONTACT</h4>
        <ul>
          <li>Denver, CO</li>
          <li>(720) 416-0816</li>
          <li>linkedin.com/in/paulrgu2014/</li>
        </ul>
      </div>
      <div className={styles.profile}>
        <h4>PROFILE</h4>
        <p>{content.profile_desc}</p>
      </div>
      <section className={styles.career} ref={baseRef}>
        <h4>CAREER EXPERIENCE</h4>
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
              <div className={styles.career_heading}>
                <h5>{career.position}</h5>
                <h6>{career.company}</h6>
                <p>{career.start_date} - {career.end_date}</p>
              </div>
              <div className={`${styles.career_desc} ${accordionState[`career-${index}`] ? '' : styles.hide}`}
                ref={(el) => {
                  careerAccordionRefs.current[index] = el;
                }}
                style={{
                  maxHeight: accordionState[`career-${index}`] ? careerAccordionHeights[`career-${index}`] : '0px',
                }}          
              >
                <RichText 
                  html={career.description} 
                  className={styles.career_richtext}
                />
              </div> 
              {!!career.description && <div className={styles.career_toggle}
                  onClick={() => toggleAccordion(`career-${index}`)}
                >
                  {accordionState[`career-${index}`] ? 'Hide Details' : 'Show Details'}
              </div>}
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
          <div className={styles.floatBox_section}>
            <h4 onClick={() => toggleAccordion('skills')} style={{ cursor: 'pointer' }}>SKILLS</h4>
            <ul ref={skillsAccordionRef}
              style={{
                maxHeight: accordionState.skills ? skillsAccordionRef.current?.scrollHeight + 'px' : '170px'
              }}
              onClick={() => toggleAccordion('skills')}
            >
              {content.skills.sort((a: any, b: any) => (b.is_featured ? 1 : 0) - (a.is_featured ? 1 : 0)).map(
                (
                  skill: { name: string; level: number | string; is_featured?: boolean },
                  index: number
                ) => (
                  <li key={index}>{skill.name}</li>
                )
              )}
            </ul>
            <div
              onClick={() => toggleAccordion('skills')}
              style={{ 
                cursor: 'pointer',
                margin: '10px 0',
              }}
            >{accordionState.skills ? '...less' : 'more...'}</div>
          </div>
          <div className={styles.floatBox_section}>
            <h4 onClick={() => toggleAccordion('education')} style={{ cursor: 'pointer' }}>EDUCATION</h4>
              <ul ref={educationAccordionRef}>
                {content.education.map(
                  (
                    list: {
                      school: string;
                      degree: string;
                      graduation_date: string;
                      start_date: string;
                    },
                    index: number
                  ) => (
                    <li key={index}>
                      <div>{list.school} - {list.degree}</div>
                      <div>({list.start_date} - {list.graduation_date})</div> 
                    </li>
                  )
                )}
              </ul>
          </div>
        </div>
      </section>
    </div>
  );
}