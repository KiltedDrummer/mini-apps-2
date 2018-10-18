const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js',
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      include: path.join(__dirname, '/client'),
      loader: 'babel-loader',
      query: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
