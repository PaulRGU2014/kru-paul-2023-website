"use client"

import React, { useRef, useEffect, useState } from 'react';
import styles from './ScrollSync.module.scss';

interface ScrollSyncProps {
  children: React.ReactNode[];
}

const ScrollSync: React.FC<ScrollSyncProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [opacities, setOpacities] = useState<number[]>([]);



  return (
    <div 
      className={styles.scrollContainer} 
      ref={containerRef}
      // style={{height: children.length * 100 + 'vh'}}
    >
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className={styles.child}
          style={{ 
            zIndex: index,
            opacity: opacities[index] || 0
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default ScrollSync;