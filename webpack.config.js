const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    static: "./dist",
  },
  mode:"development",
  entry: './src/scripts.js',
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Output Management',
       filename: 'index.html',
       template: 'src/index.html',
    }),
],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test:/\.(png|svg|jpg|gif)$/,
        type:'asset/resource',
      },
    ],
  },
 };
 

