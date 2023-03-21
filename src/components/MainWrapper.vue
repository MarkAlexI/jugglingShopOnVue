<template>
  <div class="main-wrapper">
    <p>{{ title }}</p>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const title = ref('@#$');
  console.log('#');
</script>

<style>
  .main-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
  }
</style>