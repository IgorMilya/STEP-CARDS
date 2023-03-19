import { defineConfig } from 'vite'

export default defineConfig({
  base: '/step-cards/',
  build: {
    minify: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: '[name]-[hash].js',

        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'images/[name]-[hash][extname]'
          }

          if (/\.css$/.test(name ?? '')) {
            return '[name]-[hash][extname]'
          }

          return '[name]-[hash][extname]'
        },
      },
    },
  },
})
