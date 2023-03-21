<template>
  <h1>Catalog</h1>
  <ul>
    <li v-for="i in 10">
      <CatalogItem :index="i" />
    </li>
  </ul>
</template>

<script setup>
  import CatalogItem from './CatalogItem.vue';
</script>

<style>
  h1 {
    color: pink;
  }
</style>