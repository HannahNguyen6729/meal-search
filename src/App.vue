<template>
  <div class="bg-gray-100">
    <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
      <div>Home</div>
      <div class="flex items-center gap-6">
        <router-link
          :to="{ name: 'byName' }"
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
          >Search Meals</router-link
        >
        <router-link
          :to="{ name: 'byLetter' }"
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
        >
          Meals By Letter</router-link
        >
        <router-link
          :to="{ name: 'byIngredient' }"
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
        >
          Meals By Ingredients</router-link
        >
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup></script>

<style></style>
