const path = require('path')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'css-loader',
          'sass-loader',
        ]
      },
    ]
  }
}