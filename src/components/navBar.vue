<script setup>
</script>
<template>
   
   <nav class="nav">
	<ul>
		<li><a href="#"><RouterLink to="/">Menu</RouterLink></a></li>
    <li><a href="#"><RouterLink to="/about">Hotéis</RouterLink>
</a></li>
		
	</ul>
</nav>
   
   
</template>
<style scoped>
nav {
	margin: 0 auto;
	background: #3253A8;
	
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
	color: #ffff;
	text-decoration: none;
	padding: 1rem 1rem;
	transition: all .3s ease-in-out;
}

nav ul  a:hover,
nav ul  a:focus {
	background: #1e3b839c;
}


nav ul a:focus {
	background: #eee;
	color: #111;
}


</style>
