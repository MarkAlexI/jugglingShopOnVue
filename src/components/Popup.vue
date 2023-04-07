<template>
  <div class="popup_wrapper" ref="popup_wrapper">
    <div class="popup">
      <div class="popup__header">
        <span>{{ popupTitle }}</span>
        <span @click="closePopup">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </span>
      </div>
      <div class="popup__content">
        <slot></slot>
      </div>
      <div class="popup__footer">
        <button
          class="close_modal btn"
          @click="closePopup"
        >
          Close
        </button>
        <button
          class="submit_btn btn"
          @click="rightBtnAction"
        >
          {{ rightBtnTitle }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  
  const props = defineProps({
    popupTitle: {
      type: String,
      default() {
        return 'Popup name';
      }
    },
    rightBtnTitle: {
      type: String,
      default() {
        return 'Ok';
      }
    }
  });

  const popup_wrapper = ref(null);

  const emit = defineEmits([
    'closePopup',
    'rightBtnAction'
  ]);
  
  const closePopup = () => {
    emit('closePopup');
  };

  const rightBtnAction = () => {
    emit('rightBtnAction');
  };

  onMounted(() => {
    document.addEventListener('click', (item) => {
      if (item.target === popup_wrapper.value) {
        closePopup();
      }
    });
  });
</script>

<style>
  .popup_wrapper {
    background: rgba(64, 64, 64, .4);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  
  .popup {
    padding: 1rem;
    position: fixed;
    top: 3rem;
    width: 40rem;
    background: white;
    box-shadow: 0 0 1rem 0 #e7e7e7;
    z-index: 5;
    &__header, &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (min-width: 400px) {
    .popup {
      width: 20rem;
    }
  }

  .submit_btn {
    padding: .5rem;
    color: white;
    background: #26ae68;
  }

  .close_modal {
    padding: .5rem;
    color: white;
    background: red;
  }
</style>