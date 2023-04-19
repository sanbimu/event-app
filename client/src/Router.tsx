import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Index } from './pages/Index';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}
