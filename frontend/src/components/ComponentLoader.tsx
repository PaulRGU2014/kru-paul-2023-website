"use client"

import React, { useEffect, useState } from 'react';
import sanityClient from '../../client';
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";
import Resume from "./Resume/Resume";

const componentMap: { [key: string]: React.ComponentType<any> } = {
  hero: Hero,
  footer: Footer,
  resume: Resume,
};

export default function ComponentLoader({ components }: { components: any }) {
  
  return (
    <>
      {components.map((component: any, index: number) => {
        const Component = componentMap[component._type];
        if (!Component) {
          return <div key={index}>Component not found</div>;
        }
        const componentContent = components.find(d => d._type === component._type); // Match data with component by type

        return <Component key={index} {...component} content={componentContent} />;
      })}
    </>
  );
}