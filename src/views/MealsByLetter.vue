<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals by Letter</h1>
  </div>
  <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
      @click="handleClick(letter)"
      class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
    >
      <span> {{ letter }}</span>
    </router-link>
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Meals from '../components/Meals.vue';

const store = useStore();
const meals = computed(() => store.state.mealsByLetter);

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const handleClick = (letter) => {
  store.dispatch('handleSearchMealByLetterAction', letter);
};
</script>

<style></style>
