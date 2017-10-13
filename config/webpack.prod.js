const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeJsPlugin = require("optimize-js-plugin");
const path = require('path');
const ShakePlugin = require('webpack-common-shake').Plugin;
const fs = require('fs');

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
      new ShakePlugin({
        onGraph: (dot) => {
          fs.writeFileSync("shake.dot", dot);
        }
      }),
      new OptimizeJsPlugin({
              sourceMap: false
          }),
      // new webpack.optimize.DedupePlugin(),
      new UglifyJsPlugin({
              // parallel: true,
              uglifyOptions: {
                ie8: false,
                ecma: 6,
                warnings: true,
                mangle: true, // debug false
                compress: {
                  passes: 30,
                  unsafe: true,
                  unsafe_comps: true,
                  dead_code: true,
                  unsafe_Func: true,
                  unsafe_math: true,
                  unsafe_methods: true,
                  unsafe_proto: true,
                  unsafe_regexp: true,
                  comparisons: true,
                  // evaluate: true,
                  unsafe_arrows: true,
                  pure_getters: true,

                  keep_fargs: false,
                  // pure_funcs: ['Math.floor'],
                  // pure_funcs: ['_user$project$Components_IncDec$Model'],

                  // confilted with pass > 1
                  hoist_funs: true,
                  // hoist_vars: true,

                  // For production?
                  drop_console: true,
                  drop_debugger: true,
                  pure_funcs: ['console.log'],

                },

                output: {
                  comments: true,
                  beautify: true,  // debug true
                }
              },
              // warnings: true,
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
