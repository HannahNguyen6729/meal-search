<template>
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-4xl font-bold mb-5 text-orange-500">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]" />
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area:</strong> {{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags:</strong> {{ meal.strTags }}</div>
    </div>

    <div class="my-3">
      <h2 class="text-2xl font-semibold mb-2">Instruction:</h2>
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li :key="el" v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li :key="el" v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="mt-4">
        <a
          :href="meal.strYoutube"
          target="_blank"
          class="px-3 py-2 rounded border-2 text-white border-orange-600 bg-orange-500 hover:bg-orange-600 transition-colors"
        >
          YouTube
        </a>
        <a
          :href="meal.strSource"
          target="_blank"
          class="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 transition-colors"
        >
          View Original Source
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { VITE_API_BASE_URL } from '../constants/constants';

const route = useRoute();
const mealId = route.params.id;

const meal = ref({});

onMounted(() => {
  const fetchMealDetails = async () => {
    const res = await axios({
      method: 'GET',
      url: `${VITE_API_BASE_URL}/lookup.php?i=${mealId}`,
    });
    if (res.data.meals[0]) {
      meal.value = res.data.meals[0];
    } else {
      meal.value = {};
    }
  };

  fetchMealDetails();
});
</script>

<style></style>
