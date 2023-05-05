import React from 'react';
import Header from './Header.jsx';

export default {
  title: 'Block/Header',
  component: Header,
};

export const Primary = (args, { loaded: { storyContent } }) => {
  return <Header content={"dummy data here"} />
};
