import { PropsWithChildren, useState, createContext } from 'react';

export const NavContext = createContext({
  showNav: false,
  setShowNav: (search: boolean) => {},
});

export function NavProvider({ children }: PropsWithChildren) {
  const [showNav, setShowNav] = useState(false);

  return (
    <NavContext.Provider value={{ showNav, setShowNav }}>{children}</NavContext.Provider>
  );
}
