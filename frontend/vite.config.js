import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../public', // This specifies that the build output should go to the 'public' directory at the root level
  },
});
