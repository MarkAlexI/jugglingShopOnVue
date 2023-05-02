<template>
  <div class="cart">
    <router-link :to="{name: 'catalog'}">
      <div class="catalog__link_to_cart">
        Back to catalog
      </div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="!cart_data.length">There are no products...</p>
    <CartItem
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="removeFromCart(index)"
      @decrementItem="decrementCartItem(index)"
      @incrementItem="incrementCartItem(index)"
    />
    <div class="cart__total">
      <p class="total__name">Total:</p>
      <p>{{ cartTotalCost }} $.</p>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import CartItem from './CartItem.vue';
  import { useShopStore } from '../../stores/store.js';

  const store = useShopStore();
  const removeFromCart = computed(() => store.removeFromCart);
  const decrementCartItem = computed(() => store.decrementCartItem);
  const incrementCartItem = computed(() => store.incrementCartItem);
  const cart_data = computed(() => store.cart);

  const cartTotalCost = computed(() => {
    let result = [];
    for (let item of cart_data.value) {
      result.push(item.price * item.quantity);
    }
    result = result.reduce((sum, el) => {
      return sum + el;
    }, 0);
    return result;
  });
</script>

<style>
  .cart {
    padding: 6px;
    &__total {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      padding: .5rem .75rem;
      display: flex;
      justify-content: center;
      font-size: 1.25rem;
      background: #26ae68;
      color: white;
    }
  }

  .total__name {
    margin-right: .5rem;
  }
</style>