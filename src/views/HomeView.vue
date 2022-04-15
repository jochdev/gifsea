<template>
  <main class="flex-shrink-0 reducir">
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
  </main>
</template>

<style scoped>
.btn {
  font-size: 1.2em;
  padding: 10px 30px;
}

main > .container {
  padding: 60px 15px 0;
}

.reducir {
  margin-top: -140px;
}


.vh-100{
  height: 90vh !important;
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
