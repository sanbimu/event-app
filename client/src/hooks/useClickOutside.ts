import { LegacyRef, useEffect, useRef } from 'react';

type Handler = (event: MouseEvent | TouchEvent) => void;

export function useClickOutside<T extends HTMLDivElement>(
  handler: Handler,
): LegacyRef<T> {
  const ref = useRef<T>(null);

  const listener = (event: MouseEvent | TouchEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      handler(event);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchend', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchend', listener);
    };
  }, [ref, handler]);

  return ref;
}
