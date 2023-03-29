<template>
  <div class="cart-item">
    <img
      class="cart-item__image"
      :src="'../src/assets/images/' + cart_item_data.image"
      alt="img"
    >
    <div class="cart-item__info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.price}}</p>
      <p>{{cart_item_data.article}}</p>
    </div>
    <div class="cart-item__quantity">
      <p>Qty:</p>
      <p>{{cart_item_data.quantity}}</p>
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue';
  
  const props = defineProps({
    cart_item_data: {
      type: Object,
      default() {
        return {};
      }
    }
  });

  const emit = defineEmits(['deleteFromCart']);

  const deleteFromCart = () => {
    emit('deleteFromCart');
  };

  onMounted(() => {
    props.cart_item_data['quantity'] = 1;
  });
</script>

<style>
  .cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #e0e0e0;
    &__image {
      max-width: 50px;
    }
  }
</style>