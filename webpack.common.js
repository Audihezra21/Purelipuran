const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
    home: './src/scripts/home.js',
    galery: './src/scripts/galery.js',
    pemesanan: './src/scripts/pemesanan.js',
    pemesanan2: './src/scripts/pemesanan2.js',
    pemesanan2b: './src/scripts/pemesanan2b.js',
    pemesanan3: './src/scripts/pemesanan3.js',
    pemesanan4: './src/scripts/pemesanan4.js',
    about: './src/scripts/about.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 70000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      filename: 'home.html',
      template: './src/templates/home.html',
      chunks: ['home'],
    }),
    new HtmlWebpackPlugin({
      filename: 'galery.html',
      template: './src/templates/galery.html',
      chunks: ['galery'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pemesanan.html',
      template: './src/templates/pemesanan.html',
      chunks: ['pemesanan'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pemesanan2.html',
      template: './src/templates/pemesanan2.html',
      chunks: ['pemesanan2'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pemesanan2b.html',
      template: './src/templates/pemesanan2b.html',
      chunks: ['pemesanan2b'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pemesanan3.html',
      template: './src/templates/pemesanan3.html',
      chunks: ['pemesanan3'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pemesanan4.html',
      template: './src/templates/pemesanan4.html',
      chunks: ['pemesanan4'],
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/templates/about.html',
      chunks: ['about'],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }),
  ],
  resolve: {
    extensions: ['.js'],
  },
};
