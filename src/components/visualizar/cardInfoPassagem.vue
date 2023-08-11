<script setup>
import { defineProps, onMounted, ref } from 'vue';
import { getPassagemPorId } from '@/components/menu/ListaMenu'

const props = defineProps({
    id: String
})

const passagem = ref({
    "ida": {
        "data": null
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
                <p>Ida</p><br>
                {{ passagem.ida.data }}
            </div>
            <div class="hora-aeroporto">
            </div>
        </div>
    </div>
</template>
<style scoped>
img {
    width: 283px;
    height: 358px;
    flex-shrink: 0;
    border-radius: 12px 0px 0px 12px;
}
.voo .titulo{
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
line-height: normal;}
.voo{
    width: 341px;
height: 27px;
flex-shrink: 0;
}

</style>