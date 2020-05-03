const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  entry: {
    articletest: './src/js/entrypoints/articletest.js',
    index: './src/js/entrypoints/index.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: { // split css
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
 
    }
  },
  output: {
    chunkFilename: 'assets/js/[id].chunkbundle.js',
    filename: 'assets/js/[name].pagebundle.js',
    publicPath: '/dist/',
    path: path.resolve(__dirname, 'dist'),
  }, 
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/styles/[name].pagebundle.css',
      chunkFilename: 'assets/styles/[id].chunkbundle.css'
    }),
    new CopyPlugin([
      { // copy webcomponent bundle js files
        from: "./node_modules/@webcomponents/webcomponentsjs/bundles",
        to: "./assets/js/webcomponents_polyfills/bundles"
      },
      { // copy webcomponent loder file
        from: "./node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js",
        to: "./assets/js/webcomponents_polyfills/"
      },
      //COPY ALL THE HTML FILES 
      /*{
        from: "./src/html",
        to: "./"
      },*/
    ]),
    /** GENERATE PAGES  COPY ONE OF THE "new HtmlWebpackPlugin" object classes and edit it to add a new page*/
    new HtmlWebpackPlugin({  // Create home file
      filename: 'index.html',
      template: 'src/html/index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({  // CREATE ARTICLE FILE
      filename: 'articletest.html',
      template: 'src/html/articletest.html',
      chunks: ['articletest']
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

};
