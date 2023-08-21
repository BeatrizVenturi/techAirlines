<script setup>
import { defineProps, onMounted, ref } from 'vue';
import { getHotelPorId } from '@/components/menu/ListaMenu'

const props = defineProps({
    id: String
})
onMounted(() => {
    console.log(props.id)
    hoteis.value = getHotelPorId(props.id)

})
const hoteis = ref({
 
})
</script>
<template>
    <div class="seila">
        <p>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

        </p>
    </div>
</template>
<style scoped></style>