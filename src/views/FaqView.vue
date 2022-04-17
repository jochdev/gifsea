<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 mt-5 mb-0">
        <h1 class="f900">
          Preguntas <span class="color-secundadrio">frecuentes</span>
        </h1>
        <p>
          Conoce las funciones b&aacute;sicas y c&oacute;mo fue su desarrollo.
        </p>
      </div>
      <div class="col-md-12 mt-5">
        <h2 class="mb-4">¿Qu&eacute; es Gifsea?</h2>
        <p>
          Es un buscador de Gifs y Stickers desarrollado con Vue 3, su nombre es
          un acr&oacute;nimo derivado de las palabras <strong>GIF</strong> y
          <strong>SEARCH</strong> (que significa buscar, en inglés). Su uso es
          simple, tan solo debes consultar la palabra relacionada con el tema
          que buscas y tendr&aacute;s como resultado una variedad de recursos
          &uacute;tiles a través de la API de
          <a href="https://developers.giphy.com/">gifphy.com.</a>
        </p>

        <p>
          Creada por
          <a target="_blank" href="https://twitter.com/jochdev">@jochdev</a> ,
          como una muestra de conocimiento al finalizar un curso de Vue 3 en
          udemy.com.
        </p>

        <h2 class="mt-5">¿C&oacute;mo fue desarrollar Gifsea?</h2>
        <p>
          Todo comenz&oacute; con
          <strong>“Quiero probar la nueva versi&oacute;n de Vue”</strong>,
          conseguí un excelente curso en udemy.com donde una de las tareas
          principales era crear una
          <a href="https://web.dev/progressive-web-apps/">PWA</a>(Progressive
          Web App) para buscar gifs. Entonces quise darle el toque personal en
          base a mi experiencia en el desarrollo web.
        </p>

        <h4 class="mt-5">Buscando inspiraci&oacute;n</h4>
        <p>
          Generalmente cuando me planteo desarrollar un nuevo proyecto, lo
          primero que hago es definir la paleta de colores, para ello
          realic&eacute; una b&uacute;squeda en <strong>colorhunt.com</strong>,
          pueden encontrar la que utilic&eacute;
          <a href="https://colorhunt.co/palette/06113cff8c32ddddddeeeeee"
            >aqu&iacute;.</a
          >
        </p>

        <h4 class="mt-5">D&aacute;ndole forma al proyecto</h4>
        <p>
          El segundo paso fue dise&ntilde;ar la interfaz gr&aacute;fica
          plasmando mi visi&oacute;n sobre Gifsea en <strong>Adobe XD</strong>.
          Esta etapa es la base del desarrollo web porque define como
          ser&aacute;n los colores, el placeholder de todo el contenido y la
          tipograf&iacute;a; esta &uacute;ltima elegida fue
          <a href="https://fonts.google.com/specimen/Poppins">Poppins.</a>
          Usando Illustrator realic&eacute; un logo inspirado en la
          funci&oacute;n principal de Gifsea.
        </p>

        <h4 class="mt-5">Llego la hora de Bootstrap</h4>
        <p>
          Teniendo el dise&ntilde;o que esperaba deb&iacute;a pasarlo a la
          maqueta HTML para ello us&eacute;
          <a
            href="https://getbootstrap.com/docs/5.1/getting-started/introduction/"
            >Bootstrap 5.1</a
          >, con &eacute;sto me aseguraba que el sitio se adaptar&iacute;a a
          cualquier dispositivo.
        </p>

        <h4 class="mt-5">Divide y vencer&aacute;s</h4>
        <p>
          La etapa final del desarrollo es muy curiosa, el t&iacute;tulo de esta
          secci&oacute;n lo describe de la mejor manera, porque cuando se
          desarrolla con Vue hay que dividir todo el proyecto en partes muy
          peque&ntilde;as; es necesario agregar librer&iacute;as para el manejo
          de rutas, animaciones, visualizador de im&aacute;genes
          est&aacute;ticas, extrayendo as&iacute; las partes que ser&aacute;n
          reactivas para crear los componentes &uacute;tiles de la
          aplicaci&oacute;n.
        </p>

        <h4 class="mt-5">¿Listos? Prueba Nº 01</h4>
        <p>
          En &uacute;ltimo lugar pero no menos importante est&aacute;n las
          pruebas que se hicieron en diferentes dispositivos para comprobar que
          todo funciona y tenga el aspecto visual deseado.
        </p>

        <h4 class="mt-5">-- Update gifsea 2.0, 17/04/2022</h4>
        <p>
          Se ha ampliado su funcionalidad, ahora es posible descargar sus Gifs y
          Stickers.
        </p>

        <h4 class="mt-5">Todos a Github…</h4>
        <p class="mb-5">
          Visita el repositorio oficial de este proyecto en
          <a target="_blank" href="https://github.com/jochdev/gifsea">Github</a>
          y regalame una estrella.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  font-size: 1.2em;
}
.SongList {
  width: 40%;
}
.covers {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.cover {
  display: flex;
  justify-content: center;
  width: 33%;
  margin: 10px 0;
}
.min {
  border-radius: 10px;
  cursor: zoom-in;
}
.max {
  cursor: zoom-out;
  width: 100%;
}
.small {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.cover-small {
  display: flex;
  justify-content: center;
  width: 10%;
  margin: 10px 0;
  opacity: 0.6;
  cursor: pointer;
}
.cover-small:hover {
  opacity: 1;
}
.active {
  display: flex;
}
.None {
  display: none;
}
.smallActive {
  opacity: 1;
}
</style>
<style>
.fpage {
  margin-bottom: 20px;
}
</style>
<script>
export default {
  mounted() {
    document.title = "Preguntas Frecuentes";
  },
};
</script>
