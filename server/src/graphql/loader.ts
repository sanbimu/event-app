import type { FastifyInstance } from 'fastify';
import codegenMercurius, { loadSchemaFiles } from 'mercurius-codegen';
import { buildSchema } from 'graphql';
import { resolvers } from './resolvers';

export const schemaLoader = (app: FastifyInstance) => {
  return loadSchemaFiles('src/graphql/schema.gql', {
    silent: true,
    watchOptions: {
      enabled: process.env.NODE_ENV === 'development',
      onChange(schema) {
        app.graphql.replaceSchema(buildSchema(schema.join('\n')));
        app.graphql.defineResolvers(resolvers);

        codegenMercurius(app, {
          targetPath: './src/graphql/schema.ts',
          operationsGlob: './src/graphql/schema.gql',
          watchOptions: {
            enabled: process.env.NODE_ENV === 'development',
          },
          silent: true,
        }).catch(console.error);
      },
    },
  }).schema;
};
