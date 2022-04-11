<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center mt-5 mb-0">
        <h1 class="f900">
          Encuentra tu <span class="color-secundadrio">GIF</span> favorito
        </h1>
      </div>
    </div>

    <div class="row">
      <div class="col align-self-center mt-5 mb-3">
        <search @accion="getGifs" :load="load" />
      </div>
    </div>

    <div class="row" v-if="load">
      <div class="col-sm-6 col-lg-3 col-mb-4">
        <CardPlaceholder />
      </div>
      <div class="col-sm-6 col-lg-3 col-mb-4">
        <CardPlaceholder />
      </div>
      <div class="col-sm-6 col-lg-3 col-mb-4">
        <CardPlaceholder />
      </div>
      <div class="col-sm-6 col-lg-3 col-mb-4">
        <CardPlaceholder />
      </div>
    </div>

    <div class="row" data-masonry='{"percentPosition": true }' v-else>
      <div class="col-sm-6 col-lg-3 col-mb-3" v-for="gif in gifs" :key="gif.id">
        <card-gif :data="gif" />
      </div>
    </div>

 
  </div>
</template>

<script>
import CardGif from "../components/CardGif.vue";
import Search from "../components/Search.vue";
import CardPlaceholder from "../components/CardPlaceholder.vue";

export default {
  components: { CardGif, Search, CardPlaceholder },
  data: () => ({
    gifs: {},
    load: false,
  }),
  created() {
    this.getGifs();
  },
  methods: {
    async getGifs(search = "moon knight") {
      const key = "1n2qIc3Oz9di4cLOf0B5RMPjNLOXju5a";
      this.cambiarEstado(true);

      const { data } = await this.axios.get(
        `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}`
      );
      this.gifs = data.data;
      this.cambiarEstado(false);
    },
    cambiarEstado(valor) {
      this.load = valor;
    },
  },
};
</script>
