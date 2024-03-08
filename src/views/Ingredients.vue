<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>
  </div>
  <div class="px-8">
    <input
      v-model="keyword"
      type="text"
      placeholder="Search for Ingredients"
      class="h-10 my-8 px-2 rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <a
        href="#"
        v-for="ingredient of computedIngredients"
        :key="ingredient.idIngredient"
        class="block bg-white rounded p-3 mb-3 shadow"
      >
        <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import axios from 'axios';
import { VITE_API_BASE_URL } from '../constants/constants';

const keyword = ref('');
const ingredients = ref([]);

onMounted(() => {
  const fetchIngredients = async () => {
    const res = await axios({
      method: 'GET',
      url: `${VITE_API_BASE_URL}/list.php?i=list`,
    });
    ingredients.value = res.data.meals;
    return res.data.meals;
  };

  fetchIngredients();
});

const computedIngredients = computed(() => {
  if (keyword.value) {
    return ingredients.value.filter((ingredient) =>
      ingredient.strIngredient
        .toLowerCase()
        .includes(keyword.value.toLowerCase())
    );
  }
  return ingredients.value;
});
</script>

<style></style>
