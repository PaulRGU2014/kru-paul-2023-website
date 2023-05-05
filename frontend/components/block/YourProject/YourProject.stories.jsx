import React from 'react';
import YourProject from './YourProject.jsx';

export default {
  title: 'Block/YourProject',
  component: YourProject,
};

export const Primary = (args, { loaded: { storyContent } }) => {
  return <YourProject content={{
    title:"Tell us about your project",
    desc:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
    link: {name:"Talk To Us", url:"#"}
  }} />
};
