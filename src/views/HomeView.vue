<template>
  <div class="container">
    <div class="vh-100 row justify-content-center align-items-center">
      <div class="col-md-12 text-center">
        <h1 class="f900 titulo mb-3">
          Tus mejores
          <span class="color-secundadrio"> <animar-texto /></span>
        </h1>

        <p>
        ¡Los encontraras f&aacute;cilmente
          <router-link to="/gifs">aqu&iacute;!</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn {
  font-size: 1.2em;
  padding: 10px 30px;
}

.vh-100 {
  height: 75vh !important;
}
</style>

<style>
.fpage {
  margin-top: 10px;
  display: flex;
  justify-content: center;
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

  mounted() {
    document.title = "Gifsea by @jochdev";
  },
};
</script>
