<script setup>

</script>
<template>
    <div class="button-voltar">
        <a href="#">VOLTAR</a>
    </div>
</template>
<style scoped>
a {
    display: block;
    width: 230px;
    height: 50px;
    line-height: 50px;
    font-weight: bold;
    text-decoration: none;
    background: #3253A8;
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
    border: 3x solid #3253A8;
    background: transparent;
    color: #ffffff;
}

a:hover+.icon {
    border: 3px solid #3253A8;
    right: -10%;
}
</style>