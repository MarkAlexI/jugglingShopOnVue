<template>
  <div class="cart">
    <h1>Cart</h1>
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
//  import { storeToRefs } from "pinia";
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
 // const { removeFromCart } = storeToRefs(store);
  const removeFromCart = computed(() => store.removeFromCart);
  const deleteFromCart = (index) => {
    
  };
</script>

<style>
  .cart {
    padding: 6px;
  }
</style>