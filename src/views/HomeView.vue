<script setup>
import CardPassagemMaisVendida from '@/components/menu/CardPassagemMaisVendida.vue'
</script>

<template>
  <div class="container">
   <div class="title">
    <h1>PASSAGENS MAIS VENDIDAS</h1>
   </div>

    <div class="cards">
      <CardPassagemMaisVendida></CardPassagemMaisVendida>
      
    </div>
  </div>
</template>

<style scoped>
.title{
  background: #3253A8;
  border-radius: 30px;
  color: white;
  font-family: Bellefair;
  width: 510px;
  margin-left: auto;
  margin-right: auto;
}
.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

}
</style>
