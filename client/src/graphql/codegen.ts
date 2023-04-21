export default {
  schema: 'http://localhost:7700/graphql',
  generates: {
    './src/graphql/schema.ts': {
      config: {
        skipTypename: true,
        useTypeImports: true,
      },
      plugins: [
        'typescript',
        {
          add: {
            content: 'import { ObjectId } from "mongodb";',
          },
        },
      ],
    },
  },
  config: {
    scalars: {
      ObjectID: 'ObjectId',
    },
  },
};
