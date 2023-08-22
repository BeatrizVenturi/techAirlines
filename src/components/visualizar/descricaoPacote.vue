<script setup>
import { defineProps, onMounted, ref } from 'vue';
import { getPacotePorId } from '@/components/pacotes/listaPacote.js';
import voltar from '@/components/visualizar/Voltar.vue';


const props = defineProps({
    id: String
})

const pacotes = ref({
        "name": null,
        "img": null,
       
})


onMounted(() => {
    console.log(props.id)
    pacotes.value = getPacotePorId(props.id)

})


</script>
<template>
 
    
 <div class="wrap-passagens">

<div class="voltar">
    <voltar></voltar>
</div>

<img :src="pacotes.img" alt="foto" class="foto-passagem" />

</div>

</template>
<style scoped>
.voltar{
margin-top: 10px;
margin-left: 70px;
margin-bottom: -40px;
}


a {
display: block;
width: 230px;
height: 50px;
line-height: 50px;
font-weight: bold;
text-decoration: none;
background: #5E84E7;
text-align: center;
font-size: large;
color: #fff;
text-transform: uppercase;
letter-spacing: 1px;
border-radius: 50px;
transition: all .35s;
}

a:hover {
/* width: 200px; */
border: 3x solid #5E84E7;
background: transparent;
color: #ffffff;
}



* {
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