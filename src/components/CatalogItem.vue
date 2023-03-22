<template>
  <div class="catalog-item">
    <img src="" alt="img">
    <p>Item {{ props.index }}</p>
    <p>Price: {{ props.index * 100 }}</p>
    <button>Add to cart</button>
  </div>
</template>

<script setup>
  const props = defineProps({
    index: Number
  });
</script>

<style>
  @import "../assets/styles/_variables.css";

  .catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 8px;
    margin-bottom: 16px;
  }
</style>