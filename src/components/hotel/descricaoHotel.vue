<script setup>
import { defineProps, onMounted, ref } from 'vue';
import { getHotelPorId } from '@/components/menu/ListaMenu';
import comprar from '@/components/comprar/Comprar.vue';
import voltarHotel from '../visualizar/voltarHotel.vue';


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
  <voltarHotel></voltarHotel>
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
       <p> {{ hoteis.detalhes }}</p>
           
        </div>
        <div class="botao">
            <comprar></comprar>
        </div>

    </div>
</div>
</div>
</template>
<style scoped>
.botao{
     margin-left: 290px;
}
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
border: 3x solid #5E84E7;
background: transparent;
color: #ffffff;
}
.valores {
height: 170px;
margin-top: -41px;
border-radius: 0px 0px 12px 0px;
padding-right: 80px;
background: rgba(50, 83, 168, 0.63);
}
.hotel {
margin-top: 102px;
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
padding-right: 102px;
background: rgba(50, 83, 168, 0.63);
}
.foto-passagem {
width: 783px;
height: 890px;
}
.info-passagem {
border-radius: 0px 0px 12px 0px;
background: rgba(50, 83, 168, 0.63);
}
p {
font-size: 30px;
color: #FFF;
text-align: center;
font-family: Bellefair;
padding-left: 125px;

}

h1 {
font-size: 60px;
font-family: Bellefair;
}

.foto-passagem {
border-radius: 12px 0px 0px 12px;
margin-left: 55px;
margin-top: 54px;
}

.titulo {
color: #FFF;
text-align: center;
font-family: Bellefair;
font-size: 12px;

border-radius: 0px 12px 0px 0px;
background: #3253A8;
margin-top: 54px;

}

.ida-volta {
        display: grid;
font-family: Bellefair;
padding-right: 80px;
margin-top: -40px;
}
.voo{
    margin-top: 20px;

}

</style>