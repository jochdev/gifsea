const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: "Gifsea",
    short_name: "Gifsea",
    themeColor: "#ffffff",
    msTileColor: "#ffffff",

    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black-translucent",
    manifestOptions: {
      background_color: "#b91817",
      theme_color: "#fff",
    }
  }
})