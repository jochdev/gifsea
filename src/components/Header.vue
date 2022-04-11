<template>
<div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4">
      <router-link to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"><span class="fs-4 txt-color">Gif<span class="color-secundadrio">sea</span></span></router-link>
      <ul class="nav nav-pills">
        <router-link to="/gifs" class="orange nav-link px-2 txt-color">Gifs</router-link>
        <router-link to="/stickers" class="orange nav-link px-2 txt-color">Stickers</router-link>
        <router-link to="/faq" class="orange nav-link px-2 txt-color">FAQ</router-link>
      </ul>
    </header>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .menu {
    background-color: #eeeeee;
  }
  .txt-color {
    color: #06113c;
  }
  .router-link-exact-active {
    display: inline-block;
    position: relative;
  }
  .router-link-exact-active::after {
    display: block;
    position: absolute;
    left: 0;
    bottom: 4px;
    width: 100%;
    height: 4px;
    content: "";
    opacity: 0.9;
  }
  .router-link-exact-active.orange::after {
    background-color: #ff8c32;
  }
</style>