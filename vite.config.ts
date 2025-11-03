import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://ven05366.service-now.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api/x_prna_metro_eth_0/ticket'),
        // Inject Authorization header on the dev proxy using server-side env vars
        // This keeps credentials off the client and avoids cross-origin Authorization preflights
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq, _req, _res) => {
            const user = process.env.VITE_API_USER;
            const pass = process.env.VITE_API_PASS;
            if (user && pass) {
              const basic = Buffer.from(`${user}:${pass}`).toString('base64');
              proxyReq.setHeader('Authorization', `Basic ${basic}`);
            }
          });
        },
      },
    },
  },
});
