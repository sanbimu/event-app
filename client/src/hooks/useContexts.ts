import { useContext } from 'react';
import { AuthContext, NavContext } from '../providers';
import { WindowContext } from '../providers';

export function useAuthContext() {
  return useContext(AuthContext);
}

export function useWindowContext() {
  return useContext(WindowContext);
}

export function useNavContext() {
  return useContext(NavContext);
}
