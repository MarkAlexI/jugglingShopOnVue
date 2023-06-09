<template>
  <div class="catalog">
    <Notification
      :messages="messages"
    />
    <router-link :to="{name: 'cart'}">
      <div class="catalog__link_to_cart">
        Cart: {{ cart.length }}
      </div>
    </router-link>
    <h1>Catalog</h1>
    <div class="filters">
      <Select
        :selected="selected"
        :options="categories.list"
        :isExpanded="isDesktop"
        @select="sortByCategories"
      />
      <div class="range-slider">
        <input
          type ="range"
          min="0"
          max="500"
          step="10"
          v-model.number="minPrice"
          @change="setRangeSlider"
        >
        <input
          type ="range"
          min="0"
          max="500"
          step="10"
          v-model.number="maxPrice"
          @change="setRangeSlider"
        >
      </div>
      <div class="range-values">
        <p>Min: {{ minPrice }}</p>
        <p>Max: {{ maxPrice }}</p>
      </div>
    </div>
    <div class="catalog__list">
      <CatalogItem
        v-for="product in filteredProducts"
        :product_data="product"
        :key="product.article"
        @addToCart="addToCartWithNotification(product)"
        @productClick="productClick"
      />
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive, computed, watch, onMounted } from 'vue';
  import { useShopStore } from '../../stores/store.js';
  import { useRouter } from 'vue-router';
  import CatalogItem from './CatalogItem.vue';
  import Select from '../popup/Select.vue';
  import Notification from '../notifications/Notification.vue';

  const messages = ref([]);
  
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

  const minPrice = ref(0);
  const maxPrice = ref(500);

  const store = useShopStore();
  const isDesktop = computed(() => store.isDesktop);
  const searchValue = computed(() => store.getSearchValue);
  const products = computed(() => store.products);
  const cart = computed(() => store.cart);
  const addToCart = computed(() => store.addToCart);

  const addToCartWithNotification = (product) => {
    addToCart.value(product);
    messages.value.unshift({
      name: 'Product added to cart',
      icon: 'success',
      id: Date.now.toLocaleString(),
    });
  };

  const router = useRouter();
  const productClick = (article) => {
    router.push({
      name: 'product',
      query: {
        'product': article
      }
    });
  };

  const sortByCategories = (category) => {
    if (category) selected.value = category.name;
    sortedProducts.list = [...products.value];
    sortedProducts.list = sortedProducts.list.filter((el) => {
      return el.price >= minPrice.value &&
             el.price <= maxPrice.value;
    });
    if (category) {
      sortedProducts.list = sortedProducts.list.filter((item) => {
        selected.value = category.name;
        return item.category === category.name;
      });
    }
  };

  const filteredProducts = computed(() => {
    if (sortedProducts.list.length > 0) {
      return sortedProducts.list;
    } else {
      return products.value;
    }
  });

  const setRangeSlider = () => {
    if (minPrice.value > maxPrice.value) {
      [minPrice.value, maxPrice.value] = [maxPrice.value, minPrice.value];
    }
    sortByCategories();
  };

  const sortProductsBySearchValue = (value) => {
    sortedProducts.list = [...products.value];
    if (value) {
      sortedProducts.list = sortedProducts.list.filter((el) => {
        return el.name.toLowerCase().includes(value.toLowerCase());
      });
    } else {
      sortedProducts.list = products.value;
    }
  };

  watch(searchValue, (newValue, oldValue) => sortProductsBySearchValue(newValue));
  
  onMounted(() => {
    sortProductsBySearchValue(searchValue.value);
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
      top: 6rem;
      right: .65rem;
      padding: 1rem;
      border: solid 1px grey;
    }
  }

  .filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .range-slider {
    width: 13.5rem;
    margin: auto 1rem;
    text-align: center;
    position: relative;
    & input {
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }

  input[type=range]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;
  }
</style>