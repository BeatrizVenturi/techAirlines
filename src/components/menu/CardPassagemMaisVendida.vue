<script setup>
import { listaMenu } from '@/components/menu/ListaMenu.js';
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
    </div>
</template>
<style scoped>
.card-passagensMenu {
    background-color: rgba(50, 83, 168, 0.63);
    margin: 5px 10px;
    padding: 10px;
    border-radius: 10px;
    width: 180px;
    color: rgba(255, 255, 255, 1);
    color: #FFF;
    font-family: Bellefair;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

}

.card-passagensMenu .title {
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 18px;
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
    width: 180px;
    height: 270px;
}</style>