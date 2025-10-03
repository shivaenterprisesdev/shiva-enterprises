import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    allowedHosts: [
      "e19ae57ed073.ngrok-free.app"
    ],
    port: 3000,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    // SEO and Performance Optimizations
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          motion: ['framer-motion'],
          helmet: ['react-helmet-async']
        }
      }
    },
    // Generate source maps for better debugging
    sourcemap: true,
    // Optimize CSS
    cssCodeSplit: true,
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'react-helmet-async']
  },
  // Enable gzip compression
  esbuild: {
    drop: ['console', 'debugger']
  }
})
