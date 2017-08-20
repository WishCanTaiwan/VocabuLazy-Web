const path = require('path');
const paths = require('./paths');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  node: { __dirname: true },
  target: 'node',
  devtool: 'source-map',
  context: paths.appSrc,
  externals: [nodeExternals()],
  entry: [
    paths.serverIndexJS
  ],
  output: {
    path: paths.appBuild,
    filename: 'server.js',
    devtoolModuleFilenameTemplate: "[absolute-resource-path]?[loaders]"
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.json']
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        oneOf: [
          {
            test: [/\.ts$/, /\.tsx$/],
            include: paths.appSrc,
            use: [
              { loader: require.resolve('babel-loader'), options: { cacheDirectory: true } },
              { loader: require.resolve('ts-loader'), options: { silent: true, transpileOnly: true } },
            ]
          }
        ]
      }
    ]
  }
};