import { PropsWithChildren, createContext } from 'react';
import { useLocalStorage } from '../hooks';

export const CookieContext = createContext({
  cookies: { show: true },
  closeCookies: () => {},
});

export function CookieProvider({ children }: PropsWithChildren) {
  const [cookies, setShowCookies] = useLocalStorage('cookies', { show: true });

  const closeCookies = () => {
    setShowCookies({ show: false });
  };

  return (
    <CookieContext.Provider value={{ cookies, closeCookies }}>
      {children}
    </CookieContext.Provider>
  );
}
