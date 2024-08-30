import React, { useEffect, useState, useRef } from 'react';
import styles from './Resume.module.scss';

interface Skill {
  level: number;
}

interface SkillBarProps {
  skill: Skill;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  const [width, setWidth] = useState(0);
  const skillBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setWidth(skill.level * 10); // Assuming each level represents 10% width
            }, 100); // Delay to trigger the animation
          } else {
            setWidth(0); // Reset to 0 when out of view
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    if (skillBarRef.current) {
      observer.observe(skillBarRef.current);
    }

    return () => {
      if (skillBarRef.current) {
        observer.unobserve(skillBarRef.current);
      }
    };
  }, [skill.level]);

  return (
    <div className={styles.skillBarContainer}>
      <div
        className={styles.skillBar}
        ref={skillBarRef}
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

export default SkillBar;