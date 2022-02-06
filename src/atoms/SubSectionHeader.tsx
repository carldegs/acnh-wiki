import { IconProps } from 'phosphor-react';

import { EmotionComponentProps } from '../types/EmotionComponentProps';

const SubSectionHeader: React.FC<
  EmotionComponentProps & {
    icon: React.ForwardRefExoticComponent<
      IconProps & React.RefAttributes<SVGSVGElement>
    >;
  }
> = ({ children, className, icon }) => {
  const Icon = icon;

  return (
    <div css={{ display: 'flex', alignItems: 'center' }} className={className}>
      <Icon weight="bold" size={32} />
      <h3 css={{ marginLeft: '8px' }}>{children}</h3>
    </div>
  );
};

export default SubSectionHeader;
