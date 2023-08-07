<script setup>
import CardPassagemMaisVendida from '@/components/menu/CardPassagemMaisVendida.vue'
</script>

<template>
  <div class="cards">
    <CardPassagemMaisVendida></CardPassagemMaisVendida>
  </div>
</template>

<style scoped>
.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  /* column-gap: 5%; */
  /* gap: 5%; */
}
</style>
