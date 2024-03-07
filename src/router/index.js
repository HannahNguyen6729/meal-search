import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MealList from '../views/MealList.vue';
import MealsByName from '../views/MealsByName.vue';
import MealsByLetter from '../views/MealsByLetter.vue';
import MealsByIngredient from '../views/MealsByIngredient.vue';
import Ingredients from '../views/Ingredients.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import MealDetails from '../views/MealDetails.vue';

const routes = [
  {
    path: '/',
    name: 'defaultLayout',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/letter/:letter',
        name: 'byLetter',
        component: MealList,
      },
      {
        path: '/by-name/:name?',
        name: 'byName',
        component: MealsByName,
      },
      {
        path: '/meal/:id',
        name: 'mealDetails',
        component: MealDetails,
      },
      {
        path: '/by-letter/:letter?',
        name: 'byLetter',
        component: MealsByLetter,
      },
      {
        path: '/by-ingredient/:ingredient?',
        name: 'byIngredient',
        component: MealsByIngredient,
      },
      {
        path: '/ingredients',
        name: 'ingredients',
        component: Ingredients,
      },
    ],
  },
  {
    path: '/guest',
    name: 'guestLayout',
    component: GuestLayout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
