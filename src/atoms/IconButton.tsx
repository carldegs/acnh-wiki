import { CSSPropertiesWithMultiValues } from '@emotion/serialize';
import Link from 'next/link';
import { ReactElement } from 'react';

interface IconButtonProps {
  onClick?: () => void;
  icon: ReactElement;
  href?: string;
  _css?: CSSPropertiesWithMultiValues;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  href,
  _css,
  onClick,
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
        ..._css,
      })}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {icon}
    </button>
  );

  return href ? <Link href={href}>{Button}</Link> : Button;
};

export default IconButton;
