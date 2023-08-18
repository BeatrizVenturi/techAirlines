<script setup>
import { defineProps, onMounted, ref } from 'vue';
import { getPassagemPorId } from '@/components/menu/ListaMenu';



// function formatarPreco(price) {
//     return 'R$ ' + price.toFixed(2).replace('.', ',')
// }

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
        "data": null,
        "horario": null,
        "aeroporto": null,
        "tempo": null,
        "tipo": null
    },
    "hotel": {
        "name": null,
        "img": null,
        "diaEntrada": null,
        "diaSaida": null
    },
    "price": null
})


onMounted(() => {
    console.log(props.id)
    passagem.value = getPassagemPorId(props.id)

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
            <div class="ida-volta">
                <div class="data-ida">
                    <p>Ida</p>
                    <p>{{ passagem.ida.data }}</p>
                </div>
                <div class="hora">
                    <p> {{ passagem.ida.horario }} </p>
                    <p>{{ passagem.ida.aeroporto }}</p>
                </div>
                <div class="tempo-voo">
                    <p>Tempo:{{ passagem.ida.tempo }}</p>
                    <p> {{ passagem.ida.tipo }}</p>
                </div>
            </div>
            <hr>
            <div class="ida-volta">
                <div class="data">
                    <p>Volta</p>
                    <p>{{ passagem.volta.data }}</p>
                </div>
                <div class="hora">
                    <p> {{ passagem.volta.horario }} </p>
                    <p>{{ passagem.volta.aeroporto }}</p>
                </div>
                <div class="tempo-voo">
                    <p>Tempo:{{ passagem.volta.tempo }}</p>
                    <p> {{ passagem.volta.tipo }}</p>
                </div>
            </div>
        </div>

        <div class="hotel">
            <div class="titulo">
                <h1>Hotel</h1>
            </div>

            <div class="info-hotel">
                <div class="img-hotel">
                    <img :src="passagem.hotel?.img" alt="" class="imagemHotel">
                </div>
                <div class="nome">
                    <p>{{ passagem.hotel?.name }}</p>
                </div>
                <div class="data">

                    <div class="dia-entrada">
                        <p>{{ passagem.hotel?.diaEntrada }}</p>
                    </div>
                    <div class="data-saida">
                        <p>
                            {{ passagem.hotel?.diaSaida }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="info-valores">
            <div class="titulo ">
                <h1>Valores</h1>
            </div>
            <div class="valores">
                <div class="valores-viajante">
                    <p>Valor por viajante: {{ (passagem.price) }}</p>

                    <p>Taxas e Impostos: R${{ passagem.taxa }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
*{
    font-family: Bellefair;
}
.dia-entrada{
    margin-left: -40px;
}
.data-saida{
    margin-left: -40px;

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

.valores-viajante {

    width: 689px;
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

.nome {
    margin-top: 40px;
    margin-left: -150px;
}

.img-hotel {
    margin-left: 90px;
    margin-top: 20px;

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

.imagemHotel {
    width: 165px;
    height: 140px;
    border-radius: 15px;

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
}</style>