<script setup>
import { defineProps, onMounted, ref } from 'vue';
import { getHotelPorId } from '@/components/menu/ListaMenu';
import comprar from '@/components/comprar/Comprar.vue';
import voltar from '@/components/visualizar/Voltar.vue';


const props = defineProps({
    id: String
})

const hoteis = ref({
        "name": null,
        "img": null,
        "PriceDiaria": null,
        "detalhes": null
})


onMounted(() => {
    console.log(props.id)
    hoteis.value = getHotelPorId(props.id)

})


</script>
<template>
 
    
 <div class="wrap-passagens">

<div class="voltar">
    <voltar></voltar>
</div>

<img :src="hoteis.img" alt="foto" class="foto-passagem" />

</div>

<div class="voo">
<div class="titulo">
    <h1>Diária</h1>
</div>
<div class="info-passagem">
    <div class="ida-volta">
        <div class="data-ida">
          <p>Sua Hospedagem:</p>
          <p>R${{ hoteis.PriceDiaria }}</p>
        </div>
    </div>
</div>

<div class="hotel">
    <div class="titulo">
        <h1>Hotel</h1>
    </div>

    <div class="info-hotel">
<p>{{ hoteis.name }}</p>        
    </div>
</div>
<div class="info-valores">
    <div class="titulo ">
        <h1>Detalhes</h1>
    </div>
    <div class="valores">

        <div class="valores-viajante">
        {{ hoteis.detalhes }}
            <comprar></comprar>
        </div>

    </div>
</div>
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

.valores-viajante p {
display: flex;
align-items: center;
justify-content: center;
}

.valores-viajante {
padding-top: 10px;
}

.valores {
margin: center;
height: 170px;
margin-top: -41px;
border-radius: 0px 0px 12px 0px;
padding-right: 80px;
background: rgba(50, 83, 168, 0.63);
}

.hotel {
margin-top: -24px;
}

.info-valores {
margin-top: 252.5px;
}





.info-hotel {
float: left;
width: 689px;
height: 170px;
margin-top: -41px;
border-radius: 0px 0px 12px 0px;
font-family: Bellefair;
padding-right: 80px;
display: grid;
grid-template-columns: 1fr 1fr 2fr;
background: rgba(50, 83, 168, 0.63);
}



.foto-passagem {
width: 783px;
height: 890px;
}

hr {
width: 767px;
height: 25px;
margin-top: -4px;
margin-bottom: 50px;
background: #3253A8;
border: none;
}

.info-passagem {
border-radius: 0px 0px 12px 0px;
background: rgba(50, 83, 168, 0.63);
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

.titulo {
color: #FFF;
text-align: center;
font-family: Bellefair;
font-size: 12px;
font-style: normal;
border-radius: 0px 12px 0px 0px;
background: #3253A8;
margin-top: 54px;
;
}

.ida-volta {
display: grid;
grid-template-columns: 1fr 1fr 1fr;
font-family: Bellefair;
padding-right: 80px;
width: 583px;
height: 100px;
margin-top: -40px;
}
</style>