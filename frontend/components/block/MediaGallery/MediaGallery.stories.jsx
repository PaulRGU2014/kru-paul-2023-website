import React from 'react';
import MediaGallery from './MediaGallery.jsx';

export default {
  title: 'Block/MediaGallery',
  component: MediaGallery,
};

export const Primary = (args, { loaded: { storyContent } }) => {
  return <MediaGallery content={"dummy data here"} />
};
