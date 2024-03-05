import { config } from 'dotenv';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { join } from 'path';

try {
  config({ path: join(__dirname, '.env.local') });
} catch (error) {
  console.error('Error loading environment variables:', error);
}

const jsonServerPort = process.env.JSON_SERVER_PORT || 9001;


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.js',
    watch: false
  },
  server: {
        port: 5173,
    proxy: {      
      '/api': {
        target: `http://localhost:${jsonServerPort}`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
