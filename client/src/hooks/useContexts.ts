import { useContext } from 'react';
import { AuthContext } from '../providers';
import { WindowContext } from '../providers';

export function useAuthContext() {
  return useContext(AuthContext);
}

export function useWindowContext() {
  return useContext(WindowContext);
}
