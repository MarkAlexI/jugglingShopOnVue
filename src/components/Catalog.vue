<template>
  <div class="catalog">
    <h1>Catalog</h1>
    <div class="catalog__list">
      <CatalogItem
        v-for="product in products"
        :product_data="product"
        :key="product.article"
        @addToCart="addToCart(product)"
      />
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { useShopStore } from '../stores/store.js';
  import CatalogItem from './CatalogItem.vue';

  const store = useShopStore();
  const products = computed(() => store.products);
  const addToCart = computed(() => store.addToCart);
</script>

<style>
  .catalog {
    padding: 6px;
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
    }
  }
</style>