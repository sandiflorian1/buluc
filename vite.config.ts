import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { copyFileSync, readFileSync, writeFileSync } from 'fs';
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

const injectCSSIntoHTML = () => {
  return {
    name: 'inject-css',
    writeBundle: () => {
      const indexPath = resolve(__dirname, 'dist', 'index.html');
      let htmlContent = readFileSync(indexPath, 'utf-8');
      
      // Caută fișierele CSS generate
      const cssDir = resolve(__dirname, 'dist', 'assets');
      const cssFiles = require('fs').readdirSync(cssDir).filter(file => file.endsWith('.css'));
      
      cssFiles.forEach(cssFile => {
        const cssPath = resolve(cssDir, cssFile);
        const cssContent = readFileSync(cssPath, 'utf-8');
        
        // Înlocuiește link-ul CSS cu style tag
        const cssLinkRegex = new RegExp(`<link[^>]*${cssFile}[^>]*>`, 'g');
        htmlContent = htmlContent.replace(cssLinkRegex, `<style>${cssContent}</style>`);
        
        // Șterge fișierul CSS
        require('fs').unlinkSync(cssPath);
      });
      
      writeFileSync(indexPath, htmlContent);
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    copyRedirects(),
    injectCSSIntoHTML()
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: `js/[name]-[hash].js`,
        chunkFileNames: `js/[name]-[hash].js`,
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name?.split('.').pop();
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name || '')) {
            return `media/[name]-[hash][extname]`;
          }
          if (/\.(png|jpe?g|gif|svg|webp|avif)(\?.*)?$/i.test(assetInfo.name || '')) {
            return `images/[name][extname]`;
          }
          if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name || '')) {
            return `fonts/[name][extname]`;
          }
          // CSS și alte assets primesc hash
          return `assets/[name]-[hash][extname]`;
        }
      },
    },
  },
  assetsInclude: ['**/*.gltf'],
})
