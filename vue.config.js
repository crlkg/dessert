// vue.config.js
const path = require('path');

module.exports = {
  publicPath: '/dessert/',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/')
      }
    }
  }
};
