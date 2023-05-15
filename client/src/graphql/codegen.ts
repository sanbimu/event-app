import { CodegenConfig } from '@graphql-codegen/cli';

export default {
  schema: {
    'http://localhost:7700/graphql': {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm92aWRlcklkIjoiMTExNDM4MDI2MzAyMTkxMjQwMTQ2IiwicHJvdmlkZXIiOiJnb29nbGUiLCJpYXQiOjE2ODM3OTUxNjksImV4cCI6MTY4NDM5OTk2OX0.9zxBKNfPJF-0x27RdEnVqqWp1inov0GSshsuMotIlow',
      },
    },
  },
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
} satisfies CodegenConfig;
