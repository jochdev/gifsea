<template>
  <div class="container fpage">
    <footer class="d-flex flex-wrap justify-content-center align-items-center">
      <p class="mb-0 text-muted">
        &copy; {{ year }} Gifsea, by
        <a href="https://twitter.com/jochdev" class="color-secundadrio"
          >@jochdev</a
        >.
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    year: new Date().getFullYear(),
  }),
};
</script>

