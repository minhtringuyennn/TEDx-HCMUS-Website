import * as React from 'react';

/**
 * Custom hook for tracking the window scroll position
 * in browser environments
 *
 * @param initialValue - number
 * @returns number
 */
const useScrollPosition = (initialValue = 0) => {
  const [scrollPosition, setScrollPosition] =
    React.useState<number>(initialValue);

  const handleScroll = React.useCallback(() => {
    const currentPosition = window?.pageYOffset ?? initialValue;
    setScrollPosition(currentPosition);
  }, [initialValue]);

  React.useLayoutEffect(() => {
    if (typeof window !== 'undefined')
      window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (typeof window !== 'undefined')
        window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return scrollPosition;
};

export default useScrollPosition;
