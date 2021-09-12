import { useState, useEffect } from 'react';

const useDisplay = () => {
  const [windowsWidth, setWindowsWidth] = useState();

  useEffect(() => {
    function handleResize() {
      setWindowsWidth(window.innerWidth);
    }
    // Add event listener
    window.addEventListener('resize', handleResize);

    handleResize();

    // Remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
      setWindowsWidth(undefined);
    };
  }, []);
  if (windowsWidth < 481) return 's';
  if (windowsWidth >= 481 && windowsWidth < 769) return 'm';
  return 'l';
};

export default useDisplay;
