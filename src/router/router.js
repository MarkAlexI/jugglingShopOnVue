import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../components/main-page/MainPage.vue';
import Catalog from '../components/catalog/Catalog.vue';
import ProductPage from '../components/catalog/ProductPage.vue';
import Cart from '../components/cart/Cart.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
    {
      path: '/',
      name: 'mainPage',
      component: MainPage
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/product',
      name: 'product',
      component: ProductPage
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
});

export default router;