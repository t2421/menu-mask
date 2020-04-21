const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');


const config = merge(baseConfig, {
  "mode":"development",
  devtool: 'source-map'
});

module.exports = config;
