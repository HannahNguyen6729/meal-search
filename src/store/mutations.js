export default {
  searchMealMutation(state, payload) {
    state.searchedMeals = payload;
  },
  searchMealByLetterMutation(state, payload) {
    console.log(payload);
    state.mealsByLetter = payload;
  },
};
