const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  assetsDir: "",
  outputDir: "docs",
  devServer: {
    historyApiFallback: true, // 画面リロードしてエラーにならないように
  },

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
  pwa: {
    name: "SPONNECT",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    manifestOptions: {
      name: "SPONNECT",
      short_name: "SPON",
      start_url: ".",
      display: "standalone",
      background_color: "#42B983",
      icons: [
        {
          src: "img/icons/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "img/icons/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
      cleanupOutdatedCaches: true,
    },
  },
});
