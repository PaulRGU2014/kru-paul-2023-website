import React from 'react';
import Footer from './Footer.jsx';

export default {
  title: 'Block/Footer',
  component: Footer,
};

export const Primary = (args, { loaded: { storyContent } }) => {
  return <Footer content={{
    links:[
      {name:"services", url:"#"},
      {name:"work", url:"#"},
      {name:"value", url:"#"},
      {name:"contact", url:"#"}
    ]
  }} />
};




