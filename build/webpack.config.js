const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',

  entry: {
    index: path.resolve(__dirname, '../src/index.js'),
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist')
  }
};
