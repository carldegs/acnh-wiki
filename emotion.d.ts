import '@emotion/react';

declare module '@emotion/react' {
  export interface Colors {
    bg: string;
    primary: string;
    purple: string;
    blue: string;
    yellow: string;
    orange: string;
    brown: string;
    pink: string;
    teal: string;
    green: string;
  }

  export interface FontSizes {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
    '7xl': string;
    '8xl': string;
    '9xl': string;
  }

  export interface FontWeights {
    hairline: number;
    thin: number;
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
    extrabold: number;
    black: number;
  }

  export interface Breakpoints {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  }

  export interface Theme {
    colors: Colors;
    fontSizes: FontSizes;
    fontWeights: FontWeights;
    breakpoints: Breakpoints;
    global: Record<string, Record<string, number | string>>;
  }
}
