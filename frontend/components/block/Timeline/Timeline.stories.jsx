import React from 'react';
import Timeline from './Timeline.jsx';

export default {
  title: 'Block/Timeline',
  component: Timeline,
};

export const Primary = (args, { loaded: { storyContent } }) => {
  return <Timeline content={"dummy data here"} />
};
