import React from 'react';

import { EmotionComponentProps } from '../types/EmotionComponentProps';

interface BreadcrumbItemProps extends EmotionComponentProps {
  onClick: () => void;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  children,
  ...props
}) => (
  <button
    css={(theme) => ({
      color: theme.colors.primary,
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      fontSize: theme.fontSizes.lg,
    })}
    {...props}
  >
    {children}
  </button>
);

export default BreadcrumbItem;
