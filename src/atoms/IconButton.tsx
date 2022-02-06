import Link from 'next/link';
import { ReactElement } from 'react';

import { EmotionComponentProps } from '../types/EmotionComponentProps';

interface IconButtonProps extends EmotionComponentProps {
  onClick?: () => void;
  icon: ReactElement;
  href?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  href,
  onClick,
  className,
}) => {
  const Button = (
    <button
      css={(theme) => ({
        background: theme.colors.primary,
        border: 'none',
        borderRadius: '25% / 30%;',
        width: '100%',
        aspectRatio: '1',
        cursor: 'pointer',
      })}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      className={className}
    >
      {icon}
    </button>
  );

  return href ? <Link href={href}>{Button}</Link> : Button;
};

export default IconButton;
