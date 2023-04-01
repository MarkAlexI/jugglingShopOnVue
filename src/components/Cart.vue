<template>
  <div class="cart">
    <router-link :to="{name: 'catalog'}">
      <div class="catalog__link_to_cart">
        Back to catalog
      </div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="!cart_data">There are no products...</p>
    <CartItem
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="removeFromCart(index)"
    />
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import CartItem from './CartItem.vue';
  import { useShopStore } from '../stores/store.js';

  const props = defineProps({
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    }
  });

  const store = useShopStore();
  const removeFromCart = computed(() => store.removeFromCart);
  const deleteFromCart = (index) => {
    
  };
</script>

<style>
  .cart {
    padding: 6px;
  }
</style>