import { useEffect } from 'react';

export function useClickOutside(ref: any, handler: any) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchend', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchend', listener);
    };
  }, [ref, handler]);
}
