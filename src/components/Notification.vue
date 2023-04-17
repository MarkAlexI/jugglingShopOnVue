<template>
  <div class="notification">
    <transition-group
      name="transition-animate"
      tag="div"
      class="messages_list"
    >
      <div
        class="notification__content"
        v-for="message in messages"
        :key="message.id"
        :class="message.icon"
      >
        <div class="content__text">
          <span>{{ message.name }}</span>
          {{ message.icon === 'success'
             ? '&check;'
             : '&#9888;'
          }}
        </div>
        <div class="content__buttons">
          <button v-if="leftButton.length">{{ leftButton }}</button>
          <button v-if="rightButton.length">{{ rightButton }}</button>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script setup>
  import { watch, onMounted } from 'vue';
  
  const props = defineProps({
    messages: {
      type: Array,
      default: () => []
    },
    leftButton: {
      type: String,
      default: ''
    },
    rightButton: {
      type: String,
      default: ''
    },
    timeout: {
      type: Number,
      default: 3000
    }
  });

  const hideNotification = () => {
    if (props.messages.length) {
      setTimeout(() => {
        props.messages.splice(props.messages.at(-1), 1);
      }, props.timeout);
    }
  };

  watch(props.messages, () => hideNotification());
  
  onMounted(() => {
    hideNotification();
  });
</script>

<style>
  .notification {
    position: fixed;
    top: 7rem;
    right: 1rem;
    z-index: 20;
    & messages_list {
      display: flex;
      flex-direction: column-reverse;
    }
    &__content {
      padding: 1rem;
      border-radius: .25rem;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 3rem;
      margin-bottom: 1rem;
      background: dodgerblue;
      &.error {
        background: red;
      }
      &.warning {
        background: orange;
      }
      &.success {
        background: green;
      }
    }
  }

  .content {
    &__text {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }
  }

  .transition-animate {
    &-enter {
      transform: translateX(8rem);
      opacity: 0;
    }
    &-enter-active {
      transition: all .6s ease;
    }
    &-enter-to {
      opacity: 1;
    }
    &-leave {
      height: 3rem;
      opacity: 1;
    }
    &-leave-active {
      transition: transform .6s ease, opacity .6s, height .6s .2s;
    }
    &-leave-to {
      height: 0;
      transform: translateX(8rem);
      opacity: 0;
    }
    &-move {
      transition: transform .6s ease;
    }
  }
</style>