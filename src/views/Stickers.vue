<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center mt-5 mb-0">
        <h1 class="f900">
          Encuentra tu <span class="color-secundadrio">Sticker</span> favorito
        </h1>
      </div>
    </div>

    <div class="row">
      <div class="col align-self-center mt-5 mb-3">
        <search @accion="getGifs" :load="load" />
      </div>
    </div>

    <div class="row" v-if="load">
      <div class="col-sm-6 col-lg-3 con-mb-4">
        <CardPlaceholder />
      </div>
      <div class="col-sm-6 col-lg-3 con-mb-4">
        <CardPlaceholder />
      </div>
      <div class="col-sm-6 col-lg-3 con-mb-4">
        <CardPlaceholder />
      </div>
      <div class="col-sm-6 col-lg-3 con-mb-4">
        <CardPlaceholder />
      </div>
    </div>

    <div class="row" data-masonry='{"percentPosition": true }' v-else>
      <div class="col-sm-6 col-lg-3 con-mb-4" v-for="gif in gifs" :key="gif.id">
       <card-sticker :data="gif" />
      
      </div>
    </div>

 
  </div>
</template>

<script>
import CardSticker from "../components/CardSticker.vue";
import Search from "../components/Search.vue";
import CardPlaceholder from "../components/CardPlaceholder.vue";

export default {
  components: { CardSticker, Search, CardPlaceholder },
  data: () => ({
    gifs: {},
    load: false,
  }),
  created() {
    this.getGifs();
  },
  
   mounted() {
    document.title = "Encuentra tu STICKER favorito"
  },
  methods: {
    async getGifs(search = "moon knight") {
      const key = "1n2qIc3Oz9di4cLOf0B5RMPjNLOXju5a";
      this.cambiarEstado(true);

      const { data } = await this.axios.get(
        `https://api.giphy.com/v1/stickers/search?q=${search}&api_key=${key}`
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
