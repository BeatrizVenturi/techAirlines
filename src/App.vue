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
        <img src="@/assets/img/TECHT.png" alt="" width="130px" height="125px">
      </div>
      <div class="imagem-passagem">
        <img src="@/assets/img/MEGAOFERTA.png" alt="" width="150px" height="150px">
        <p>PASSAGENS AÈREAS COM 50% DE DESCONTO</p>
      </div>
      <div class="imagem-passagem">
        <img src="@/assets/img/MEGAOFERTA.png" alt="" width="150px" height="150px">
        <p>PASSAGENS AÈREAS COM 50% DE DESCONTO</p>
      </div>
      <div class="imagem-passagem">
        <img src="@/assets/img/MEGAOFERTA.png" alt="" width="150px" height="150px">
        <p>PASSAGENS AÈREAS COM 50% DE DESCONTO</p>
      </div>
      <div class="imagem-passagem">
        <img src="@/assets/img/MEGAOFERTA.png" alt="" width="150px" height="150px">
        <p>PASSAGENS AÈREAS COM 50% DE DESCONTO</p>
      </div>
      <div class="imagem-passagem">
        <img src="@/assets/img/MEGAOFERTA.png" alt="" width="150px" height="150px">
        <p>PASSAGENS AÈREAS COM 50% DE DESCONTO</p>
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
p{
  text-align: center;
  color: white;
  margin-top: -13px;
  margin-left: 19px;
  
}
.imagem-tech {
  margin-top: 15px;
  margin-left: 25px;
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
  margin-top: -90px;
}
</style>
