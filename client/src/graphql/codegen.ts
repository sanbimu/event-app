export default {
  schema: 'http://localhost:7700/graphql',
  generates: {
    './src/graphql/schema.ts': {
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
