<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="search for meal"
    />

    <p>{{ meals }}</p>

    <div class="flex justify-center gap-2 mt-2">
      <router-link
        v-for="letter of letters"
        :key="letter"
        :to="{ name: 'byLetter', params: { letter } }"
      >
        {{ letter }}
      </router-link>
    </div>

    <div>
      <prev>{{ ingredients }} </prev>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';
import { VITE_API_BASE_URL } from '../constants/constants';

const store = useStore();

const meals = computed(() => store.state.meals);
//console.log({ meals });

const letters = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'.split('');

const ingredients = ref([]);

onMounted(async () => {
  const response = await axios({
    method: 'GET',
    url: `${VITE_API_BASE_URL}/list.php?i=list`,
  });

  ingredients.value = response.data;
  console.log(ingredients.value);
});
</script>
