import { keyframes } from '@emotion/react';
import { Spiral } from 'phosphor-react';
import React from 'react';

const rotate = keyframes`
  100% {
    transform: rotate(360deg)
  }
`;

const Spinner: React.FC = () => (
  <div
    css={{
      width: 'full',
      height: '95vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Spiral
        weight="bold"
        size={80}
        css={{ animation: `${rotate} 1s ease infinite` }}
      />
      <p>Loading...</p>
    </div>
  </div>
);

export default Spinner;
