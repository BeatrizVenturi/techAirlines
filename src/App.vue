<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navBar from '@/components/navBar.vue';
import CardPassagemMaisVendida from '@/components/menu/CardPassagemMaisVendida.vue';

</script>

<template>
  <header>
    <navBar></navBar>

    
<CardPassagemMaisVendida></CardPassagemMaisVendida>
    

  </header>
  <RouterView />
</template>

<style scoped></style>
