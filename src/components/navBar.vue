<script setup></script>
<template>
  <nav class="nav">
    <ul>
      <li><RouterLink to="/">Menu</RouterLink></li>
      <li><RouterLink to="/about">Hotéis</RouterLink></li>
    </ul>
  </nav>

 
</template>
<style scoped>


nav {
  margin: 10 auto;
  background: #3253a8;
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
}

nav ul li a {
  display: block;
  color: #ffefef;
  text-decoration: none;
  padding: 3rem 2rem;
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
