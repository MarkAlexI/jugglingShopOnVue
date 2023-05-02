<template>
  <div class="main-wrapper">
    <MainHeader />
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup>
  import MainHeader from '../layouts/MainHeader.vue';
</script>

<style>
  .main-wrapper {
    max-width: 900px;
    margin: 0 auto;
  }
</style>