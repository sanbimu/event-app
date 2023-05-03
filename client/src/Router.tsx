import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Index } from './pages/Index';
import { Token } from './pages/Token';
import { Settings } from './pages/Settings';
import { Search } from './pages/Search';
import SignInUp from './components/windows/SignInUp';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Index />} />
        <Route path="/token" element={<Token />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}
