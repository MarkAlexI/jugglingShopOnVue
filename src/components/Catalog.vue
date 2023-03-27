<template>
  <div class="catalog">
    <h1>Catalog</h1>
    <div class="catalog__list">
      <CatalogItem
        v-for="product in products"
        :product_data="product"
        :key="product.article"
        @sendArticle="handleEvent"
      />
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import CatalogItem from './CatalogItem.vue';

  const handleEvent = (data) => {
    console.log(data);
  };

  const products = ref([
    {
      "image": "1.jpg",
      "name": "Knives",
      "price": 100,
      "article": "K1",
      "available": true,
      "category": "Knives"
    },
    {
      "image": "2.jpg",
      "name": "Kettle",
      "price": 200,
      "article": "K2",
      "available": true,
      "category": "Kettle"
    },
    {
      "image": "3.jpg",
      "name": "Rings",
      "price": 300,
      "article": "R1",
      "available": false,
      "category": "Rings"
    },
    {
      "image": "4.jpg",
      "name": "Ball",
      "price": 150,
      "article": "B1",
      "available": true,
      "category": "Ball"
    },
    {
      "image": "5.jpg",
      "name": "Ball",
      "price": 250,
      "article": "B2",
      "available": false,
      "category": "Ball"
    },
    {
      "image": "6.jpg",
      "name": "Ball",
      "price": 180,
      "article": "B3",
      "available": true,
      "category": "Ball"
    }
  ]);
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