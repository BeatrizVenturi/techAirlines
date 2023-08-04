<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

      <nav>

        <RouterLink to="/">Menu</RouterLink>
        <RouterLink to="/about">Hotéis</RouterLink>
      </nav>
    
  </header>

  <RouterView />
</template>

<style scoped>

</style>
