import React from 'react';
import styles from './Example.module.scss';

export default function Example({content}) {
  return(
    <div className={styles.component}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <p className={styles.body_lg_bold}>Headline Styles</p>
          <div className={styles.underline}></div>
          <h1>h1 400 150px/100%</h1>
          <h2>h2 400 100px/114%</h2>
          <h3>h3 500 50px/142%</h3>
          <h4>h4 500 40px/142%</h4>
          <h5>h5 500 35px/117%</h5>
          <h6>h6 500 24px/117%</h6>
        </div>
        <div className={styles.body}>
          <p className={styles.body_lg_bold}>Body Copy Styles</p>
          <div className={styles.underline}></div>
          <p className={styles.body_lg_bold}>Body Lg Bold</p>
          <p className={styles.body_med_bold}>Body Med Bold</p>
          <p className={styles.body_med}>Body Med</p>
          <p className={styles.body_sm_bold}>Body Sm Bold</p>
          <p className={styles.body_sm}>Body Sm</p>
        </div>
        <div className={styles.body}>
          <p className={styles.body_lg_bold}>Navigation Styles</p>
          <div className={styles.underline}></div>
          <p className={styles.tab}></p>
          <p className={styles.mainnav}></p>
        </div>
        <div className={styles.body}>
          <p className={styles.body_lg_bold}>Misc. Styles</p>
          <div className={styles.underline}></div>
          <p className={styles.stats}>Stats</p>
          <p className={styles.job_title}>Job Title</p>
          <a>Button Label</a>
        </div>
        <div className={styles.body}>
          <p className={styles.body_lg_bold}>Buttons / Links</p>
          <div className={styles.underline}></div>
          <a className={styles.button_blue}>
            Blue Button
          </a>
          <a className={styles.button_gold}>
            Gold Button
          </a>
          <a className={styles.button_blue_cta}>
            Blue Button CTA
          </a>
          <a className={styles.button_gold_cta}>
            Gold Button CTA
          </a>
          <a className={styles.link_default}>Link Default</a>
        </div>
        <div className={styles.body}>
          <p className={styles.body_lg_bold}>Text Links</p>
          <div className={styles.underline}></div>
          <a className={styles.link_text}>A04300</a>
        </div>
      </div>
    </div>
  );
}
