import type { IResolvers } from 'mercurius';
import { ObjectIDScalar } from './scalars';

export const resolvers: IResolvers = {
  ObjectID: ObjectIDScalar,
  Query: {
    hello: (_, { name }) => {
      return `Hello ${name}`;
    },
  },
};
