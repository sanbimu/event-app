import type { FastifyRequest } from 'fastify';

export const context = async (req: FastifyRequest) => {
  return {};
};

declare module 'mercurius' {
  type PromiseType<T> = T extends PromiseLike<infer U> ? U : T;

  interface MercuriusContext extends PromiseType<ReturnType<typeof context>> {}
}
