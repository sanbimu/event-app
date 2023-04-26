import { OAuth2Namespace } from '@fastify/oauth2';
import type { context } from './graphql/context';

declare module 'fastify' {
  interface FastifyInstance {
    google: OAuth2Namespace;
    facebook: OAuth2Namespace;
  }
}

declare module 'mercurius' {
  type PromiseType<T> = T extends PromiseLike<infer U> ? U : T;

  interface MercuriusContext extends PromiseType<ReturnType<typeof context>> {}
}
