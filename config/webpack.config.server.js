const fs = require('fs');
const path = require('path');
const paths = require('./paths');
const nodeExternals = require('webpack-node-externals');
const projectDirectory = fs.realpathSync(process.cwd());
const resolveProject = relativePath => path.resolve(projectDirectory, relativePath);

module.exports = {
  node: { __dirname: true },
  target: 'node',
  devtool: 'cheap-module-source-map',
  context: paths.appSrc,
  externals: [nodeExternals()],
  entry: paths.serverIndexJS,
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
        test: /\.(ts|tsx)$/,
        include: paths.appSrc,
        use: [
          { loader: require.resolve('babel-loader'), options: { babelrc: false, cacheDirectory: true } },
          { loader: require.resolve('ts-loader'), options: { silent: true, transpileOnly: true } },
        ]
      }
    ]
  }
};
