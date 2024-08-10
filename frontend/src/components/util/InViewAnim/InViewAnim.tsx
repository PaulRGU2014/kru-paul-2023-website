import React, { useState, useRef, useEffect } from "react";
import _ from "lodash";

const IN_VIEW_THRESHOLD = 200;

export default function ScrollAnim({ children }) {
  const elementRef = useRef();
  const [isInView, setIsInView] = useState();

  useEffect(() => {
    const scrollCallBack = _.throttle(() => {
      const scrollPos = window.scrollY + window.innerHeight - IN_VIEW_THRESHOLD;
      if (elementRef.current?.offsetTop < scrollPos) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    }, 150);

    window.addEventListener("scroll", scrollCallBack);
    setTimeout(scrollCallBack, 300);
    setTimeout(scrollCallBack, 600);
    return () => window.removeEventListener("scroll", scrollCallBack);
  }, [elementRef.current]);

  const classN = [];
  if (isInView) classN.push("is-in-view");
  return (
    <div
      className={classN.join(" ")}
      ref={elementRef}
      data-in-view={isInView ? "true" : "false"}
    >
      {children}
    </div>
  );
}
