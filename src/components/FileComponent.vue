<template>
  <button class="btn btn-primary mb-3 f900" @click="downloadFile()">
    Descargar
  </button>
</template>

<script>
export default {
  props: {
    url: String,
    title: String,
  },
  methods: {
    async downloadFile() {
      const ruta = this.url;
      const titulo = this.title;
      //create new a element
      let a = document.createElement("a");
      // get image as blob
      let response = await fetch(`${ruta}`);
      let file = await response.blob();
      // use download attribute https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Attributes
      a.download = titulo;
      a.href = window.URL.createObjectURL(file);
      //store download url in javascript https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes#JavaScript_access
      a.dataset.downloadurl = [
        "application/octet-stream",
        a.download,
        a.href,
      ].join(":");
      //click on element to start download
      a.click();
    },
  },
};
</script>
