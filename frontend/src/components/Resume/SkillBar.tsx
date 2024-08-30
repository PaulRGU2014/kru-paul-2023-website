
import styles from './Resume.module.scss';

interface Skill {
  level: number;
}

interface SkillBarProps {
  skill: Skill;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={styles.skillBar}>
      {levels.map(level => (
        <label key={level} className={styles.radioLabel}>
          <input
            type="radio"
            name="skillLevel"
            value={level}
            checked={skill.level === level}
            readOnly
            className={styles.radioInput}
          />
          <span className={`${styles.radioSpan} ${skill.level >= level ? styles.active : ''}`}></span>
        </label>
      ))}
    </div>
  );
};

export default SkillBar;