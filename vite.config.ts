import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Servidores-Web/', // ¡Asegúrate de poner los slashes / /!
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
