<script setup>
import { ref } from 'vue'
const enviar = ref(false)
const nomeCompleto = ref('')
const email = ref('')
const senha = ref('')
const confirmarSenha = ref('')
</script>
<template>

<div class="card-confirmar-compra">
<div class="title">
    <p>CONFIRMAR COMPRA</p>
</div>
<div class="valor-total">
    <p>VALOR TOTAL</p>
</div>
<div class="form">
    <form @submit.prevent='enviar = !enviar'>
    <div class="nomeCompleto">
        <input type="text" placeholder="Nome Completo:" v-model="nomeCompleto">
    </div>
    <div class="email">
        <input type="email" placeholder="Email:" v-model="email">
    </div>
    <div class="senha">
        <input type="password" placeholder="Senha:" v-model="senha">
        <input type="password" placeholder="ConfirmarSenha:" v-model="confirmarSenha" >
    </div>
    <button type='submit' class="btn btn-outline-primary"  >Cadastrar</button>
    </form>
</div>

</div>

</template>
<style scoped></style>