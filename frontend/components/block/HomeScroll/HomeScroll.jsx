import React, { useEffect, useRef, useState } from "react";
import styles from "./HomeScroll.module.scss";
import { Tween } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

export default function HomeScroll() {
  const [scrollTriggers, setScrollTriggers] = useState({});

  useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      setTimeout(() => {
        window.scrollTo({top:0});
        setScrollTriggers({
          circ: {
            trigger: `.${styles.quarters}`,
            start: "top+10%",
            end: "bottom",
            scrub: true,
          },
        });
      }, 100);
  }, []);

  if (!scrollTriggers) return null;
  return (
    <div className={styles.component}>
      <div className={styles.wrapper}>
        <CircIntro scrollTrigger={scrollTriggers.circ} />
        <HeroText scrollTrigger={scrollTriggers.circ} />
        <HeroSub scrollTrigger={scrollTriggers.circ} />
        <InfoSteps />
      </div>
    </div>
  );
}

function HeroText({ scrollTrigger }) {
  if (!scrollTrigger) return null;
  return (
    <div className={styles.heroText}>
      <Tween to={{ y: 300, x: 200, opacity: -0.5, scrollTrigger }} duration={1}>
        <h1>THINK.</h1>
      </Tween>
      <Tween
        to={{ y: 400, x: -200, opacity: -0.5, scrollTrigger }}
        duration={1}
      >
        <h1>DESIGN.</h1>
      </Tween>
      <Tween to={{ y: 500, x: 200, opacity: -0.5, scrollTrigger }} duration={1}>
        <h1>CODE.</h1>
      </Tween>
    </div>
  );
}

function HeroSub({ scrollTrigger }) {
  if (!scrollTrigger) return null;
  return (
    <div className={styles.heroSubWrap}>
      <p className={styles.heroSub}>
        We bring innovative <strong>strategy</strong>, creative{" "}
        <strong>design </strong>, and <strong>technology</strong> expertise to
        every interactive solution we provide.
      </p>
    </div>
  );
}

