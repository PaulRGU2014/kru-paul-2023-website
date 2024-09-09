"use client"

import React, { useRef, useEffect, useState } from 'react';
import styles from './ScrollSync.module.scss';

interface ScrollSyncProps {
  children: React.ReactNode[];
}

const ScrollSync: React.FC<ScrollSyncProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [opacities, setOpacities] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, clientHeight } = containerRef.current;
        const newIndex = Math.floor(scrollTop / clientHeight);
        setActiveIndex(newIndex);

        const newOpacities = children.map((_, index) => {
          const distance = Math.abs(scrollTop - index * clientHeight);
          return Math.max(1 - distance / clientHeight, 0);
        });
        setOpacities(newOpacities);

        // Debugging logs
        console.log('ScrollTop:', scrollTop);
        console.log('ClientHeight:', clientHeight);
        console.log('New Opacities:', newOpacities);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [children.length]);

  useEffect(() => {
    // Initialize opacities on mount
    if (containerRef.current) {
      const { scrollTop, clientHeight } = containerRef.current;
      const newOpacities = children.map((_, index) => {
        const distance = Math.abs(scrollTop - index * clientHeight);
        return Math.max(1 - distance / clientHeight, 0);
      });
      setOpacities(newOpacities);
    }
  }, [children.length]);

  return (
    <div 
      className={styles.scrollContainer} 
      ref={containerRef}
      style={{
        height: `calc(100vh * ${children.length})`,
        overflowY: 'scroll' // Ensure the container is scrollable
      }}
    >
      {children.map((child, index) => (
        <div
          key={index}
          className={`${styles.child} ${index === activeIndex ? styles.active : ''}`}
          style={{ 
            zIndex: children.length - index,
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