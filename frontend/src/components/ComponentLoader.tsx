"use client"

import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";
import Resume from "./Resume/Resume";
import GalleryCollage from "./GalleryCollage/GalleryCollage";

const componentMap: { [key: string]: React.ComponentType<any> } = {
  hero: Hero,
  footer: Footer,
  resume: Resume,
  galleryCollage: GalleryCollage,
};

export default function ComponentLoader({ components }: { components: any }) {
  
  return (
    <>
      {components.map((component: any, index: number) => {
        const Component = componentMap[component._type];
        if (!Component) {
          return <div key={index}>Component not found</div>;
        }
        const componentContent = components.find((d: any) => d._type === component._type); // Match data with component by type

        return <Component key={index} {...component} content={componentContent} />;
      })}
    </>
  );
}