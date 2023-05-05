import React from 'react';
import Example from './Example.jsx';

export default {
  title: 'Block/Example',
  component: Example,
};

export const Primary = (args, { loaded: { storyContent } }) => {
  return <Example content={"dummy data here"} />
};
