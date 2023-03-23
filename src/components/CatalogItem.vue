<template>
  <div class="catalog-item">
    <img
      class="catalog-item__image"
      :src="'../src/assets/images/' + product_data.image"
      alt="img"
    >
    <p
      class="catalog-item__name"
    >
      {{ props.product_data.name }}
    </p>
    <p
      class="catalog-item__price"
    >
      Price: {{ props.product_data.price }} HRN
    </p>
    <button
      class="catalog-item__add_to_cart_btn btn"
    >
      Add to cart
    </button>
  </div>
</template>

<script setup>
  const props = defineProps({
    product_data: Object
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

  .catalog-item__image {
    width: 100px;
    height: 100px;
  }

  @media (min-width: 600px) {
    .catalog-item__image {
      width: 200px;
      height: 200px;
    }
  }
</style>