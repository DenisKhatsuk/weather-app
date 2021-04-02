const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';

  const config = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'source-map',
    watch: !isProduction,
    entry: './src/js/index.js',
    output: {
      filename: isProduction ? 'scripts-[hash:8].js' : undefined,
      path: path.join(__dirname, './dist'),
    },
    devServer: {
      contentBase: './dist',
      open: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.s?css$/,
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
            'postcss-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|svg|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'src/img/',
                name: '[name]-[sha1:hash:7].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf)(\?.*$|$)/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'src/fonts/',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Fancy Weather React',
        template: './src/html/template/template.html',
        favicon: './src/img/favicon.ico',
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'styles.css',
      }),
    ],
  };

  return config;
};
