import React from 'react';

import HeaderBreadcrumbs from '../molecules/HeaderBreadcrumbs';
import { EmotionComponentProps } from '../types/EmotionComponentProps';

const Header: React.FC<EmotionComponentProps> = ({ children, className }) => (
  <div className={className} css={{ padding: '8px 0 0 4px' }}>
    <HeaderBreadcrumbs className={className} />
    <h1 css={{ marginTop: '4px', marginLeft: '4px' }}>{children}</h1>
  </div>
);

export default Header;
