<template>
  <div class='select'>
    <p
      class="title"
      @click="areOptionsVisible = !areOptionsVisible"
    >{{selected}}</p>
    <div
      class="options"
      v-if="areOptionsVisible || isExpanded"
    >
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{option.name}}
      </p>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';

  const props = defineProps({
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    selected: {
      type: String,
      default: ''
    },
    isExpanded: {
      type: Boolean,
      default: false
    }
  });

  const areOptionsVisible = ref(false);

  const emit = defineEmits(['select']);

  const selectOption = (option) => {
    emit('select', option);
    areOptionsVisible.value = false;
  };

  const hideSelect = () => {
    areOptionsVisible.value = false;
  };

  onMounted(() => {
    document.addEventListener('click', hideSelect, true);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('click', hideSelect);
  });
</script> 

<style>
  .select {
    position: relative;
    width: 13rem;
    cursor: pointer;
    text-align: left;
  }
  .title {
    border: solid 1px #aeaeae;
    padding: .5rem;
  }
  .v-select p {
    margin: 0;
  }

  .options {
    border: solid 1px #aeaeae;
    background: white;
    position: absolute;
    top: 1.875rem;
    width: 0;
    width: 100%;
    padding: .5rem;
  }

  .options p:hover {
    background: #e7e7e7;
  }
</style>