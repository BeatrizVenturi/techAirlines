<script setup>
import CardPassagemMaisVendida from '@/components/menu/CardPassagemMaisVendida.vue'
</script>

<template>
  <div class="container">
    <h1>PASSAGENS MAIS VENDIDAS</h1>

    <div class="cards">
      <CardPassagemMaisVendida></CardPassagemMaisVendida>
      
    </div>
  </div>
</template>

<style scoped>
h1 {
  background: #3253A8;
  border-radius: 30px;
  color: white;
  font-family: Bellefair;
  text-align: center;
}
.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

}
</style>
