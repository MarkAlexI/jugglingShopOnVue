import { createRouter, createWebHistory } from 'vue-router';
import Catalog from '../components/Catalog.vue';
import Cart from '../components/Cart.vue';

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
      component: Cart
    }
  ]
});

export default router;