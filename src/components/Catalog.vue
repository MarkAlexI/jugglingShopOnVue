<template>
  <div class="catalog">
    <router-link :to="{name: 'cart'}">
      <div class="catalog__link_to_cart">
        Cart: {{ cart.length }}
      </div>
    </router-link>
    <h1>Catalog</h1>
    <Select
      :selected="selected"
      :options="categories.list"
      @select="sortByCategories"
    />
    <div class="catalog__list">
      <CatalogItem
        v-for="product in filteredProducts"
        :product_data="product"
        :key="product.article"
        @addToCart="addToCart(product)"
      />
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive, computed } from 'vue';
  import { useShopStore } from '../stores/store.js';
  import CatalogItem from './CatalogItem.vue';
  import Select from './Select.vue';

  const categories = reactive({
      list: [
        { name: 'All', value: 'all' },
        { name: 'Knives', value: 'knives' },
        { name: 'Kettle', value: 'kettle' },
        { name: 'Ball', value: 'ball' },
        { name: 'Rings', value: 'rings' }
      ]
  });

  const selected = ref('All');
  const sortedProducts = reactive({
    list: []
  });

  const store = useShopStore();
  const products = computed(() => store.products);
  const cart = computed(() => store.cart);
  const addToCart = computed(() => store.addToCart);

  const sortByCategories = (category) => {
    sortedProducts.list = [];
    products.value.map((item) => {
      if (item.category === category.name) {
        sortedProducts.list.push(item);
      }
    });console.log(sortedProducts.list.length);
    selected.value = category.name;
  };

  const filteredProducts = computed(() => {
    if (sortedProducts.list.length > 0) {
      return sortedProducts.list;
    } else {
      return products.value;
    }
  });
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