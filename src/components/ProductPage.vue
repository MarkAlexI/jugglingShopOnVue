<template>
  <div class="product-page">
    <img
      class="catalog-item__image"
      :src="'../src/assets/images/' + product.image"
      alt="img"
    >
    <p>Product name: {{ product.name }}</p>
    <p>Article: {{ product.article }}</p>
    <p>Price: {{ product.price }}</p>
    <button
      class="catalog-item__add_to_cart_btn btn"
      @click="addToCart"
    >
      Add to cart
    </button>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { useShopStore } from '../stores/store.js';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const store = useShopStore();
  const products = computed(() => store.products);
  
  const product = computed(() => {
    let result = {};
    products.value.map((el) => {
      if (el.article === route.query.product) {
        result= el;
      }
    });
    
    return result;
  });
</script>

<style>
  .product-page {
    display: flex;
    flex-direction: column;
    juctify-content: center;
    align-items: center;
  }
</style>