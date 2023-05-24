import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { svgPlugin } from 'vite-plugin-fast-react-svg';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 6765,
  },
  plugins: [react(), svgPlugin()],
});
