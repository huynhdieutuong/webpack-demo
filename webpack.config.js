const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'demo.js',
    path: path.resolve(__dirname, 'dist'),
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
