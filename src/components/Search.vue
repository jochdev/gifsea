<template>
  <form class="row justify-content-center needs-validation" @submit.prevent="ejecutarPeticion" novalidate>
    <div class="col-lg-6 col-md-8 col-sm-12 mb-2">
      <label for="inputPassword2" class="visually-hidden">Password</label>
      <input ref="inputSearch" type="text" class="form-control input-search" :class="{ 'is-invalid': error }"
        id="inputPassword2" placeholder="Escribe aqui tu palabra clave, por ejemplo Moon Knight" v-model="search"
        :disabled="load" autocomplete="off" />
      <div class="invalid-feedback px-2">{{ msg_error }}</div>
    </div>

    <div class="col-lg-2 col-md-4 col-sm-12 mb-2">
      <button type="submit" class="btn btn-primary mb-3 f900" :disabled="load">
        <div v-if="load">
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          <span> Consultando..</span>
        </div>
        <span v-else c>Consultar</span>
      </button>
    </div>
  </form>
</template>

<script>
  export default {
    data: () => ({
      error: false,
      search: "",
      msg_error: "",
    }),
    mounted() {
      this.$nextTick(() => {
        this.$refs.inputSearch.focus();
      });
    },
    beforeUpdate() {
      this.$nextTick(() => {
        this.$refs.inputSearch.focus();
      });
    },
    props: {
      load: Boolean,
    },
    methods: {
      ejecutarPeticion() {
        if (!this.search) {
          this.msg_error = "Espera! Debes escribir algo.";
          this.error = true;
          this.$refs.inputSearch.focus();
        } else {
          this.$emit("accion", this.search);
          this.msg_error = "";
          this.error = false;
        }
      },
    },
  };
</script>
<style scoped>
  .spinner-grow {
    height: 15px;
    width: 15px;
  }

 
  input:focus,
  select:focus,
  select,
  input.form-control:focus {
    outline: none !important;

    outline-width: 0 !important;

    box-shadow: none;

    -moz-box-shadow: none;

    -webkit-box-shadow: none;
    border: 1px solid #ff8c32;
    color: #06113c;
  }
  .btn{
    width: 100%;
  }
</style>