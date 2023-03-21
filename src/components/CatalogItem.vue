<template>
  <h2>Item {{ props.index }}</h2>
</template>

<script setup>
  const props = defineProps({
    index: Number
  });
</script>

<style>
  h2 {
    color: red;
  }
</style>