"use client"

import React, { useState } from "react";
import styles from "./ContactForm.module.scss";
import InViewAnim from "../../utils/InViewAnim/InViewAnim";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [recaptchaValid, setRecaptchaValid] = useState(false);
  return (
    <InViewAnim>
      <div className={styles.component}>
        <div className={styles.wrapper}>
          <div className={styles.inner}>
            <section className={styles.form_wrapper}>
              <div className={styles.title}>Contact</div>
              <form
                className={styles.form}
                method="POST"
                action="https://formspree.io/f/xnqlwbzy"
              >
                <div className={styles.info}>
                  <div className={styles.info_wrapper}>
                    <input type="text" name="name" id="name" placeholder="Enter your name here" />
                    <label htmlFor="name">Your Name</label>
                  </div>
                  <div className={styles.info_wrapper}>
                    <input type="email" name="email" id="email" placeholder="Enter your email here" />
                    <label htmlFor="email">Your Email</label>
                  </div>
                  <div className={styles.info_wrapper}>
                    <input type="tel" name="phone" id="phone" placeholder="Enter phone number here"/>                    
                    <label htmlFor="phone">Your Phone</label>
                  </div>
                </div>
                <div className={styles.project}>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Enter your message here"
                    onInput={(e) => {
                      const target = e.target as HTMLTextAreaElement;
                      target.style.height = "auto";
                      target.style.height = target.scrollHeight + "px";
                    }}
                  />                  
                  <label htmlFor="message">About Your Project</label>
                  <div
                    className={styles.project_button}
                    style={{
                      transform: isExpanded ? "rotate(168deg)" : "rotate(0deg)",
                    }}
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.7696 11.171L0.956168 9.03261L8.21478 0.737055L11.7696 11.171Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
                <div className={styles.recapcha}>
                  <button disabled={!recaptchaValid}>Get in Touch</button>       
                  <ReCAPTCHA
                    sitekey="6LdW4UQqAAAAAB3K7hRRo3qo7WQ2FqQVqeQJfMNb"
                    onChange={() => setRecaptchaValid(true)}
                    onExpired={() => setRecaptchaValid(false)}
                    size="normal"
                  />           
                </div>
              </form>
            </section>
            <section className={styles.map}>
              <MapPinPoint />
              <p>12081 W. Alameda Pkwy.</p>
              <p>#457</p>
              <p>Lakewood, CO 80228</p>
              <p>303.988.1890</p>
            </section>
          </div>
        </div>
      </div>
    </InViewAnim>
  );
}

function MapPinPoint() {
  return (
  <svg xmlns="http://www.w3.org/2000/svg" width="83" height="63" viewBox="0 0 83 63" fill="none">
    <path d="M48.4365 40.4345C46.3715 41.8111 43.973 42.5388 41.5 42.5388C39.0272 42.5388 36.6286 41.8111 34.5637 40.4345L0.552631 17.7598C0.363936 17.634 0.180104 17.5028 0 17.368V54.5229C0 58.7829 3.45698 62.1636 7.6407 62.1636H75.3591C79.619 62.1636 82.9998 58.7067 82.9998 54.5229V17.3678C82.8194 17.503 82.6353 17.6345 82.4461 17.7604L48.4365 40.4345Z" fill="#EF5033"/>
    <path d="M3.25029 13.7132L37.2613 36.388C38.5488 37.2464 40.0243 37.6755 41.4998 37.6755C42.9755 37.6755 44.4512 37.2463 45.7387 36.388L79.7497 13.7132C81.785 12.3571 83 10.0876 83 7.63811C83 3.42634 79.5735 0 75.3619 0H7.63811C3.42651 0.000162109 0 3.42651 0 7.64216C0 10.0876 1.21517 12.3571 3.25029 13.7132Z" fill="#EF5033"/>
  </svg>
  );
}