import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Index } from './pages/Index';
import { Token } from './pages/Token';
import { Settings } from './pages/Settings';
import { Search } from './pages/Search';
import { MyEvents } from './pages/MyEvents';
import { Cart } from './pages/Cart';
import Header from './layout/Header';
import Window from './layout/Window';
import NavMobile from './layout/NavMobile';
import {
  useNavContext,
  useWindowContext,
  useCookieContext,
  useAuthContext,
} from './hooks';
import CookieModal from './components/windows/Cookies';
import ConfirmDelete from './components/windows/ConfirmDelete';

export function Router() {
  const { showWindow } = useWindowContext();
  const { showNav } = useNavContext();
  const { cookies } = useCookieContext();

  return (
    <BrowserRouter>
      {cookies.show && <CookieModal />}
      {showWindow && <Window />}
      {showNav && <NavMobile />}

      <Routes>
        <Route element={<WithHeader />}>
          <Route path="/" index element={<Index />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route element={<Protected />}>
            <Route path="/my-events" element={<MyEvents />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>
        <Route path="/token" element={<Token />} />
      </Routes>
    </BrowserRouter>
  );
}

function Protected() {
  const { isAuthorized } = useAuthContext();

  if (!isAuthorized) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

function WithHeader() {
  return (
    <div className="flex h-screen flex-col lg:flex-row">
      <Header />
      <div
        id="scrollable"
        className="w-full flex-col overflow-x-hidden lg:ml-[240px] lg:flex"
      >
        <Outlet />
      </div>
    </div>
  );
}
