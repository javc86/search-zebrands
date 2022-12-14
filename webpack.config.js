const path = require("path");
const prod = process.env.NODE_ENV === 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  target: 'web',
  devServer: {
    historyApiFallback: true,
  },
  devtool: prod ? undefined : 'source-map',
  resolve: {
    alias: {
      images: path.resolve(__dirname, 'src/assets')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        },
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          }, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        include: path.join(__dirname, 'src/assets'),
        loader: 'file-loader',
        options: {
          outputPath: 'images',
          name: '[name].[hash:7].[ext]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [ '**/*', ],
      cleanAfterEveryBuildPatterns: ['!*.png'],
    }),
  ],
};