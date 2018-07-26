/* eslint-disable no-undef */
const webpack = require('webpack');

module.exports = {
  lintOnSave: true,

  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        Popper: 'popper.js',
        Tether: 'tether'
      })
    ]
  },

  css: {
    extract: true,
    modules: false,
    sourceMap: false,
    loaderOptions: {
      sass: {
        // shared global scss variables
        // @/ is an alias to src/
        data: `@import "@/style/_vars.scss";`
      }
    }
  },
};
