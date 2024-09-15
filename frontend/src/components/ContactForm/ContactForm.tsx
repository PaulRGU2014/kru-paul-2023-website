"use client"

import React, { useState, useCallback } from "react";
import styles from "./ContactForm.module.scss";
import InViewAnim from "../../utils/InViewAnim/InViewAnim";
import { Providers } from "../../utils/Captcha/Providers";
import { useGoogleReCaptcha, GoogleReCaptcha } from "react-google-recaptcha-v3";
import { verifyCaptchaAction } from "../../utils/Captcha/Captcha";

export default function ContactForm() {
  const [recaptchaValid, setRecaptchaValid] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleRecaptchaVerify = useCallback(async (token: string) => {
    if (token) {
      const verified = await verifyCaptchaAction(token);
      setRecaptchaValid(verified);
      console.log("reCAPTCHA verified successfully:", token);
    } else {
      setRecaptchaValid(false);
      console.log("reCAPTCHA verification failed");
    }
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!executeRecaptcha) {
      return;
    }
    const token = await executeRecaptcha("onSubmit");
    const verified = await verifyCaptchaAction(token);

    if (verified) {
      // Here you would send the input data to a database, and 
      // reset the form UI, display success message logic etc.
      console.log("Form submitted successfully");
    } else {
      // Handle form submission error
      console.log("Form submission failed");
    }
  };

  return (
    <InViewAnim>
      <Providers>
        <div className={styles.component}>
          <div className={styles.wrapper}>
            <div className={styles.inner}>
              <section className={styles.form_wrapper}>
                <h3 className={styles.title}>Your Information</h3>
                <form className={styles.form} onSubmit={onSubmit}>
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
                    <GoogleReCaptcha onVerify={handleRecaptchaVerify} />
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