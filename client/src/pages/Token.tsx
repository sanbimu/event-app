import { useSearchParams } from 'react-router-dom';
import { useAuthContext } from '../hooks/useContexts';
import { useEffect } from 'react';

export function Token() {
  const { signIn } = useAuthContext();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    if (token) {
      signIn(token);
      window.close();
    }
  }, [token]);

  return null;
}
