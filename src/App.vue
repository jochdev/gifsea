<template>
  <div>
    <Header />
    <main><router-view /></main>
    <footer><Footer /></footer>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;900&display=swap");
body {
  font-family: "Poppins", sans-serif;
  color: #06113c;
}

.color-secundadrio {
  color: #ff8c32;
}
.color-secundadrio:hover {
  color: #ff8c32;
}
.f100 {
  font-weight: 100;
}
.f300 {
  font-weight: 300;
}
.f500 {
  font-weight: 500;
}
.f900 {
  font-weight: 900;
}
.btn {
  background-color: #ff8c32;
  border-color: #ff8c32;
  color: #06113c;
}
.btn:hover {
  background-color: #ff8c32;
  border-color: #ff8c32;
  color: #06113c;
}
.btn:disabled {
  background-color: #ff8c32;
  border-color: #ff8c32;
  color: #06113c;
}

a {
  color: #ff8c32;
}
a:hover {
  color: #ff8c32;
}
</style>
<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
export default {
  components: { Header, Footer },
  methods: {},
};
</script>
