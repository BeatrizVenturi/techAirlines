<script setup>
import { RouterView } from 'vue-router'
import navBar from '@/components/navBar.vue'
</script>

<template>

  <header>
    <navBar></navBar>
  </header>
  <main>
    <div class="box">
    <div class="imagem-passagem">
      <img src="lacracao.jpeg" alt="">
    </div>
    <div class="imagem-passagem">
      <img src="lacracao.jpeg" alt="">
    </div>
    <div class="imagem-passagem">
      <img src="lacracao.jpeg" alt="">
    </div>
    <div class="imagem-passagem">
      <img src="lacracao.jpeg" alt="">
    </div>
    <div class="imagem-passagem">
      <img src="lacracao.jpeg" alt="">
    </div>
    
    </div>
    <RouterView />
  </main>
  
</template>

<style scoped>
main {
  display: flex;
  flex-direction: row;
}
img{
  width: 125px;
height: 86px;
flex-shrink: 0;
margin: 20px 30px;
}
.box {
  background-color: #3253a8;
  width: 195px;
  height: 1500px;
  flex-shrink: 0;
}
</style>
