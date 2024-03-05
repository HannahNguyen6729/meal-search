import { createStore } from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';

const store = createStore({
  state,
  mutations,
  actions,
});

export default store;

/* export const store = createStore({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
  },
}); */
