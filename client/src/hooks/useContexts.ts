import { useContext } from 'react';
import { AuthContext, NavContext, WindowContext, CookieContext } from '../providers';

export function useAuthContext() {
  return useContext(AuthContext);
}

export function useWindowContext() {
  return useContext(WindowContext);
}

export function useNavContext() {
  return useContext(NavContext);
}

export function useCookieContext() {
  return useContext(CookieContext);
}
