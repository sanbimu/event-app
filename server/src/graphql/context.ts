import type { FastifyRequest } from 'fastify';
import type { TokenUser } from '~/shared/types';
import { GraphQLError } from 'graphql';
import { User } from '~/database/models';

export const context = async (req: FastifyRequest) => {
  try {
    const token = await req.jwtVerify<TokenUser>();
    const user = await User.findOne(token).lean();

    if (!user) {
      throw new Error();
    }

    return { user };
  } catch (e) {
    throw new GraphQLError('UNAUTHORIZED');
  }
};
