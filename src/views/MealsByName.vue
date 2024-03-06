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
      <!--  <p>{{ keyword }}</p>
      <p>{{ meals }}</p> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const keyword = ref('');
const store = useStore();
const meals = computed(() => store.state.searchedMeals);

//console.log('meals', meals.value);

const handleSearchMeal = async () => {
  if (keyword.value) {
    store.dispatch('searchMealAction', keyword.value);
  }
};
</script>

<style></style>
