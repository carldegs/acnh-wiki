import { Theme } from '@emotion/react';

// Some theme defaults are loosely based on Chakra UI's defaault theme https://chakra-ui.com/docs/theming/theme
const colors = {
  bg: '#f7f4e5',
  primary: '#756c5b',
  purple: '#c090f4',
  blue: '#889cf3',
  yellow: '#ffc766',
  orange: '#e19564',
  brown: '#957c5d',
  pink: '#fca6b3',
  teal: '#7fd8bc',
  green: '#d0dc4a',
};
const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
  '7xl': '4.5rem',
  '8xl': '6rem',
  '9xl': '8rem',
};

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};

const theme: Theme = {
  colors,
  fontSizes,
  fontWeights,
  breakpoints,
  global: {
    html: {
      background: colors.bg,
      fontFamily: 'Varela Round, sans-serif',
      color: colors.primary,
    },
  },
};

export default theme;
