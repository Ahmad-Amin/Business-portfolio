import * as React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  Container,
} from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import createEmotionCache from '../utility/createEmotionCache';
import lightThemeOptions from '../styles/theme/lightThemeOptions';
import '../styles/globals.css';
import Navigation from '../components/shared/Navigation';
import Footer from '../components/shared/Footer';
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Navigation />
        <div
          style={{
            background:
              'linear-gradient(#FFFFFF, #FFFFFF, #FFC593, #BC7198, #5A77FF, #000000, #000000, #000000)',
          }}
        >
          <Container disableGutters>
            <Component {...pageProps} />
          </Container>
          <Footer />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
