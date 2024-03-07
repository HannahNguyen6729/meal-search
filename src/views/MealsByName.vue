<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">
      Search Meals by Name
    </h1>
    <div class="px-8 pb-3">
      <input
        v-model="keyword"
        @change="handleSearchMeal"
        type="text"
        placeholder="Search for Meals"
        class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
      />
      <p>{{ meals?.length }}</p>
      <div
        v-if="meals?.length > 0"
        class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8"
      >
        <div
          v-for="meal of meals"
          :key="meal.idMeal"
          class="h-full flex flex-col bg-white shadow rounded-xl hover:scale-105 transition-all"
        >
          <img
            :src="meal.strMealThumb"
            :alt="meal.strMeal"
            class="rounded-t-xl w-full h-48 object-cover"
          />
          <div class="p-3 flex-1">
            <h3 class="font-bold">{{ meal.strMeal }}</h3>
            <p>
              {{ truncateWords(meal.strInstructions, 200) }}
            </p>
          </div>
          <div class="px-3 pb-3 flex items-center justify-between">
            <a
              :href="meal.strYoutube"
              target="_blank"
              class="px-3 py-2 rounded border-2 text-white border-orange-600 bg-orange-500 hover:bg-orange-600 transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
      <div v-else class="flex justify-center text-gray-600 p-8">
        There are no meals
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { truncateWords } from '../utils/helper';

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
