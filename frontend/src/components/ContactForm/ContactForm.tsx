"use client"

import React, { useState, useCallback } from "react";
import styles from "./ContactForm.module.scss";
import InViewAnim from "../../utils/InViewAnim/InViewAnim";
import { Providers } from "../../utils/Captcha/Providers";
import { useGoogleReCaptcha, GoogleReCaptcha } from "react-google-recaptcha-v3";

export default function ContactForm() {
  const [recaptchaValid, setRecaptchaValid] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [token, setToken] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!executeRecaptcha) {
      console.log('reCAPTCHA not yet loaded');
      return;
    }

    const recaptchaToken = await executeRecaptcha('reCapcha executed');
    setToken(recaptchaToken);
    setRecaptchaValid(true);

    // Send the token to your backend for verification
  };

  return (
    <InViewAnim>
      <Providers>
        <div className={styles.component}>
          <div className={styles.wrapper}>
            <div className={styles.inner}>
              <section className={styles.form_wrapper}>
                <h3 className={styles.title}>Your Information</h3>
                <form className={styles.form} onSubmit={handleSubmit}>
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
                      <input type="tel" name="phone" id="phone" placeholder="Enter phone number here" />
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
                    <button type="submit" disabled={!recaptchaValid}>Get in Touch</button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </Providers>
    </InViewAnim>
  );
}