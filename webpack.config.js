const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  // mode: 'production',
  // watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'index.html',
    }),
  ],
}
