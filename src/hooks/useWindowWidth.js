import { useEffect, useState } from 'react';

const useWindowWidth = () => {
  const isClient = typeof window === 'object';

  const getWidth = () => {
    return {
      width: isClient ? window.innerWidth : undefined,
    };
  };

  const [windowSize, setWindowSize] = useState(getWidth);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    const handleResize = () => {
      setWindowSize(() => getWidth());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return windowSize;
};

export default useWindowWidth;
