<script setup>
import { defineProps, onMounted, ref } from 'vue';
import { getPassagemPorId } from '@/components/menu/ListaMenu'
const {id} = defineProps({
    id: String
})

const passagem = ref({})

onMounted(() => {
    console.log(id)
    passagem.value = getPassagemPorId(id)
})

</script>

<template>
    <h1>Detalhes da passagem</h1>
    <div class="informacao-passagem">
      <div class="wrap-passagens">
        <img :src="passagem.img" alt="foto" class="foto-passagem" />
      </div>
      <p class="title">{{ passagem.title }}</p>
      <p class="origin">Origem: {{ passagem.origin }}</p>
      <p class="destiny">Destino: {{ passagem.destiny }}</p>
      <p>Testemunho :{{ passagem.testemunhos}}</p>
    </div>
</template>