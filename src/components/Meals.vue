<template>
  <div
    v-if="props.meals?.length > 0"
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
</template>

<script setup>
import { truncateWords } from '../utils/helper';

const props = defineProps({
  meals: {
    required: true,
    meals: Array,
  },
});
</script>

<style></style>
