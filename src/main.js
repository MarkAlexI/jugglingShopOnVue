import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import './assets/styles/styles.css';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import HomePage from './views/HomePage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'HomePage', component: HomePage}
    ]
});

const pinia = createPinia();
createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app');
