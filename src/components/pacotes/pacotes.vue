<script setup>
import { listaPacote } from '@/components/pacotes/listaPacote.js'
import MButton from '@/components/MButton.vue';
</script>
<template>
  <div class="card-pacote" v-for="pacote in listaPacote" :key="pacote.id">
    <div class="informacao-pacote">
      <div class="atributo">
        <img :src="pacote.img" alt="" class="wrap-pacote">
        <div class="name">
          <p> {{ pacote.name }}</p>
          <MButton @click="$router.push({ name: 'Descpacote', params: { id: pacote.id } })"></MButton>
        </div>

      </div>
      <div class="description">
        <p>{{ pacote.description }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.name .button-pacote {
  margin-top: 50px;
}

.name {
  margin-top: 50px;
}

.card-pacote .description {
  margin-top: 100px;
  font-size: 17px;
}

.card-pacote .name {
  margin-bottom: 1px;
  font-size: 25px;
  font-family: Bellefair;
}

.wrap-pacote {
  width: 400px;
  height: 250px;
  border-radius: 30px;
}

.card-pacote {
  background-color: rgba(50, 83, 168, 0.63);
  margin: 35px 55px;
  padding: 20px;
  border-radius: 10px;
  color: rgba(255, 255, 255, 1);
  color: #fff;
  font-family: Bellefair;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 400px;

}

.atributo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  border-radius: 10px;
  width: 450px;
  height: 170px;
}</style>