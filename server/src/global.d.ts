import type { context } from './graphql/context';


declare module 'mercurius' {
  type PromiseType<T> = T extends PromiseLike<infer U> ? U : T;

  interface MercuriusContext extends PromiseType<ReturnType<typeof context>> {}
}
