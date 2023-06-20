import * as React from 'react';

/**
 * Custom hook for detecting and handling various document events outside
 * of a specific browser element
 *
 * @param handler - VoidFunction
 * @param event - DocumentEventMap
 * @returns [React.RefObject<T>]
 */
const useOnClickOutside = <T extends HTMLElement>(
  handler: () => void,
  event: keyof DocumentEventMap = 'mousedown',
) => {
  const ref = React.useRef<T>(null);

  React.useEffect(() => {
    const listener: EventListener = (ev) => {
      if (ref.current?.contains(ev.target as Node)) return;
      handler();
    };
    if (typeof document !== 'undefined')
      document.addEventListener(event, listener);
    return () => {
      if (typeof document !== 'undefined')
        document.removeEventListener(event, listener);
    };
  }, [ref, handler, event]);

  return [ref];
};

export default useOnClickOutside;
