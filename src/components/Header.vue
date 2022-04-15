<template>
  <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
      <router-link to="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <span class="fs-4 txt-color">Gif<span class="color-secundadrio">sea</span></span>
      </router-link>
      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link px-2 txt-color orange">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/gifs" class="nav-link px-2 txt-color orange">Gifs</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/stickers" class="nav-link px-2 txt-color orange">Stickers</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/faq" class="nav-link px-2 txt-color orange">FAQ</router-link>
        </li>
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