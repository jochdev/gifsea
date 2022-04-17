<template>
  <div class="card">
    <img
      loader="lazy"
      :src="data.images.downsized.url"
      alt="Gift"
      class="img-fluid"
    />
    <h2 class="text-truncate" style="max-width: 280px">{{ data.title }}</h2>
    <!-- <code>{{data}}</code> -->
    <div class="container">
      <file-component
        :url="data.images.downsized.url"
        :title="data.title"
        :id="data.id"
      />
    </div>
  </div>
</template>
<script>
import FileComponent from "./FileComponent.vue";
export default {
  components: {
    FileComponent,
  },
  props: {
    data: Object,
  },
};
</script>
<style scoped>
.card {
  margin: 1em auto;
  width: 320px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  background-color: #eeeeee;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  font-family: Sans-serif;
}

img {
  width: 300px;
  height: 300px;
  border-radius: 10px;
  margin: 0 auto;
}

h2 {
  font-size: 1.33rem;
  max-width: 280px;
  margin: 0.8em auto;
  line-height: 125%;
}

p {
  max-width: 280px;
  font-size: 0.5rem;
  margin: 0.5em auto;
  color: darkgray;
  line-height: 145%;
}

.btn {
  width: 200px;
}
</style>
