import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { copyFileSync } from 'fs';
import { resolve } from 'path';

// https://vitejs.dev/config/

const copyRedirects = () => {
  return {
    name: 'copy-redirects',
    closeBundle: () => {
      copyFileSync(resolve(__dirname, '_redirects'), resolve(__dirname, 'dist', '_redirects'));
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    copyRedirects()
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: `js/[name]-[hash].js`,
        chunkFileNames: `js/[name]-[hash].js`,
        assetFileNames: `assets/[name][extname]`
      },
    },
  },
  assetsInclude: ['**/*.gltf'],
})
