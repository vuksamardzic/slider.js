const path = require('path');
const mode = require('yargs').argv.mode;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const libname = 'slider';
const filename = 'slider.min.js';
const dir = 'lib';
let plugins = [];

if (mode === 'development') {
  plugins.push(new HtmlWebpackPlugin({
    template: './index.html'
  }));
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, dir),
    filename: filename,
    library: libname,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  },
  plugins: plugins
};
