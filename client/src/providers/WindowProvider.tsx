import { createContext, PropsWithChildren, useState } from 'react';

interface WindowContextProps {
  openWindow: ({ content }: { content: React.ReactNode }) => void;
  closeWindow: () => void;
  showWindow: boolean;
  content: React.ReactNode | null;
}

export const WindowContext = createContext<WindowContextProps>({
  openWindow: () => {},
  closeWindow: () => {},
  showWindow: false,
  content: null,
});

export function WindowProvider({ children }: PropsWithChildren) {
  const [showWindow, setShowWindow] = useState(false);
  const [windowContent, setWindowContent] = useState<React.ReactNode>(null);

  const openWindow = ({ content }: { content: React.ReactNode }) => {
    setShowWindow(true);
    setWindowContent(content);
  };

  const closeWindow = () => {
    setShowWindow(false);
  };

  return (
    <WindowContext.Provider
      value={{ content: windowContent, openWindow, closeWindow, showWindow }}
    >
      {children}
    </WindowContext.Provider>
  );
}
