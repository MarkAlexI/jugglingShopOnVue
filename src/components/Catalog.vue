<template>
  <div class="catalog">
    <h1>Catalog</h1>
    <div class="catalog__list">
      <CatalogItem
        v-for="i in 10"
        :index="i"
        :key="i"
      />
    </div>
  </div>
</template>

<script setup>
  import CatalogItem from './CatalogItem.vue';
</script>

<style>
  .catalog {
    padding: 6px;
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>