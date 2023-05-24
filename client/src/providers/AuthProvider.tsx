import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { Query, useQuery } from '../graphql';

const defaultUser = { _id: '', avatar: '', firstName: '', lastName: '' };

export const AuthContext = createContext({
  isAuthorized: false,
  user: defaultUser,
  signIn: (token: string) => {},
  signOut: () => {},
});

export function AuthProvider({ children }: PropsWithChildren) {
  const [token, setToken] = useLocalStorage('token', '');
  const [user, setUser] = useState(defaultUser);

  const [data, execute] = useQuery({
    query: Query.Me,
    requestPolicy: 'network-only',
    pause: true,
  });

  const signIn = (token: string) => {
    setToken(token);
  };

  const signOut = () => {
    setToken('');
    setUser(defaultUser);
  };

  useEffect(() => {
    if (data?.data?.me) {
      setUser({
        _id: data.data.me._id.toString(),
        avatar: data.data.me.avatar,
        firstName: data.data.me.info.contact.firstName!,
        lastName: data.data.me.info.contact.lastName!,
      });
    } else if (data?.error && data.error.message === 'UNAUTHORIZED') {
      signOut();
    }
  }, [data]);

  useEffect(() => {
    if (token) {
      execute({
        fetchOptions: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      });
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ isAuthorized: !!user._id || !!token, user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
