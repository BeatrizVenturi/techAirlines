<script setup>
import { RouterView } from 'vue-router'
import navBar from '@/components/navBar.vue'

</script>

<template>
  <header>
    <navBar></navBar>
  </header>
  <main>
    <img><img>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  display: flex;
  
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
