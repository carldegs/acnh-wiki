import { ArrowLineUp } from 'phosphor-react';
import { useState, useEffect } from 'react';

import IconButton from './IconButton';

const ScrollToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShowButton(window.pageYOffset > 250);
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    });
  };

  if (!showButton) {
    return <></>;
  }

  return (
    <IconButton
      css={{
        height: '40px',
        width: '40px',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
      }}
      onClick={scrollToTop}
      icon={<ArrowLineUp size={24} color="#ffffff" weight="bold" />}
    />
  );
};

export default ScrollToTopButton;
