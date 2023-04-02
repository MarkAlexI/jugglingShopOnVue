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
      <span>
        <span
          class="quantity__btn"
          @click="decrementItem"
        >-</span>
        {{cart_item_data.quantity}}
        <span
          class="quantity__btn"
          @click="incrementItem"
        >+</span>
      </span>
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

  const emit = defineEmits([
    'deleteFromCart',
    'decrementItem',
    'incrementItem'
  ]);

  const deleteFromCart = () => {
    emit('deleteFromCart');
  };

  const decrementItem = () => {
    emit('decrementItem');
  };

  const incrementItem = () => {
    emit('incrementItem');
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

  .quantity__btn {
    cursor: pointer;
  }
</style>