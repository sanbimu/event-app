import { PropsWithChildren } from 'react';
import { createClient, Provider } from 'urql';

const client = createClient({
  url: `${import.meta.env.VITE_SERVER_HOST}/graphql`,
  fetchOptions: () => {
    const token = localStorage.getItem('token')?.replace('"', '');
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  },
});

export function GraphQLProvider({ children }: PropsWithChildren) {
  return <Provider value={client}>{children}</Provider>;
}
