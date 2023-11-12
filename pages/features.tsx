import { Box } from '@mui/material';
import React, { useState } from 'react';
import BetaAnnouncement from '../components/shared/BetaAnnouncement';
import FeaturesContainer from '../components/shared/FeaturesContainer';
import TextAndImageContainer from '../components/shared/TextAndImageContainer';

function features() {
  const data = {
    src: '/assets/images/features/hero.jpg',
    heading: 'FEATURES',
    description:
      'We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.',
    cta: '',
  };

  return (
    <Box>
      <TextAndImageContainer data={data} />
      <FeaturesContainer />
      <BetaAnnouncement />
    </Box>
  );
}

export default features;