function InfoSteps() {
  const lockIntroRef = useRef();
  useEffect(() => {
    if (lockIntroRef.current) {
      const setupScrollEvents = () => {
        const rect = lockIntroRef.current.getBoundingClientRect();
        if (rect.top <= 0) {
          lockIntroRef.current.classList.add(styles.isLocked);
        } else {
          lockIntroRef.current.classList.remove(styles.isLocked);
        }
      };
      window.addEventListener("scroll", setupScrollEvents);
      return () => window.removeEventListener("scroll", setupScrollEvents);
    }
  }, [lockIntroRef.current]);

  const getScrolltriggerIn = (trigger, bump = 0) => {
    const start = 400 + bump;
    return {
      trigger: `.${styles[trigger]}`,
      start: `top+=${start}`,
      end: "+=500",
      scrub: true,
    };
  };

  const getScrolltriggerOut = (trigger) => ({
    trigger: `.${styles[trigger]}`,
    start: "+=800",
    end: "+=1000",
    scrub: true,
  });

  return (
    <div className={styles.infoSteps}>
      <div
        className={`${styles.infoStep} ${styles.infoStepA}`}
        ref={lockIntroRef}
      >
        <div className={styles.infoStepContain}>
          <Tween
            from={{
              y: -600,
              x: 300,
              rotationZ: 120,
              rotationX: 90,
              rotationY: 90,
              scaleX: 3,
              scaleY: 3,
              opacity: 0,
              scrollTrigger: getScrolltriggerIn("infoStepA", -100),
            }}
            duration={1}
          >
            <div>
              <Tween
                to={{
                  rotationX: 90,
                  rotationY: -90,
                  rotationZ: 90,
                  opacity: 0,
                  scrollTrigger: getScrolltriggerOut("infoStepA", -100),
                  duration: 1,
                }}
              >
                <div className={styles.infoStepsLogo}>
                  <Tween
                    from={{
                      x: 50,
                      rotationY: 90,

                      scrollTrigger: getScrolltriggerIn("infoStepA", -100),
                    }}
                    duration={1}
                  >
                    <div className={styles.logoLeft}>
                      <svg
                        width="160"
                        height="82"
                        viewBox="0 0 160 82"
                        fill="currentColor"
                      >
                        <path d="M33.8053 81.6589C40.8934 57.3203 61.6442 38.7962 87.203 34.9816C90.3964 34.505 93.6649 34.258 96.9912 34.258C99.979 34.258 102.919 34.4578 105.798 34.8446C107.158 35.0273 108.505 35.2517 109.836 35.5164C122.324 37.9987 133.52 44.0295 142.375 52.4963C142.375 52.4963 142.375 52.4964 142.375 52.4963L142.788 52.0839L142.788 52.0833L159.32 21.8331C142.242 8.18102 120.563 3.63131e-06 96.9912 0C51.481 -4.08522e-06 13.0769 30.3657 0.930176 71.9458L33.8053 81.6589Z" />{" "}
                      </svg>
                    </div>
                  </Tween>
                  <Tween
                    from={{
                      x: -80,
                      y: -120,
                      rotationX: 120,
                      scrollTrigger: getScrolltriggerIn("infoStepA", -100),
                    }}
                    duration={1}
                  >
                    <div className={styles.logoBottom}>
                      <svg
                        width="146"
                        height="149"
                        viewBox="0 0 146 149"
                        fill="currentColor"
                      >
                        <path d="M34.3086 46.3773C34.5222 40.8973 35.4051 35.5886 36.878 30.531L4.00292 20.8179C1.62557 28.956 0.25405 37.5236 0.0319355 46.3773C0.0106034 47.2276 0 48.0805 0 48.936C-2.36035e-05 104.209 44.791 149 100.064 149C100.567 149 101.07 148.996 101.571 148.989C111.805 148.838 121.665 147.152 130.933 144.15C129.909 144.482 128.876 144.798 127.837 145.097L118.156 112.33C112.87 113.836 107.312 114.699 101.571 114.828C101.07 114.839 100.568 114.844 100.064 114.844C63.6585 114.844 34.258 85.3415 34.258 48.9871C34.258 48.113 34.2749 47.2431 34.3086 46.3773Z" />{" "}
                        <path d="M145.571 1.4861C145.53 1.44679 145.489 1.40751 145.448 1.3683L145.861 0.955566L145.571 1.4861Z" />
                      </svg>
                    </div>
                  </Tween>
                  <Tween
                    from={{
                      x: 150,
                      rotationZ: 75,
                      scrollTrigger: getScrolltriggerIn("infoStepA", -100),
                    }}
                    duration={1}
                  >
                    <div className={styles.logoRight}>
                      <svg
                        width="83"
                        height="158"
                        viewBox="0 0 83 158"
                        fill="currentColor"
                      >
                        <path d="M0.201172 125.175C2.7886 124.438 5.31079 123.546 7.75723 122.511C13.3155 120.16 18.4828 117.067 23.1356 113.357C23.6359 112.959 24.1302 112.553 24.6183 112.14C29.38 108.112 33.5614 103.42 37.0202 98.2079C43.9379 87.7834 47.9657 75.2762 47.9657 61.832C47.9657 44.7542 41.3697 29.2614 30.7344 17.5523L61.3109 0.730084V0.678955C74.4006 17.5523 82.1727 38.7717 82.1727 61.7808C82.1727 107.417 51.6392 145.907 9.88233 157.942L0.201172 125.175Z" />{" "}
                      </svg>
                    </div>
                  </Tween>
                </div>
              </Tween>
            </div>
          </Tween>
          <Tween
            from={{
              rotationX: -90,
              y: 50,
              opacity: 0,
              scrollTrigger: getScrolltriggerIn("infoStepA", 100),
              duration: 1,
            }}
          >
            <h2>STRATEGY</h2>
          </Tween>
          <Tween
            from={{
              y: 100,
              opacity: 0,
              scrollTrigger: getScrolltriggerIn("infoStepA", 110),
              duration: 1,
            }}
          >
            <h3>
              Intelligently architected solutions for your unique challenges
            </h3>
          </Tween>
          <Tween
            from={{
              y: 150,
              opacity: 0,
              scrollTrigger: getScrolltriggerIn("infoStepA", 120),
              duration: 1,
            }}
          >
            <p>
              We take the time to understand your goals so we can craft a
              solution that sets you up for success from the beginning.
            </p>
          </Tween>
          <Tween
            from={{
              y: 200,
              opacity: 0,
              scrollTrigger: getScrolltriggerIn("infoStepA", 130),
              duration: 1,
            }}
          >
            <a href="#">Our Services</a>
          </Tween>
        </div>
      </div>
      <div className={`${styles.infoStep} ${styles.infoStepB}`}>
        <div className={styles.infoStepContain}>
          <Tween
            to={{
              rotationX: 90,
              rotationY: 90,
              opacity: 0,
              scrollTrigger: getScrolltriggerOut("infoStepB"),
              duration: 1,
            }}
          >
            <div className={styles.infoStepsLogo}>
              <Tween
                from={{
                  x: 50,
                  rotationY: 90,
                  scrollTrigger: getScrolltriggerIn("infoStepB"),
                }}
                duration={1}
              >
                <div className={styles.logoLeft}>
                  <svg
                    width="160"
                    height="82"
                    viewBox="0 0 160 82"
                    fill="currentColor"
                  >
                    <path d="M33.8053 81.6589C40.8934 57.3203 61.6442 38.7962 87.203 34.9816C90.3964 34.505 93.6649 34.258 96.9912 34.258C99.979 34.258 102.919 34.4578 105.798 34.8446C107.158 35.0273 108.505 35.2517 109.836 35.5164C122.324 37.9987 133.52 44.0295 142.375 52.4963C142.375 52.4963 142.375 52.4964 142.375 52.4963L142.788 52.0839L142.788 52.0833L159.32 21.8331C142.242 8.18102 120.563 3.63131e-06 96.9912 0C51.481 -4.08522e-06 13.0769 30.3657 0.930176 71.9458L33.8053 81.6589Z" />{" "}
                  </svg>
                </div>
              </Tween>
              <Tween
                from={{
                  x: -80,
                  y: -120,
                  rotationX: 120,
                  scrollTrigger: getScrolltriggerIn("infoStepB"),
                }}
                duration={1}
              >
                <div className={styles.logoBottom}>
                  <svg
                    width="146"
                    height="149"
                    viewBox="0 0 146 149"
                    fill="currentColor"
                  >
                    <path d="M34.3086 46.3773C34.5222 40.8973 35.4051 35.5886 36.878 30.531L4.00292 20.8179C1.62557 28.956 0.25405 37.5236 0.0319355 46.3773C0.0106034 47.2276 0 48.0805 0 48.936C-2.36035e-05 104.209 44.791 149 100.064 149C100.567 149 101.07 148.996 101.571 148.989C111.805 148.838 121.665 147.152 130.933 144.15C129.909 144.482 128.876 144.798 127.837 145.097L118.156 112.33C112.87 113.836 107.312 114.699 101.571 114.828C101.07 114.839 100.568 114.844 100.064 114.844C63.6585 114.844 34.258 85.3415 34.258 48.9871C34.258 48.113 34.2749 47.2431 34.3086 46.3773Z" />{" "}
                    <path d="M145.571 1.4861C145.53 1.44679 145.489 1.40751 145.448 1.3683L145.861 0.955566L145.571 1.4861Z" />
                  </svg>
                </div>
              </Tween>
              <Tween
                from={{
                  x: 150,
                  rotationZ: 75,
                  scrollTrigger: getScrolltriggerIn("infoStepB"),
                }}
                duration={1}
              >
                <div className={styles.logoRight}>
                  <svg
                    width="83"
                    height="158"
                    viewBox="0 0 83 158"
                    fill="currentColor"
                  >
                    <path d="M0.201172 125.175C2.7886 124.438 5.31079 123.546 7.75723 122.511C13.3155 120.16 18.4828 117.067 23.1356 113.357C23.6359 112.959 24.1302 112.553 24.6183 112.14C29.38 108.112 33.5614 103.42 37.0202 98.2079C43.9379 87.7834 47.9657 75.2762 47.9657 61.832C47.9657 44.7542 41.3697 29.2614 30.7344 17.5523L61.3109 0.730084V0.678955C74.4006 17.5523 82.1727 38.7717 82.1727 61.7808C82.1727 107.417 51.6392 145.907 9.88233 157.942L0.201172 125.175Z" />{" "}
                  </svg>
                </div>
              </Tween>
            </div>
          </Tween>
          <Tween
            to={{
              y: -50,
              rotationX: 90,
              opacity: 0,
              scrollTrigger: getScrolltriggerOut("infoStepB"),
              duration: 1,
            }}
          >
            <h2>DESIGN</h2>
          </Tween>
          <Tween
            to={{
              y: -100,
              opacity: 0,
              scrollTrigger: getScrolltriggerOut("infoStepB"),
              duration: 1,
            }}
          >
            <h3>
              Engaging interfaces that are as user-friendly as they are
              beautiful
            </h3>
          </Tween>
          <Tween
            to={{
              y: -150,
              opacity: 0,
              scrollTrigger: getScrolltriggerOut("infoStepB"),
              duration: 1,
            }}
          >
            <p>
              We combine proven architecture, usability best practices, and
              top-notch art direction to create digital products that are a joy
              to use.
            </p>
          </Tween>
          <Tween
            to={{
              y: -200,
              opacity: 0,
              scrollTrigger: getScrolltriggerOut("infoStepB"),
              duration: 1,
            }}
          >
            <a href="#">Our Services</a>
          </Tween>
        </div>
      </div>
      <div className={`${styles.infoStep} ${styles.infoStepC}`}>
        <div className={styles.infoStepContain}>
          <Tween
            to={{
              rotationX: -90,
              rotationY: 90,
              opacity: 0,
              scrollTrigger: getScrolltriggerOut("infoStepC"),
              duration: 1,
            }}
          >
            <div className={styles.infoStepsLogo}>
              <Tween
                from={{
                  x: 50,
                  rotationY: 90,
                  scrollTrigger: getScrolltriggerIn("infoStepC"),
                }}
                duration={1}
              >
                <div className={styles.logoLeft}>
                  <svg
                    width="160"
                    height="82"
                    viewBox="0 0 160 82"
                    fill="currentColor"
                  >
                    <path d="M33.8053 81.6589C40.8934 57.3203 61.6442 38.7962 87.203 34.9816C90.3964 34.505 93.6649 34.258 96.9912 34.258C99.979 34.258 102.919 34.4578 105.798 34.8446C107.158 35.0273 108.505 35.2517 109.836 35.5164C122.324 37.9987 133.52 44.0295 142.375 52.4963C142.375 52.4963 142.375 52.4964 142.375 52.4963L142.788 52.0839L142.788 52.0833L159.32 21.8331C142.242 8.18102 120.563 3.63131e-06 96.9912 0C51.481 -4.08522e-06 13.0769 30.3657 0.930176 71.9458L33.8053 81.6589Z" />{" "}
                  </svg>
                </div>
              </Tween>
              <Tween
                from={{
                  x: -80,
                  y: -120,
                  rotationX: 120,
                  scrollTrigger: getScrolltriggerIn("infoStepC"),
                }}
                duration={1}
              >
                <div className={styles.logoBottom}>
                  <svg
                    width="146"
                    height="149"
                    viewBox="0 0 146 149"
                    fill="currentColor"
                  >
                    <path d="M34.3086 46.3773C34.5222 40.8973 35.4051 35.5886 36.878 30.531L4.00292 20.8179C1.62557 28.956 0.25405 37.5236 0.0319355 46.3773C0.0106034 47.2276 0 48.0805 0 48.936C-2.36035e-05 104.209 44.791 149 100.064 149C100.567 149 101.07 148.996 101.571 148.989C111.805 148.838 121.665 147.152 130.933 144.15C129.909 144.482 128.876 144.798 127.837 145.097L118.156 112.33C112.87 113.836 107.312 114.699 101.571 114.828C101.07 114.839 100.568 114.844 100.064 114.844C63.6585 114.844 34.258 85.3415 34.258 48.9871C34.258 48.113 34.2749 47.2431 34.3086 46.3773Z" />{" "}
                    <path d="M145.571 1.4861C145.53 1.44679 145.489 1.40751 145.448 1.3683L145.861 0.955566L145.571 1.4861Z" />
                  </svg>
                </div>
              </Tween>
              <Tween
                from={{
                  x: 150,
                  rotationZ: 75,
                  scrollTrigger: getScrolltriggerIn("infoStepC"),
                }}
                duration={1}
              >
                <div className={styles.logoRight}>
                  <svg
                    width="83"
                    height="158"
                    viewBox="0 0 83 158"
                    fill="currentColor"
                  >
                    <path d="M0.201172 125.175C2.7886 124.438 5.31079 123.546 7.75723 122.511C13.3155 120.16 18.4828 117.067 23.1356 113.357C23.6359 112.959 24.1302 112.553 24.6183 112.14C29.38 108.112 33.5614 103.42 37.0202 98.2079C43.9379 87.7834 47.9657 75.2762 47.9657 61.832C47.9657 44.7542 41.3697 29.2614 30.7344 17.5523L61.3109 0.730084V0.678955C74.4006 17.5523 82.1727 38.7717 82.1727 61.7808C82.1727 107.417 51.6392 145.907 9.88233 157.942L0.201172 125.175Z" />{" "}
                  </svg>
                </div>
              </Tween>
            </div>
          </Tween>
          <Tween
            to={{
              y: -50,
              rotationX: 90,
              opacity: 0,
              scrollTrigger: getScrolltriggerOut("infoStepC"),
              duration: 1,
            }}
          >
            <h2>TECHNOLOGY</h2>
          </Tween>
          <Tween
            to={{
              y: -100,
              opacity: 0,
              scrollTrigger: getScrolltriggerOut("infoStepC"),
              duration: 1,
            }}
          >
            <h3>
              Expertly-built digital products across a variety of technologies
            </h3>
          </Tween>
          <Tween
            to={{
              y: -150,
              opacity: 0,
              scrollTrigger: getScrolltriggerOut("infoStepC"),
              duration: 1,
            }}
          >
            <p>
              We ask the questions no one else thinks of, focus on strategy
              before execution, and sweat the details that make a good result
              great.
            </p>
          </Tween>
          <Tween
            to={{
              y: -200,
              opacity: 0,
              scrollTrigger: getScrolltriggerOut("infoStepC"),
              duration: 1,
            }}
          >
            <a href="#">Our Services</a>
          </Tween>
        </div>
      </div>

      <div className={`${styles.infoStep} ${styles.infoStepD}`}>
        <div className={styles.infoStepContain}>
          <Tween
            to={{
              rotationX: 90,
              rotationY: 90,
              opacity: 0,
              scrollTrigger: getScrolltriggerOut("infoStepD"),
              duration: 1,
            }}
          >
            <div className={styles.infoStepsLogo}>
              <Tween
                from={{
                  x: 50,
                  rotationY: 90,
                  scrollTrigger: getScrolltriggerIn("infoStepD"),
                }}
                duration={1}
              >
                <div className={styles.logoLeft}>
                  <svg
                    width="160"
                    height="82"
                    viewBox="0 0 160 82"
                    fill="currentColor"
                  >
                    <path d="M33.8053 81.6589C40.8934 57.3203 61.6442 38.7962 87.203 34.9816C90.3964 34.505 93.6649 34.258 96.9912 34.258C99.979 34.258 102.919 34.4578 105.798 34.8446C107.158 35.0273 108.505 35.2517 109.836 35.5164C122.324 37.9987 133.52 44.0295 142.375 52.4963C142.375 52.4963 142.375 52.4964 142.375 52.4963L142.788 52.0839L142.788 52.0833L159.32 21.8331C142.242 8.18102 120.563 3.63131e-06 96.9912 0C51.481 -4.08522e-06 13.0769 30.3657 0.930176 71.9458L33.8053 81.6589Z" />{" "}
                  </svg>
                </div>
              </Tween>
              <Tween
                from={{
                  scaleX: 0.5,
                  scaleY: 0.5,
                  opacity: 0,
                  scrollTrigger: getScrolltriggerIn("infoStepD"),
                }}
                duration={1}
              >
                <div className={styles.logoBottom}>
                  <svg
                    width="146"
                    height="149"
                    viewBox="0 0 146 149"
                    fill="currentColor"
                  >
                    <path d="M34.3086 46.3773C34.5222 40.8973 35.4051 35.5886 36.878 30.531L4.00292 20.8179C1.62557 28.956 0.25405 37.5236 0.0319355 46.3773C0.0106034 47.2276 0 48.0805 0 48.936C-2.36035e-05 104.209 44.791 149 100.064 149C100.567 149 101.07 148.996 101.571 148.989C111.805 148.838 121.665 147.152 130.933 144.15C129.909 144.482 128.876 144.798 127.837 145.097L118.156 112.33C112.87 113.836 107.312 114.699 101.571 114.828C101.07 114.839 100.568 114.844 100.064 114.844C63.6585 114.844 34.258 85.3415 34.258 48.9871C34.258 48.113 34.2749 47.2431 34.3086 46.3773Z" />{" "}
                    <path d="M145.571 1.4861C145.53 1.44679 145.489 1.40751 145.448 1.3683L145.861 0.955566L145.571 1.4861Z" />
                  </svg>
                </div>
              </Tween>
              <Tween
                from={{
                  scaleX: 0.5,
                  scaleY: 0.5,
                  opacity: 0,
                  scrollTrigger: getScrolltriggerIn("infoStepD"),
                }}
                duration={1}
              >
                <div className={styles.logoRight}>
                  <svg
                    width="83"
                    height="158"
                    viewBox="0 0 83 158"
                    fill="currentColor"
                  >
                    <path d="M0.201172 125.175C2.7886 124.438 5.31079 123.546 7.75723 122.511C13.3155 120.16 18.4828 117.067 23.1356 113.357C23.6359 112.959 24.1302 112.553 24.6183 112.14C29.38 108.112 33.5614 103.42 37.0202 98.2079C43.9379 87.7834 47.9657 75.2762 47.9657 61.832C47.9657 44.7542 41.3697 29.2614 30.7344 17.5523L61.3109 0.730084V0.678955C74.4006 17.5523 82.1727 38.7717 82.1727 61.7808C82.1727 107.417 51.6392 145.907 9.88233 157.942L0.201172 125.175Z" />{" "}
                  </svg>
                </div>
              </Tween>
            </div>
          </Tween>
          <h2>Chronos</h2>
          <h3>Creative experts from concept to code</h3>
          <p>
            You need skilled advice on the best way to design, build, and scale
            your digital product. Think of us as an extension of your team.
          </p>
          <a href="#">The Value We Bring </a>
        </div>
      </div>
    </div>
  );
}

