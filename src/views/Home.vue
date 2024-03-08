<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { VITE_API_BASE_URL } from '../constants/constants';
import Meals from '../components/Meals.vue';

const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 12; i++) {
    const response = await axios({
      method: 'GET',
      url: `${VITE_API_BASE_URL}/random.php`,
    });

    meals.value.push(response.data.meals[0]);
  }
});
</script>
