export default {
  searchMealMutation(state, payload) {
    console.log(payload);
    state.searchedMeals = payload;
  },
};
