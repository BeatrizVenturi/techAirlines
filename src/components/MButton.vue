<script setup></script>
<template>
    <div class="wrapper">
        <div class="link_wrapper">
            <a href="#">VISUALIZAR</a>
        </div>
    </div>
</template>
<style scoped>
body {
    font-family: 'Lato', sans-serif;

}
.wrapper{
    padding-left: 9px;
}
.link_wrapper {
    position: relative;

}


a {
    display: block;
    width: 230px;
    height: 50px;
    line-height: 50px;
    font-weight: bold;
    text-decoration: none;
    background: #5E84E7;
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
    border: 3x solid #5E84E7;
    background: transparent;
    color: #ffffff;
}

a:hover+.icon {
    border: 3px solid #5E84E7;
    right: -10%;
}
</style>