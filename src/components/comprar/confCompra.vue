<script setup>
import BConfirmar from './BConfirmar.vue'
import { ref } from 'vue'
const enviar = ref(false)
const nomeCompleto = ref('')
const email = ref('')
const senha = ref('')
const confirmarSenha = ref('')
const pagamento = ref('')
</script>
<template>
  <div class="card-confirmar-compra">
    <div class="title">
      <h1>CONFIRMAR COMPRA</h1>
    </div>
    <div class="valor-total">
      <p>VALOR TOTAL</p>
    </div>
    <div class="pagamento">
      <input type="radio" id="Visa" value="Visa" v-model="pagamento" />
      <label for="Visa">Visa</label>

      <input type="radio" id="Elo" value="Elo" v-model="pagamento" />
      <label for="Elo">Elo</label>

      <input type="radio" id="masterCard" value="MasterCard" v-model="pagamento" />
      <label for="Master">Master Card</label>
    </div>
    <div class="form">
      <form @submit.prevent="enviar = !enviar">
        <div class="nomeCompleto">
          <input type="text" placeholder="Nome Completo:" v-model="nomeCompleto" />
        </div>
        <div class="email">
          <input type="email" placeholder="Email:" v-model="email" />
        </div>
        <div class="senha">
          <input type="password" placeholder="Senha:" v-model="senha" />
        </div>
        <div class="confirmar-senha">
          <input type="password" placeholder="Confirmar Senha:" v-model="confirmarSenha" />
        </div>
        <button type="submit" class="btn btn-outline-primary">Cadastrar</button>
      </form>
      <BConfirmar></BConfirmar>
    </div>
  </div>

  <div v-if="enviar">
    <div>{{ NomeCompleto }}</div>
    <div>{{ email }}</div>
    <div>{{ senha }}</div>
    <div>{{ confirmarSenha }}</div>
    <div>{{ pagamento }}</div>
  </div>
</template>
<style scoped>
.pagamento {
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.title {
  border-radius: 10px;
  background: #3253a8;
  text-align: center;
  width: 233px;
  height: 32px;
  align-items: center;
}

.valor-total {
  text-align: center;
  background: rgba(50, 83, 168, 1);
  width: 96px;
  height: 94px;
  border-radius: 10px;
}

.card-confirmar-compra {
  margin-top: 100px;
  width: 466px;
  height: 494px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  background-color: rgba(50, 83, 168, 0.63);
  padding-left: 10px;
}

h1 {
  color: #fff;
  font-family: Bellefair;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

p {
  color: #fff;
  font-family: Bellefair;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

input {
  background: rgba(50, 83, 168, 1);
  border-radius: 10px;
  border: #fff;
  font-family: Bellefair;
  width: 310px;
  height: 25px;
  margin-top: 20px;
}

input::placeholder {
  color: #fff;
  font-size: 19px;
}</style>
