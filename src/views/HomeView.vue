<template>
  <div class="container">
    <div class="abs-center">
        <div class="container-fluid py-5 text-center">
          <h1 class="f900 titulo">
            Encuentra tus
            <span class="color-secundadrio"> <animar-texto /></span>
            favoritos
          </h1>
          <p class="">Usamos la API de Gifphy.com</p>

          <router-link class="btn btn-primary btn-sm f900" to="/gifs"
            >Empezar</router-link
          >
        </div>
    </div>
  </div>
</template>

<style scoped>

.titulo{
  font-size: 3em;
}
.abs-center {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
}
.btn{
  font-size: 1.2em;
  padding: 10px 30px;
}
</style>

<script>
import AnimarTexto from "../components/AnimarTexto.vue";
export default {
  components: {
    AnimarTexto,
  },
  data: () => ({
    menu: "home",
  }),
};
</script>
