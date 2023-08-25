<script setup>
import { defineProps, onMounted, ref } from 'vue'
import { getPacotePorId } from '@/components/pacotes/listaPacote.js'
import voltarPacotes from './voltarPacotes.vue'
import comprar from '@/components/comprar/Comprar.vue';
 

const props = defineProps({
  id: String
})

const pacotes = ref({
  name: null,
  img: null,
  description: null,
  valor: null,
  info: {
    diaUm: {
      manha: null,
      tarde: null,
      noite: null
    },
    diaDois: {
      manha: null,
      tarde: null,
      noite: null,
      detalhes: null
    }
  }
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
      <h1>{{ pacotes.name }}</h1>
    </div>
    <div class="info-pacote">
      <div class="diaUm">
        <p>Dia Um:</p>
        <ul>
          <li>
            {{ pacotes.info.diaUm.manha }}
          </li>
          <li>
            {{ pacotes.info.diaUm.tarde }}
          </li>
          <li>
            {{ pacotes.info.diaUm.noite }}
          </li>
        </ul>
      </div>
      <div class="diaDois">
        <p>Dia Dois:</p>
        <ul>
          <li>
            {{ pacotes.info.diaDois.manha }}
          </li>
          <li>
            {{ pacotes.info.diaDois.manha }}
          </li>
          <li>
            {{ pacotes.info.diaDois.noite }}
          </li>
        </ul>
        <div class="detalhes">
          <p>Detalhes:</p>
          <ul>
            <li>
              {{ pacotes.info.diaDois.detalhes }}
              
            </li>
          </ul>
        </div>
        <div class="valor">
         <button>R${{ pacotes.valor }},00</button>
        </div>
        <div class="comprar">
<comprar></comprar>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.valor{
  margin-bottom: 20px;
}
.comprar{
  margin-left: 320px;
  
    
}
button{
  margin-top: 10px;
  background-color: #3253a8;
  border-style: none;
  font-size: 30px;
  color: #fff;
  font-family: Bellefair;
margin-left: 350px;
border-radius: 10px;

}
li {
  font-size: 19px;
  color: #fff;
  font-family: Bellefair;
  text-align: justify;
  margin-top: 12px;
}
.info-pacote {
  width: 790px;
  height: 859px;
  border-radius: 0px 0px 12px 0px;
  margin-top: -33px;
  background: rgba(50, 83, 168, 0.63);
  margin-bottom: auto;  
  padding-right: 10px;
}
.pacotes {
  margin-top: 40px;
}
.voltar {
  margin-top: 10px;
  margin-left: 70px;
  margin-bottom: -40px;
}
.titulo {
  color: #fff;
  text-align: center;
  font-family: Bellefair;
  border-radius: 0px 12px 0px 0px;
  background: #3253a8;
  margin-top: auto;
  margin-bottom: auto;
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
  width: 773px;
  height: 910px;
}

p {
  font-size: 20px;
  color: #fff;
  text-align: center;
  font-family: Bellefair;
  font-weight: 400;
  line-height: normal;

}

h1 {
  font-size: 50px;
  font-family: Bellefair;
}

.foto-passagem {
  border-radius: 12px 0px 0px 12px;
  margin-left: 55px;
  margin-top: 54px;
}
</style>
