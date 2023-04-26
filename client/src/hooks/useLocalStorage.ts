import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [state, setStoreState] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);

      if (item) {
        return parse(initialValue, item);
      }
    } catch (e) {
      console.error(e);
    }

    return initialValue;
  });

  const setState = (value: T) => {
    try {
      setStoreState(value);
      localStorage.setItem(key, stringify(value));
    } catch (e) {
      console.error(e);
    }

    if (value === initialValue) {
      localStorage.removeItem(key);
    }
  };

  window.addEventListener('storage', (event) => {
    if (event.key === key && event.newValue) {
      setStoreState(parse(initialValue, event.newValue));
    }
  });

  return [state, setState] as const;
}

function parse<T>(initialValue: T, value: string) {
  if (typeof initialValue === 'number') {
    return Number(value);
  } else if (typeof initialValue === 'object') {
    return JSON.parse(value);
  }
  return value;
}

function stringify<T>(value: T): string {
  if (typeof value === 'number' || typeof value === 'boolean') {
    return value.toString();
  } else if (typeof value === 'object') {
    return JSON.stringify(value);
  }
  return String(value);
}
