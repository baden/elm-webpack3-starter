// import webpack from 'webpack';
const webpack = require('webpack');
// import HtmlWebpackPlugin from 'html-webpack-plugin';
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        {
          test: /\.elm$/,
          exclude: [/elm-stuff/, /node_modules/],
          use: HMR?
          ['elm-hot-loader','elm-webpack-loader']
          :['elm-webpack-loader']
        }
      ],
      noParse: /\.elm$/
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ],
    devtool: 'eval',
    devServer: {
      contentBase: './src/',
      inline: true,
      hot: true,
      historyApiFallback: true,
      open: true
    }
  }
};
