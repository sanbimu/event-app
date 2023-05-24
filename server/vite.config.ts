import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    port: 7700,
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'fastify',
      appPath: './src/server.ts',
      tsCompiler: 'esbuild',
    }),
    tsconfigPaths(),
  ],
});
