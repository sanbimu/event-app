import type { FastifyPluginCallback } from 'fastify';
import Stripe from 'stripe';

declare module 'fastify' {
  interface FastifyInstance {
    stripe: Stripe;
  }
}

interface Options {
  secret: string;
}

export const stripe: FastifyPluginCallback<Options> = (app, opts, next) => {
  const stripe = new Stripe(opts.secret, {
    apiVersion: '2022-11-15',
  });

  app.decorate('stripe', stripe);

  next();
};

stripe[Symbol.for('skip-override')] = true;
