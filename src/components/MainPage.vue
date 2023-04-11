<template>
  <div class="main-page">
    <h1>Online shop</h1>
    <p>
      <router-link :to="{name: 'catalog'}">
        to Catalog
      </router-link>
    </p>
  </div>
</template>

<script setup>

</script>

<style>
  .main-page {
    h1 {
      padding-top: 3rem;
    }
  }
</style>