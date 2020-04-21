const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const TerserPlugin = require('terser-webpack-plugin');

const config = merge(baseConfig, {
  mode: "production",
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {drop_console: true}
        }
      })
    ],
  }
});

module.exports = config;
