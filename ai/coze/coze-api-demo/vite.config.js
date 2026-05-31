import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  // Load environment variables from .env file
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    root: '.',
    build: {
      outDir: 'dist',
      assetsDir: '',
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html')
        }
      }
    },
    server: {
      port: 3000,
      open: true
    },
    // Ensure environment variables are exposed to the client
    define: {
      'process.env': env
    }
  }
})