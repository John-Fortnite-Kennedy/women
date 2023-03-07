import { createApp } from 'vue'
import { TroisJSVuePlugin } from 'troisjs';
import './style.css'
import App from './App.vue'

const app = createApp(App);
app.use(TroisJSVuePlugin);
app.mount('#app')