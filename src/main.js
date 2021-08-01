import "@shoelace-style/shoelace/dist/themes/base.css"
import "@shoelace-style/shoelace/dist/components/icon/icon"
import "@shoelace-style/shoelace/dist/components/icon-button/icon-button"

// import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
// import path from "path"
// setBasePath('../../node_modules/@shoelace-style/shoelace/dist/assets/icons/');

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
