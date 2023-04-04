<template>
  <div class="catalog">
    <router-link :to="{name: 'cart'}">
      <div class="catalog__link_to_cart">
        Cart: {{ cart.length }}
      </div>
    </router-link>
    <h1>Catalog</h1>
    <Select />
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
  import Select from './Select.vue';

  const store = useShopStore();
  const products = computed(() => store.products);
  const cart = computed(() => store.cart);
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
    &__link_to_cart {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 16px;
      border: solid 1px grey;
    }
  }
</style>