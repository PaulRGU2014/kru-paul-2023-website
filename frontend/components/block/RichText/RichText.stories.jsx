import React from 'react';
import RichText from './RichText.jsx';

export default {
  title: 'Block/RichText',
  component: RichText,
};

export const Primary = (args, { loaded: { storyContent } }) => {
  return <RichText content={{
    text: "<h4>STRATEGY</h4><p>We collaborate with you to identify specific challenges and opportunities your organization faces, and establish a clear vision for how your project will successfully address them.</p>"
  }} />
};
