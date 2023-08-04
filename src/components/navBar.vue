<script setup>
</script>
<template>
    <nav>
        <div class="nav-bar">

            <a href="">
                <RouterLink to="/">Menu</RouterLink>
            </a>
            <a href="">
                <RouterLink to="/about">Hotéis</RouterLink>
            </a>
        </div>

    </nav>
</template>
<style scoped>
.nav-bar {
    background-color: aqua;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: fixed;
    top: 0;
    width: 100%

}
</style>
