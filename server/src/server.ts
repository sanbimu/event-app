import type { FastifyServerOptions } from 'fastify';
import fastify from 'fastify';
import mercurius from 'mercurius';
import cors from '@fastify/cors';
import schema from './graphql/schema.gql';
import { resolvers } from './graphql/resolvers';

const initServer = async (opts?: FastifyServerOptions) => {
  const app = fastify(opts);

  app.register(cors, {
    origin: '*',
  });

  app.register(mercurius, {
    schema: schema,
    resolvers: resolvers,
    graphiql: true,
    path: '/graphql',
  });

  if (import.meta.env.PROD) {
    try {
      const PORT = 6543;
      app.listen({ port: PORT });
      console.log('Listening on port', PORT);
    } catch (e) {
      console.error(e);
      process.exit(1);
    }
  }

  return app;
};

export const viteNodeApp = initServer();
