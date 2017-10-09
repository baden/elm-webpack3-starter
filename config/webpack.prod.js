const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeJsPlugin = require("optimize-js-plugin");
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
      filename: 'js/[name]-[hash].js',
    },
    module: {
      rules: [
        // {
        //   test: /\.js$/,
        //   use: 'babel-loader'
        // },
        {
          test: /\.(scss|sass|css)$/i,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {minimize: true}
              }, 'sass-loader'
            ]
          }),
        },
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
      new OptimizeJsPlugin({
              sourceMap: false
          }),
      new webpack.optimize.DedupePlugin(),
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
      new ExtractTextPlugin("css/[name]-[contenthash].css"),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body',
        filename: 'index.html'
      })
    ]
    // devtool: 'eval'
  }
};
