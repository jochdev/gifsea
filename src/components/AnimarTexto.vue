<template>
  <v-typical
    class="blink"
    :steps="['gifs', 3000, 'stickers', 3000]"
    :loop="Infinity"
    :wrapper="'span'"
  ></v-typical>
</template>

<script>
import VTypical from "vue-typical";

export default {
  components: {
    VTypical,
  },
};
</script>

<style scoped>
/* .blink::after {
  content: "|";
  animation: blink 4s infinite step-start;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
} */
</style>
