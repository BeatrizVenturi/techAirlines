<script setup>
import { hoteis } from '@/components/menu/ListaMenu.js'
import MButton from '../MButton.vue';
</script>

<template>
  

  <div class="card-hotel" v-for="hotel in hoteis" :key="hoteis.id">
    <div class="informacao-hotel">
<div class="atributo">
    <div class="imagem-hotel">
        <img :src="hotel.img" alt="foto" class="foto-hotel"/>
      </div>
        <div class="local">
        <h1>{{ hotel.title }}</h1>
        <p>{{ hotel.name }}</p>
        <MButton @click="$router.push({name: 'hotel', params: { id: hotel.id }})"></MButton>
      </div>

</div>
     <div class="descricao">
<p>{{ hotel.description}}</p>
     </div>
    </div>
  </div>  
</template>
<style scoped>
.local{
    margin-left: 10px;
}
.descricao{
  font-size: 17px;
}
.card-hotel{
    background-color: rgba(50, 83, 168, 0.63);
  margin: 35px 55px;
  padding: 20px;
  border-radius: 10px;
  width: 650px;
  color: rgba(255, 255, 255, 1);
  color: #fff;
  font-family: Bellefair;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 500px;
 
}
.foto-hotel{
width: 400px;
height: 200px;
border-radius: 30px;
}
.atributo{
display: grid;
grid-template-columns: 1fr 1fr;
 text-align: center;

  border-radius: 10px;
  width: 250px;
  height: 170px;
}
.descricao{
    margin-top: 50px;
}

</style>
