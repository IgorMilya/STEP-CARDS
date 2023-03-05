import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    minify: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',

        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'images/[name]-[hash][extname]'
          }

          if (/\.css$/.test(name ?? '')) {
            return 'css/[name]-[hash][extname]'
          }

          return 'js/[name]-[hash][extname]'
        },
      },
    },
  },
})
