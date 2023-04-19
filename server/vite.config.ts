import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';
import tsconfigPaths from 'vite-tsconfig-paths';
import plainText from 'vite-plugin-plain-text';

export default defineConfig({
  server: {
    port: 6543,
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'fastify',
      appPath: './src/server.ts',
      tsCompiler: 'esbuild',
    }),
    tsconfigPaths(),
    plainText('**/*.gql', { namedExport: false }),
  ],
});
