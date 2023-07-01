import * as React from 'react';

type ReturnType<T> = [T, React.Dispatch<React.SetStateAction<T>>];

/**
 * a Custom hook for managing localStorage value within React state
 * @param key - string
 * @param initialValue - T
 * @returns [T, React.Dispatch<React.SetStateAction<T>>]
 */
const useLocalStorage = <T>(key: string, initialValue: T): ReturnType<T> => {
  const [storedValue, setStoredValue] = React.useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;

    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      return initialValue;
    }
  });

  const setValue: React.Dispatch<React.SetStateAction<T>> = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // no-op
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
