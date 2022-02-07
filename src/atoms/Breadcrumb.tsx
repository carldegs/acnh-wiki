import { CaretRight } from 'phosphor-react';
import React from 'react';

import { EmotionComponentProps } from '../types/EmotionComponentProps';

const Breadcrumb: React.FC<EmotionComponentProps> = ({
  className,
  children,
}) => {
  const items = React.Children.toArray(children)
    .map((child, i) => ({ child, i }))
    .map(({ child, i }, _, arr) => (
      <React.Fragment key={i}>
        {child}
        {i < arr.length - 1 && (
          <CaretRight
            css={{ opacity: 0.5, marginRight: '5px' }}
            weight="bold"
            size="12px"
          />
        )}
      </React.Fragment>
    ));

  return (
    <div css={{ display: 'flex', alignItems: 'center' }} className={className}>
      {items}
    </div>
  );
};

export default Breadcrumb;
