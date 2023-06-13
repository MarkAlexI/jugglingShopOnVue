<template>
  <div class="product-page">
    <img
      class="catalog-item__image"
      :src="'../../src/assets/images/' + product.image"
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
    <p>
      <router-link :to="{name: 'catalog'}">
        to Catalog
      </router-link>
    </p>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { useShopStore } from '../../stores/store.js';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const store = useShopStore();
  const products = computed(() => store.products);
  
  const product = computed(() => {
    let result = {};
    products.value.map((el) => {
      if (el.article === route.query.product) {
        result = el;
      }
    });
    
    return result;
  });

  const addToCart = computed(() => store.addToCart(product.value));
</script>

<style>
  .product-page {
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>