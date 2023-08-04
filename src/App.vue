<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navBar from '@/components/navBar.vue';
import { listaMenu } from '@/components/menu/ListaMenu.js';
</script>

<template>
  <header>
    <navBar></navBar>

    <div class="card-passagensMenu" v-for="lista in listaMenu" :key="lista.id">
      <div class="wrap-passagnes">
        <img :src="lista.img" alt="foto" class="foto-passagem" />
      </div>
      <p class="title">{{ lista.title }}</p>
      <p class="origin">{{ lista.origin }}</p>
      <p class="destiny">{{ lista.destiny }}</p>
      <p class="price">{{ lista.price }}</p>
    </div>

  </header>
  <RouterView />
</template>

<style scoped></style>
