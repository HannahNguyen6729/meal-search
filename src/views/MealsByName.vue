<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold text-orange-500">Search Meals by Name</h1>
    <div class="px-8 pb-5">
      <div class="grid px-8 grid-cols-1">
        <input
          v-model="keyword"
          @change="handleSearchMeal"
          type="text"
          placeholder="Search for Meals"
          class="h-10 my-8 px-2 rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
        />
      </div>
      <Meals :meals="meals" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
import Meals from '../components/Meals.vue';

const keyword = ref('');
const store = useStore();
const meals = computed(() => store.state.searchedMeals);

const handleSearchMeal = async () => {
  if (keyword.value) {
    store.dispatch('searchMealAction', keyword.value);
  }
};
</script>

<style></style>
