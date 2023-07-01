import * as React from 'react';

/**
 * Custom hook that accepts any value and return it after
 * the specified delay (defaults to 300ms)
 * @param value - T
 * @param delay - number
 * @returns T
 */
const useDebounce = <T>(value: T, delay: number = 300): T => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  return React.useMemo(() => debouncedValue, [debouncedValue]);
};

export default useDebounce;
