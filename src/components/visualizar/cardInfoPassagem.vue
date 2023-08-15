<script setup>
import { defineProps, onMounted, ref } from 'vue';
import { getPassagemPorId } from '@/components/menu/ListaMenu'

const props = defineProps({
    id: String
})

const passagem = ref({
    "ida": {
        "data": null,
        "horario": null,
        "aeroporto": null,
        "tempo": null,
        "tipo": null
    },
    "volta": {
        "data": null
    }
})

onMounted(() => {
    console.log(props.id)
    passagem.value = getPassagemPorId(props.id)
    console.log(passagem.value.ida.data)
})
</script>
<template>
    <div class="wrap-passagens">
        <img :src="passagem.img" alt="foto" class="foto-passagem" />
    </div>

    <div class="voo">
        <div class="titulo">
            <h1>Voo</h1>
        </div>
        <div class="info-passagem">
            <div class="ida">
                <div class="data-ida">
                    <p>Ida</p>
                    <p>{{ passagem.ida.data }}</p>

                </div>
                <div class="hora-ida">
                    <p> {{ passagem.ida.horario }} </p>
                    <p>{{ passagem.ida.aeroporto }}</p>
                </div>
                <div class="tempo-voo">
                    <p>Tempo: {{ passagem.ida.tempo }}</p>
                    <p> {{ passagem.ida.tipo }}</p>
                </div>
            </div>

        </div>
    </div>
</template>
<style scoped>
.info-passagem {
    background-color: #3253A8A1;

}

p {
    font-size: 20px;
    color: #FFF;
    text-align: center;
    font-family: Bellefair;
    /* font-size: 12px; */
    /* font-style: normal; */
    font-weight: 400;
    line-height: normal;

}

h1 {
    font-size: 60px;
    font-family: Bellefair;
}

img {
    width: 783px;
    height: 890px;
    flex-shrink: 0;
    border-radius: 12px 0px 0px 12px;
    margin-left: 55px;
    margin-top: 54px;
}

.voo .titulo {
    color: #FFF;
    text-align: center;
    font-family: Bellefair;
    font-size: 12px;
    font-style: normal;
    border-radius: 0px 12px 0px 0px;
    background: rgba(50, 83, 168, 0.63);
    font-weight: 400;
    line-height: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 54px;
}

.ida {
    width: 341px;
    height: 27px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    font-family: Bellefair;
    padding-right: 200px;



}
</style>