const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  assetsDir: "",
  outputDir: "docs",

  devServer: {
    host: "myselfpaper.online",
    historyApiFallback: true, // 画面リロードしてエラーにならないように
  },

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
});
