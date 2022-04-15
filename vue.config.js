const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: "Gifsea",
    short_name:"Gifsea",
    themeColor: "#ff8c32",
    msTileColor: '#FFFFFF',
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black-translucent",
    manifestOptions: {
      background_color: "#ff8c32"
    }
  }
})
