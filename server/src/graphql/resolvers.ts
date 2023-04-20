import type { IResolvers } from 'mercurius';

export const resolvers: IResolvers = {
  Query: {
    hello: (_, { name }) => {
      return `Hello ${name}`;
    },
  },
};
