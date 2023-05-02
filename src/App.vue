<template>
  <MainWrapper />
</template>

<script setup>
  import { computed, onMounted } from 'vue';
  import { useShopStore } from './stores/store.js';
  import MainWrapper from './components/popup/MainWrapper.vue';

  const store = useShopStore();
  const switchMobile = computed(() => store.switchMobile);
  const switchDesktop = computed(() => store.switchDesktop);
  
  onMounted(() => {
    window.innerWidth < 768 && switchMobile.value();
    
    window.addEventListener('resize', (event) => {
      window.innerWidth > 767
        ? switchDesktop.value()
        : switchMobile.value();
    });
  });
</script>

<style>
  #app {
    text-align: center;
    margin-top: 5rem;
  }
</style>
