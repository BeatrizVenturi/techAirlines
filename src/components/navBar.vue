<script setup></script>
<template>
  <nav class="nav">

    <ul>
      <li>
        <RouterLink to="/inicio/:id">Inicio</RouterLink>
      </li>
      <li>
        <RouterLink to="/">Passagens</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">Hotéis</RouterLink>
      </li>
      <li>
        <RouterLink to="/pacote/:id">Pacotes</RouterLink>
      </li>
       <li>
        <RouterLink to="/centralAjuda/:id">Central De Ajuda</RouterLink>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
nav {
 
  background: #3253a8;
  margin-top: -10px;
}

img {
  width: 100px;
}

nav::after {
  display: block;
  content: '';
  clear: both;
}

nav ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

nav ul li {
  float: left;
  position: relative;
  font-family: Bellefair;
  font-size: x-large;
}

nav ul li a {
  display: block;
  color: #ffefef;
  text-decoration: none;
  padding: 2rem 2rem;
  transition: all 0.3s ease-in-out;
}

nav ul a:hover,
nav ul a:focus {
  background: #0b40c89c;
}


nav ul a:focus {
  background: #051e5e9c;
  color: #ffffff;
}
</style>
