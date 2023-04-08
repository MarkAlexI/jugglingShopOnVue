<template>
  <div class="catalog-item">
    <Popup
      v-if="isInfoPopupVisible"
      :popupTitle="product_data.name"
      rightBtnTitle="Add to cart"
      @closePopup="closePopupInfo"
      @rightBtnAction="addToCart"
    >
      <img
        class="catalog-item__image"
        :src="'../src/assets/images/' + product_data.image"
        alt="img"
      >
      <div class="catalog-item__popup">
        <p
          class="catalog-item__name"
        >
          {{ props.product_data.name }}
        </p>
        <p
          class="catalog-item__price"
        >
          Price: {{ props.product_data.price }} $
        </p>
        <p
          class="catalog-item__price"
        >
          {{ props.product_data.category }}
        </p>
      </div>
    </Popup>
    <img
      class="catalog-item__image"
      :src="'../src/assets/images/' + product_data.image"
      alt="img"
      @click="productClick"
    >
    <p
      class="catalog-item__name"
    >
      {{ props.product_data.name }}
    </p>
    <p
      class="catalog-item__price"
    >
      Price: {{ props.product_data.price }} $
    </p>
    <button
      class="catalog-item__show_info_btn btn"
      @click="showPopupInfo"
    >
      Show info
    </button>
    <button
      class="catalog-item__add_to_cart_btn btn"
      @click="addToCart"
    >
      Add to cart
    </button>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import Popup from './Popup.vue';
  
  const props = defineProps({
    product_data: Object
  });
  
  const isInfoPopupVisible = ref(false);
  
  const showPopupInfo = () => {
    isInfoPopupVisible.value = true;
  };

  const closePopupInfo = () => {
    isInfoPopupVisible.value = false;
  };
  
  const emit = defineEmits([
    'addToCart',
    'productClick'
  ]);

  const addToCart = () => {
    emit('addToCart', props.product_data);
  };

  const productClick = () => {
    emit('productClick', props.product_data.article);
  };
</script>

<style>
  @import "../assets/styles/_variables.css";

  .catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 8px;
    margin-bottom: 16px;
    &__popup {
      margin-left: 1rem;
    }
    &__image {
      width: 100px;
      height: 100px;
    }
    &__add_to_cart_btn {
      padding: .5rem 1rem;
      background: #26ae68;
      color: white;
      &:hover {
        background: #31c375;
      }
    }
    &__show_info_btn {
      margin: 0 1rem .5rem 0;
      padding: .5rem .7rem;
      background: dodgerblue;
      color: white;
      &:hover {
        background: blue;
      }
    }
  }
  
  .btn {
    border: 0;
    border-radius: .25rem;
    outline: none;
    cursor: pointer;
  }
  
  @media (min-width: 600px) {
    .catalog-item__image {
      width: 200px;
      height: 200px;
    }
  }
</style>