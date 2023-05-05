import React from 'react';
import BasicHero from './BasicHero.jsx';
import Accordion from '../Accordion/Accordion.jsx';
import Footer from '../Footer/Footer.jsx';


export default {
  title: 'Block/BasicHero',
  component: BasicHero,
};

export const Primary = (args, { loaded: { storyContent } }) => {
  return <>
    <BasicHero content={{
      title:"Approach",
      desc:"<p>After 20+ years in the business, we’ve seen a thing or two—and these have shaped the way we view our work and how we advise our clients.</p>"
    }} />
    <Accordion content={{
      title:"Technology is constantly evolving and progressing, which is why we believe:",
      lists: [
        {
          id: 0,
          title: "It’s impossible to stay informed and make the best choices unless technology is your full-time job",
          desc: "<p>The shelf life of a bad choice may just be a few years, but can permanently impact an organization’s growth and progress. Successful interactive technology is not a collection of widgets, it is a carefully crafted engine comprised of disparate parts.</p>"
        },
        {
          id: 1,
          title: "It’s important to engage experts early to achieve the best results",
          desc: "<p>It can be tempting to architect your solution and seek a facilitator. However, the best results are achieved by successfully communicating goals and constraints to subject matter experts and letting them offer roadmaps to your journey.</p>"
        },
        {
          id: 2,
          title: "There is no one-size-fits all solution",
          desc: "<p>We never recommend technology simply because we understand it and do not understand its rivals. We strive to be transparent and guide our clients to the best solution, even if that means choosing a different vendor.</p>"
        },
        {
          id: 3,
          title: "The devil is in the exceptions",
          desc: "<p>Identifying them and trapping them requires an investment of time and a careful practice of knowledge building. We pride ourselves on immersing ourselves in our clients’ business to gain true insight, and identify the pitfalls before they become roadblocks…or grenades.</p>"
        },
        {
          id: 4,
          title: "It’s important to create deep and meaningful connections with our clients",
          desc: "<p>We don't subscribe to the notion that the best work is produced by a team of rivals. We are confident in our expertise, and we are not afraid to speak our mind. We are deferential to and respectful of our client's knowledge of their business and organizational needs. The result of this approach has been successful long-term engagements, often spanning more than a decade, and sometimes multiple companies.</p>"
        },
      ]
    }} />
    <Footer content={{
      links:[
        {name:"services", url:"#"},
        {name:"work", url:"#"},
        {name:"value", url:"#"},
        {name:"contact", url:"#"}
      ]
    }} />
  </>
  
};

export const Secondary = (args, { loaded: { storyContent } }) => {
  return <BasicHero content={{
    title:"Services",
    desc:"<p>Our technology expertise, superior design, focus on user-experience and effective methodologies translate into successful digital solutions for our clients.</p>"
  }} />
};