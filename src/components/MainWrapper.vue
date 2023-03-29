<template>
  <div class="main-wrapper">
    <Catalog />
    <Cart
      v-if="cart.length"
      :cart_data="cart"
    />
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import Catalog from './Catalog.vue';
  import Cart from './Cart.vue';
  import { useShopStore } from '../stores/store.js';

  const store = useShopStore();
  const cart = computed(() => store.cart);
</script>

<style>
  .main-wrapper {
    max-width: 900px;
    margin: 0 auto;
  }
</style>