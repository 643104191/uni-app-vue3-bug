import { defineConfig } from 'vite'
import { resolve } from 'path'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
      {
        find: '@utils',
        replacement: resolve(__dirname, './src/assets/utils'),
      },
      {
        find: '@api',
        replacement: resolve(__dirname, './src/api'),
      },
      {
        find: '@const',
        replacement: resolve(__dirname, './src/assets/const'),
      },
    ],
  },
  plugins: [uni()],
})
