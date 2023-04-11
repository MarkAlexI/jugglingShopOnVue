<template>
  <div class="header">
    <router-link :to="{name: 'mainPage'}">
      <img src="../assets/images/2.jpg" alt="logo.jpg">
    </router-link>
    <div class="search-field" role="search">
      <input
        type="search"
        name="q"
        placeholder="Search the site…"
        aria-label="Search through site content"
        v-model="searchValue"
      />
      <button
        class="search-btn"
        @click="search(searchValue)"
      >&#128269;
      </button>
      <button
        class="search-btn"
        @click="clearSearchField"
      >&#x2715
      </button>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { useShopStore } from '../stores/store.js';
  import { useRouter, useRoute } from 'vue-router';

  const store = useShopStore();
  const setSearchValue = computed(() => store.setSearchValue);
  
  const router = useRouter();
  const route = useRoute();
  
  const searchValue = ref('');

  const search = (value) => {
    setSearchValue.value(value);
    if (route.path !== './catalog') {
      router.push({
        name: 'catalog'
      });
    }
  };

  const clearSearchField = () => {
    search('');
  };
</script>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #26ae68;
    padding: 1rem;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    img {
      width: 3rem;
    }
    .search-field {
      position: relative;
      right: 5vw;
      display: flex;
      justify-content: center;
      align-items: center;
      input {
        padding: .6rem;
        background: #e7e7e7;
      }
    }
    .search-btn {
      font-size: 2rem;
      background: transparent;
      border: none;
    }
  }
</style>