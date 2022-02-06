import { useTheme } from '@emotion/react';
import facepaint from 'facepaint';

const useCustomTheme = () => {
  const theme = useTheme();
  const mq = facepaint(
    Object.values(theme.breakpoints)
      .sort()
      .map((bp) => `@media (min-width: ${bp})`)
  );

  return {
    theme,
    mq,
  };
};

export default useCustomTheme;
