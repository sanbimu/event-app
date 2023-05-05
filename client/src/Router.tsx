import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Index } from './pages/Index';
import { Token } from './pages/Token';
import { Settings } from './pages/Settings';
import { Search } from './pages/Search';
import { MyEvents } from './pages/MyEvents';
import Window from './layout/Window';
import NavMobile from './layout/NavMobile';
import { useNavContext, useWindowContext } from './hooks';

export function Router() {
  const { showWindow } = useWindowContext();
  const { showNav } = useNavContext();

  return (
    <BrowserRouter>
      {showWindow && <Window />}
      {showNav && <NavMobile />}

      <Routes>
        <Route path="/" index element={<Index />} />
        <Route path="/token" element={<Token />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/search" element={<Search />} />
        <Route path="/myevents" element={<MyEvents />} />
      </Routes>
    </BrowserRouter>
  );
}
