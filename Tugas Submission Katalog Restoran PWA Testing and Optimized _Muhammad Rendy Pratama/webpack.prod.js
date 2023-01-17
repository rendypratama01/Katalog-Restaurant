/* eslint-disable object-curly-spacing */
/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
const common = require('./webpack.common');
const {merge} = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
});