function CircIntro({ scrollTrigger }) {
  const el = useRef();
  useEffect(() => {
    setTimeout(() => {
    if (el.current) {
      const quarters = Array.from(
        el.current.querySelectorAll(`.${styles.quarter}`)
      );
      for (const quarter of quarters) {
        quarter.classList.add(styles.jsVisible);
      }
    }
    }, 10)
  }, [el.current]);

  if (!scrollTrigger) return false;
  const qStruct = (
    <div className={styles.quarterPlacer}>
      <div className={styles.quarter}>
        <svg width="271" height="271" viewBox="0 0 271 271" fill="currentColor">
          <path d="M173.482 270.157C173.482 174.502 95.655 96.675 0 96.675V0C148.965 0 270.157 121.192 270.157 270.157H173.482V270.157Z" />
        </svg>
      </div>
    </div>
  );
  return (
    <div className={styles.quartersContain}>
      <div className={styles.quarters} ref={el}>
        <Tween
          to={{ z: 1000, opacity: 0, scrollTrigger, rotationY: 180 }}
          duration={1}
        >
          {qStruct}
        </Tween>
        <Tween
          to={{ z: 500, opacity: -2, scrollTrigger, rotationX: 90 }}
          duration={1}
        >
          {qStruct}
        </Tween>
        <Tween
          to={{ z: -700, opacity: -1, scrollTrigger, rotationX: -270 }}
          duration={1}
        >
          {qStruct}
        </Tween>
        <Tween
          to={{ z: -400, opacity: 0, scrollTrigger, rotationY: 270 }}
          duration={1}
        >
          {qStruct}
        </Tween>
        <Tween
          to={{ z: -1000, opacity: -4, scrollTrigger, rotationY: 90 }}
          duration={1}
        >
          {qStruct}
        </Tween>
        <Tween
          to={{ z: -1800, opacity: -3, scrollTrigger, rotationX: 90 }}
          duration={1}
        >
          {qStruct}
        </Tween>
        <Tween
          to={{ z: -200, opacity: -6, scrollTrigger, rotationY: -90 }}
          duration={1}
        >
          {qStruct}
        </Tween>
        <Tween
          to={{ z: 700, opacity: -2, scrollTrigger, rotationX: 180 }}
          duration={1}
        >
          {qStruct}
        </Tween>
        <Tween
          to={{ z: 600, opacity: 0, scrollTrigger, rotationY: -180 }}
          duration={1}
        >
          {qStruct}
        </Tween>
        <Tween
          to={{ z: 100, opacity: -1, scrollTrigger, rotationY: 90 }}
          duration={1}
        >
          {qStruct}
        </Tween>
        <Tween
          to={{ z: -800, opacity: 0, scrollTrigger, rotationX: 90 }}
          duration={1}
        >
          {qStruct}
        </Tween>
        <Tween
          to={{ z: 200, opacity: 0, scrollTrigger, rotationX: -270 }}
          duration={1}
        >
          {qStruct}
        </Tween>
        <Tween
          to={{ z: 200, opacity: 0, scrollTrigger, rotationY: 270 }}
          duration={1}
        >
          {qStruct}
        </Tween>
      </div>
    </div>
  );
}
