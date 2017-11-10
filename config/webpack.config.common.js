const fs = require('fs');
const path = require('path');
const paths = require('./paths');
const shouldUseSourceMap = process.env.NODE_ENV === 'development';
const nodeExternals = require('webpack-node-externals');
const projectDirectory = fs.realpathSync(process.cwd());

module.exports = {
  node: { __dirname: true },
  target: 'node',
  devtool: shouldUseSourceMap ? 'source-map' : false,
  context: paths.appSrc,
  externals: [nodeExternals()],
  entry: paths.serverIndexJS,
  output: {
    path: paths.appBuild,
    filename: 'server.js',
    devtoolModuleFilenameTemplate: '[absolute-resource-path]?[loaders]'
  },
  resolve: { extensions: ['.js', '.ts', '.json'] },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: require.resolve('babel-loader'), options: {
              plugins: [
                'transform-object-rest-spread',
                'transform-es2015-modules-commonjs'
              ],
              cacheDirectory: true,
              forceEnv: 'production'
            }
          },
          { loader: require.resolve('ts-loader'), options: { silent: true, transpileOnly: true } }
        ]
      }
    ]
  }
};
