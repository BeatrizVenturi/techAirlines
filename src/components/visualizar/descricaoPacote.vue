<script setup>
import { defineProps, onMounted, ref } from 'vue';
import { getPacotePorId } from '@/components/pacotes/listaPacote.js';
import voltarPacotes from './voltarPacotes.vue';

const props = defineProps({
    id: String
})

const pacotes = ref({
        "name": null,
        "img": null,
        "description":null
})


onMounted(() => {
    console.log(props.id)
    pacotes.value = getPacotePorId(props.id)

})


</script>
<template>
 
    
 <div class="wrap-passagens">

<div class="voltar">
    <voltarPacotes></voltarPacotes>
</div>

<img :src="pacotes.img" alt="foto" class="foto-passagem" />

</div>
<div class="pacotes">
    <div class="titulo">
        <h1>{{ pacotes.name}}</h1>
    </div>
    <div class="info-pacote">

    </div>
</div>


</template>
<style scoped>
.pacotes{
    margin-top: 20px;
}
.info-pacote{
  margin-top: -40px;
    width: 790px;
height: 524px;
flex-shrink: 0;
border-radius: 0px 0px 12px 12px;
background: rgba(50, 83, 168, 0.63);
}
.voltar{
margin-top: 10px;
margin-left: 70px;
margin-bottom: -40px;
}
.titulo {
color: #FFF;
text-align: center;
font-family: Bellefair;
border-radius: 0px 12px 0px 0px;
background: #3253A8;
margin-top: 54px;
;
}
h1 {

font-family: Bellefair;
}












.wrap-passagens {
display: inline-block;
position: relative;
}

.wrap-passagens figcaption {
position: absolute;

color: black;
text-shadow: 0px 0px 5px black;
}




.foto-passagem {
width: 783px;
height: 890px;
}


p {
font-size: 20px;
color: #FFF;
text-align: center;
font-family: Bellefair;
font-weight: 400;
line-height: normal;
padding-left: 125px;

}

h1 {
font-size: 60px;
font-family: Bellefair;
}

.foto-passagem {

flex-shrink: 0;
border-radius: 12px 0px 0px 12px;
margin-left: 55px;
margin-top: 54px;
}


</style>