<script setup>
import { hoteis } from '@/components/menu/ListaMenu.js'
</script>

<template>
  <div class="voltar">
    <button>Voltar</button>
  </div>

  <div class="card-hotel" v-for="hoteis in hoteis" :key="hoteis.id">
    <div class="informacao-hotel">
      <div class="imagem-hotel">
        <img :src="hoteis.img" alt="foto" width="300" height="300" />
      </div>
      <div class="nome">
        <h1>{{ hoteis.name }}</h1>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
