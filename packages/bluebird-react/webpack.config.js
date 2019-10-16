const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development', // TODO: confirm
  optimization: {
    minimize: false,
  },
  devtool: 'source-map',
  stats: 'minimal',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src')],
        use: 'babel-loader',
      },
    ],
  },
  externals: [nodeExternals()],
};
