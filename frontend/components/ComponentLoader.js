import React from "react";
//importHere
import Timeline from './block/Timeline/Timeline';
import MediaGallery from './block/MediaGallery/MediaGallery';
import ErrorBoundary from "./util/ErrorBoundry/ErrorBoundry";
import Example from './block/Example/Example';
import Accordion from "./block/Accordion/Accordion";
import BasicHero from "./block/BasicHero/BasicHero";
import Portfolios from "./block/Portfolios/Portfolios";
import RecentProjects from "./block/RecentProjects/RecentProjects";
import RichText from "./block/RichText/RichText";
import YourProject from "./block/YourProject/YourProject";


const componentMap = {
	'Example': Example,
  'page-components.basic-hero': BasicHero,
  'page-components.accordion': Accordion,
  'page-components.portfolio': Portfolios,
  'page-components.recent-project': RecentProjects,
  'reusable-components.rich-text': RichText,
  'page-components.your-project': YourProject,
  'page-components.media-gallery': MediaGallery

};

export default function ComponentLoader({ components }) {
  return (
    <>
      {components.map((c, index) => {
        const Component = componentMap[c.__component];
        return <div key={index} className={`component ${c.__component.split('.')[1]}`}><Component content={c} /></div>;
      })}
    </>
  );
}
