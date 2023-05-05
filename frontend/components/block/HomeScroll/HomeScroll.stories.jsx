import React from 'react';
import HomeScroll from './HomeScroll.jsx';

export default {
  title: 'Block/HomeScroll',
  component: HomeScroll,
};

export const Primary = (args, { loaded: { storyContent } }) => {
  return <HomeScroll content={"dummy data here"} />
};
