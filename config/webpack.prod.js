const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const outputPath = path.join(__dirname, '../dist');
// const outputFilename = isProd ? '[name]-[hash].js' : '[name].js'

module.exports = function(options) {
  return {
    entry: {
      app: './src/index.js'
    },
    output: {
      path: outputPath,
      filename: 'static/js/app.js',
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
          use: {
            loader: 'elm-webpack-loader',
            options: {
              verbose: true,
              warn: true
            }
          }
        }
      ],
      noParse: /\.elm$/
    },
    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new UglifyJsPlugin({
              parallel: true,
              uglifyOptions: {
                ie8: false,
                ecma: 6,
                warnings: true,
                mangle: true, // debug false
                output: {
                  comments: false,
                  beautify: false,  // debug true
                }
              },
              warnings: true,
            }),      
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body',
        filename: 'index.html'
      })
    ]
    // devtool: 'eval'
  }
};
