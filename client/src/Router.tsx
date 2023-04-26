import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Index } from './pages/Index';
import { Token } from './pages/Token';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Index />} />
        <Route path="/token" element={<Token />} />
      </Routes>
    </BrowserRouter>
  );
}
