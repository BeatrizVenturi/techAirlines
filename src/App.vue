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
      <div class="imagem-tech">
        <img src="TECHT.png" alt="" width="300px" height="300px">
      </div>
      <div class="imagem-passagem">
        <img src="MEGA OFERTA.png" alt="" width="150px" height="150px">
      </div>
      <div class="imagem-passagem">
        <img src="MEGA OFERTA.png" alt="" width="150px" height="150px">
      </div>
      <div class="imagem-passagem">
        <img src="MEGA OFERTA.png" alt="" width="150px" height="150px">
      </div>
      <div class="imagem-passagem">
        <img src="MEGA OFERTA.png" alt="" width="150px" height="150px">
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
.imagem-tech{
  margin-top: -60px;
  margin-left: -100px;
}
.imagem-passagem {

  flex-shrink: 0;
  margin: 20px 30px;
}

.box {
  background-color: #3253a8;
  width: 195px;
  flex-shrink: 0;
  margin-left: -8px;
  margin-top: -80px;
}
</style>
