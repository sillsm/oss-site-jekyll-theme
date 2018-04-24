const { resolve } = require('path');
const Webpack = require('webpack');

const ExtractPlugin = require('extract-text-webpack-plugin');

const extractor = new ExtractPlugin('[name].css');

module.exports = (env) => {
  return {
    context: resolve(__dirname, 'frontend'),

    entry: {
      main: './main'
    },

    output: {
      path: resolve(__dirname, 'assets/build'),
      publicPath: '/assets/build/',
      filename: '[name].js'
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader'
        },

        {
          test: /\.scss$/,
          use: extractor.extract({
            use: [
              'css-loader',
              'postcss-loader',
              'sass-loader'
            ]
          })
        },

        {
          test: /\.css$/,
          use: extractor.extract({
            use: [
              'css-loader',
              'postcss-loader'
            ]
          })
        },

        {
          test: /\.(png|ico|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
              }
            }
          ],
        }
      ]
    },

    devServer: {
      port: 9000,
      proxy: {
        '/': 'http://localhost:4000'
      }
    },

    plugins: [
      extractor,
      new Webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }),
    ]
  };
};

