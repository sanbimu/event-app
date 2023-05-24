import type { FastifyServerOptions } from 'fastify';
import fastify from 'fastify';
import formbody from '@fastify/formbody';
import mercurius from 'mercurius';
import jwt from '@fastify/jwt';
import cors from '@fastify/cors';
import { stripe } from '~/plugins/stripe.plugin';
import { context } from '~/graphql/context';
import { resolvers } from '~/graphql/resolvers';
import { schemaLoader } from '~/graphql/loader';
import { createDatabaseConnection } from '~/database';
import { oauth2Router, stripeRouter } from '~/routes';

const initServer = async (opts?: FastifyServerOptions) => {
  const app = fastify(opts);

  app.register(formbody);

  app.register(cors, {
    origin: '*',
  });

  app.register(jwt, {
    secret: import.meta.env.VITE_JWT_SECRET,
  });

  app.register(stripe, {
    secret: import.meta.env.VITE_STRIPE_SECRET_KEY,
  });

  app.register(mercurius, {
    schema: schemaLoader(app),
    context: context,
    resolvers: resolvers,
    graphiql: true,
    path: '/graphql',
  });

  app.register(stripeRouter);
  app.register(oauth2Router);

  await createDatabaseConnection();

  if (import.meta.env.PROD) {
    try {
      const PORT = 7700;
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
