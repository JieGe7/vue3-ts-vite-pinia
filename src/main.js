import { createApp } from 'vue';
import APP from './App.vue';
import router from './router/router';
const app = createApp(APP);
app.use(router)
app.mount('#app')
