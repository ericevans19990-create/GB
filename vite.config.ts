
import { defineConfig } from 'vite'
// Use the SWC-based React plugin if available for faster builds
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // Simple dev-only API stub for /api/form to capture form submissions locally
  // This runs in Vite dev server and returns JSON responses for testing.
  // NOTE: For production, replace with a real server endpoint.
  plugins: [
    react(),
    {
      name: 'local-api-stub',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.method === 'POST' && req.url && req.url.startsWith('/api/form')) {
            try {
              let body = '';
              for await (const chunk of req) body += chunk;
              const payload = JSON.parse(body || '{}');
              // Log to console for debugging
              // eslint-disable-next-line no-console
              console.log('[local-api] /api/form received:', payload);
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ ok: true, received: payload }));
            } catch (err) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: 'invalid_json' }));
            }
            return;
          }
          next();
        });
      }
    }
  ],
  define: {
    __BASE_PATH__: JSON.stringify(process.env.BASE_PATH || '/'),
  },
  build: {
    // Optimize build performance
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        // Optimize chunk splitting
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          i18n: ['react-i18next', 'i18next']
        },
        // Optimize asset naming
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable source maps for production debugging (optional)
    sourcemap: false
  },
  server: {
    // Development server optimizations
    hmr: {
      overlay: false
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-i18next']
  }
})
