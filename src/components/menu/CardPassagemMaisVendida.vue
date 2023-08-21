<script setup>
import { listaMenu } from '@/components/menu/ListaMenu.js'
import MButton from '@/components/MButton.vue';

</script>
<template>

  <div class="card-passagensMenu" v-for="lista in listaMenu" :key="lista.id">
    <div class="informacao-passagem">
      <div class="wrap-passagens">
        <img :src="lista.img" alt="foto" class="foto-passagem" />
      </div>
      <p class="title">{{ lista.title }}</p>
      <p class="origin">Origem: {{ lista.origin }}</p>
      <p class="destiny">Destino: {{ lista.destiny }}</p>
    </div>
    <div class="mb-button">
      <MButton @click="$router.push({name: 'passagem', params: { id: lista.id }})"></MButton>
    </div>
  </div>
  
</template>
<style scoped>
.card-passagensMenu {
  background-color: rgba(50, 83, 168, 0.63);
  margin: 35px 55px;
  padding: 10px;
  border-radius: 10px;
  width: 250px;
  color: rgba(255, 255, 255, 1);
  color: #fff;
  font-family: Bellefair;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.card-passagensMenu .title {
  
  margin-bottom: 1px;
  font-size: xx-large;
  font-family: Bellefair;
}

.foto-passagem {
  width: 100%;
  max-height: 100%;
  border-radius: 10px;
}

.wrap-passagens {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  width: 250px;
  height: 270px;
}



</style>
