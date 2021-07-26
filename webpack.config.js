const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
      eslintPath: require.resolve('eslint'),
      failOnError: true,
      context: './src',
      cache: true,
      cacheLocation: './node_modules/.cache/.eslintcache',
      cwd: path.resolve('.'),
      resolvePluginsRelativeTo: __dirname,
    })
  ]
};
