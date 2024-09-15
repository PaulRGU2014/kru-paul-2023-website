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
              <h3 className={styles.title}>Your Information</h3>
              <form
                className={styles.form}
                method="POST"
                action="https://formspree.io/f/xnqlwbzy"
              >
                <div className={styles.info}>
                  <div className={styles.info_wrapper}>
                    <input type="text" name="name" id="name" placeholder="Enter your name here" />
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className={styles.info_wrapper}>
                    <input type="email" name="email" id="email" placeholder="Enter your email here" />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className={styles.info_wrapper}>
                    <input type="tel" name="phone" id="phone" placeholder="Enter phone number here"/>                    
                    <label htmlFor="phone">Phone</label>
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
                  <label htmlFor="message">A little information about your project</label>
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
          </div>
        </div>
      </div>
    </InViewAnim>
  );
}