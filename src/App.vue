<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navBar from '@/components/navBar.vue';
</script>

<template>
  <header>
    <navBar></navBar>
  </header>




  <RouterView />
</template>

<style scoped></style>
