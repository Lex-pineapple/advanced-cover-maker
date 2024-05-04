import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@ts': path.resolve(__dirname, 'src/ts'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@views': path.resolve(__dirname, 'src/views'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
    },
  },
});
