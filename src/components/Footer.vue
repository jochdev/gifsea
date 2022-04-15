<template>

  <footer class="footer mt-auto py-3">
    <div class="container">
      <span class="text-muted">&copy; {{ year }} Gifsea, by
        <a href="https://twitter.com/jochdev" class="color-secundadrio">@jochdev</a>.
      </span>
    </div>
  </footer>


</template>

<script>
  export default {
    data: () => ({
      year: new Date().getFullYear(),
    }),
  };
</script>