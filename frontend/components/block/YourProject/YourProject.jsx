import React from 'react';
import styles from './YourProject.module.scss';
import RichText from '../../util/RichText/RichText';
import LinkWrapper from '../../util/LinkWrapper/LinkWrapper';
import ScrollAnim from '../../util/ScrollAnim/ScrollAnim';

export default function YourProject({content}) {
  return(
    <ScrollAnim><div className={styles.component}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <h4>{content.title}</h4>
          <RichText className={styles.richtext} html={content.desc} />
          <LinkWrapper href={content.link.url}>{content.link.title}</LinkWrapper>
        </div>
      </div>
    </div></ScrollAnim>
  );
}
