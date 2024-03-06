import axios from 'axios';
import { VITE_API_BASE_URL } from '../constants/constants';

export default {
  async searchMealAction(context, payload) {
    const handleSearchMeals = async () => {
      const res = await axios({
        method: 'GET',
        url: `${VITE_API_BASE_URL}/search.php?s=${payload}`,
      });
      return res.data.meals;
    };

    const meals = await handleSearchMeals();
    context.commit('searchMealMutation', meals);
  },
};
