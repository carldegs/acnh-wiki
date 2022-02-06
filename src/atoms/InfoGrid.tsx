import React from 'react';

import useCustomTheme from '../hooks/useCustomTheme';

const InfoGrid: React.FC = ({ children }) => {
  const { mq } = useCustomTheme();
  return (
    <div
      css={mq({
        display: 'grid',
        gap: '12px',
        gridTemplateColumns: [1, 2, 3, 4].map((n) => `repeat(${n}, 1fr)`),
      })}
    >
      {children}
    </div>
  );
};

export default InfoGrid;
