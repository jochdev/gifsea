<template>
  <button
    class="btn btn-primary mb-3 f900"
    @click="downloadFile()"
    v-bind:class="{ disabled: load }"
  >
    Descargar
  </button>
</template>

<script>
export default {
  data: () => ({
    load: false,
  }),
  props: {
    url: String,
    title: String,
    id:Number,
  },
  methods: {
    async downloadFile() {
      this.load = true;
      const ruta = this.url;
      const id = this.id;
      const titulo = this.title.split(' ')[0];
      console.log(ruta);
      //create new a element
      let a = document.createElement("a");
      // get image as blob
      let response = await fetch(`${ruta}`);
      let file = await response.blob();
      // use download attribute https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Attributes
      a.download = titulo+'-'+id;
      a.href = window.URL.createObjectURL(file);
      //store download url in javascript https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes#JavaScript_access
      a.dataset.downloadurl = [
        "application/octet-stream",
        a.download,
        a.href,
      ].join(":");
      //click on element to start download
      a.click();
      this.load = false;
    },
  },
};
</script>
