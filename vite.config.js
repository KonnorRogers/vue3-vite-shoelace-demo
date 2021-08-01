import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Uncomment this if you want to use rollup-plugin-copy for icons instead of the package.json script
// import * as path from "path"
// import copy from "rollup-plugin-copy"

// https://vitejs.dev/config/
export default defineConfig({
  // If you would prefer not to use the script provided in package.json, uncomment below
  // build: {
  //   rollupOptions: {
  //     plugins: [
  //       copy({
  //         targets: [
  //           {
  //             src: path.resolve(__dirname, 'node_modules/@shoelace-style/shoelace/dist/assets/icons'),
  //             dest: path.resolve(__dirname, 'dist/assets')
  //           }
  //         ],
  //         // https://github.com/vitejs/vite/issues/1231
  //         hook: 'buildWrite',
  //       })
  //     ]
  //   }
  // },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('sl-')
        }
      }
    })
  ]
})
