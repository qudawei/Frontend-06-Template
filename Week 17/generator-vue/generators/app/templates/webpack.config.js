const VueLoaderPlugin = require('vue-loader/lib/plugin')

const webpack = require('webpack'); // 用于访问内置插件

module.exports = {
    entry:"./src/main.js",
  module: {
    rules: [{ test: /\.vue$/, use: 'vue-loader' }],
  },
  plugins: [new VueLoaderPlugin()],
};