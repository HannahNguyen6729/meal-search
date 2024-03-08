<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">
      Meals for {{ route.params.ingredient }}
    </h1>
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Meals from '../components/Meals.vue';
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();

const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch('handleSearchMealByIngredientAction', route.params.ingredient);
});
</script>

<style></style>
