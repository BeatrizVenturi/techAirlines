<script setup>


</script>
<template>
    <div class="card-centrAju">
        <div class="reembo">
            <RouterLink to="/reembolso/:id">REEMBOLSO</RouterLink>
        </div>
        <div class="pagNaoEfet">
            <RouterLink to="/PagNaoEfet/:id">PAGAMENTO NÃO EFETUADO</RouterLink>

        </div>
        <div class="mudanca-data">
            <RouterLink to="/mudancaData/:id">MUDANÇA DE DATA</RouterLink>

        </div>
        <div class="polit-cria">
            <RouterLink to="/politCria/:id">POLÍTICA PARA CRIANÇAS</RouterLink>

        </div>
    </div>
    <div class="final">
        <p>CASO SEU PROBELMA NÃO TENHA SIDO RESOLVIDO, LIGUE PARA O (11)1874-2987 OU MANDE MENSAGEM NO NOSSO CHAT</p>
    </div>
</template>
<style scoped>
.card-centrAju {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

a {
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 100px;
    margin-left: 130px;
    display: block;
    line-height: 50px;
    font-weight: bold;
    text-decoration: none;
    background-color: rgba(50, 83, 168, 0.63);
    text-align: center;
    font-size: large;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 50px;
    transition: all .35s;
}
</style>