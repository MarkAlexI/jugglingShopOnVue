<template>
  <div class="main-wrapper">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup>

</script>

<style>
  .main-wrapper {
    max-width: 900px;
    margin: 0 auto;
  }
</style>