import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    // השורה הקריטית שמחזירה את הנתיב הנכון לגיטהאב!
    base: '/nuli/', 
    
    plugins: [react(), tailwindcss()],
    define: {
      // מומלץ להשתמש ב-import.meta.env של Vite ולא לחשוף ישירות בצורה כזו ב-Client
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
