<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold mb-4">Random Meals</h1>

    <p>hi</p>
    <p>{{ meals }}</p>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const meals = computed(() => store.state.meals);
//console.log({ meals });
</script>
