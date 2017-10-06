// import webpack from 'webpack';
const webpack = require('webpack');
// import HtmlWebpackPlugin from 'html-webpack-plugin';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

function hasProcessFlag(flag) {
  return process.argv.join('').indexOf(flag) > -1;
}

const HMR = hasProcessFlag('hot');

module.exports = function(options) {
  return {
    entry: {
      app: './src/index.js'
    },
    module: {
      rules: [
        // {
        //   test: /\.js$/,
        //   use: 'babel-loader'
        // },
        // {
        //   test: /\.scss$/,
        //   use: ['style-loader', 'css-loader', 'sass-loader']
        //   // include: [path.join(__dirname, '../src')]
        // },
        {
          test: /\.(scss|sass|css)$/i,
          use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })),
        },
        {
          test: /\.elm$/,
          exclude: [/elm-stuff/, /node_modules/],
          use:
            HMR?
              ['elm-hot-loader', {loader: 'elm-webpack-loader', options: {debug: true, warn: true, verbose: true}}]
            :
              ['elm-webpack-loader']
        }
      ],
      noParse: /\.elm$/
    },
    plugins: [
      new ExtractTextPlugin("styles.css"),
      // new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ],
    devtool: 'eval',
    devServer: {
      contentBase: './src/',
      // inline: true,
      // hot: true,
      historyApiFallback: true,
      open: true
    }
  };
};
