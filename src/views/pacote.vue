<script setup>
import pacotes from '@/components/pacotes/pacotes.vue';
</script>
<template>
<div class="cards">
    <pacotes></pacotes>
</div>
</template>
<style scoped>
.cards {
 display: grid;
 grid-template-columns: 1fr 1fr;

}
</style>