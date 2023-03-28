<template>
  <div class="catalog">
    <h1>Catalog</h1>
    <div class="catalog__list">
      <CatalogItem
        v-for="product in store.products"
        :product_data="product"
        :key="product.article"
        @sendArticle="handleEvent"
      />
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { useShopStore } from '../stores/store.js';
  import CatalogItem from './CatalogItem.vue';

  const store = useShopStore();
  const handleEvent = (data) => {
    console.log(data);
  };
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