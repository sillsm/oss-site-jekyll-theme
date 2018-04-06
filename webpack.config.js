const { resolve } = require('path');

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
        }
      ]
    },

    devServer: {
      port: 9000
    },

    plugins: [
      extractor
    ]
  };
};
