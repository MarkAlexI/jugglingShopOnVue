import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import './assets/styles/styles.css';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Catalog from './components/Catalog.vue';
import Cart from './components/Cart.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      props: true
    }
  ]
});

const pinia = createPinia();
createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app');
