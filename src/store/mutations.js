export default {
  searchMealMutation(state, payload) {
    state.searchedMeals = payload;
  },
  searchMealByLetterMutation(state, payload) {
    state.mealsByLetter = payload;
  },
  searchMealByIngredientMutation(state, payload) {
    state.mealsByIngredient = payload;
  },
};
