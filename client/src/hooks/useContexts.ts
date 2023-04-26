import { useContext } from 'react';
import { AuthContext } from '../providers';

export function useAuthContext() {
  return useContext(AuthContext);
}
