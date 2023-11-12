import { Box } from '@mui/material';
import React from 'react';
import StoriesGalleryContainer from '../components/stories/StoriesGalleryContainer';
import StoriesHero from '../components/stories/StoriesHero';

function stories() {
  return (
    <Box>
      <StoriesHero />
      <StoriesGalleryContainer />
    </Box>
  );
}

export default stories;
