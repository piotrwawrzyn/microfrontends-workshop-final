const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'article',
      filename: 'remoteEntry.js',
      exposes: {
        './ArticleApp': './src/bootstrap'
      },
      shared: ['lorem-ipsum']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
