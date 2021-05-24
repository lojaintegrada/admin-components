const path = require('path')
const postcss = require('rollup-plugin-postcss');
const extractSelectors = require('./scripts/extract-selectors')

module.exports = {
  rollup(config, options) {
    if(!!options.writeMeta) {
      config.plugins.push(
        postcss({
          config: {
            path: './postcss.config.js',
          },
          extensions: ['.css'],
          minimize: true,
          inject: {
            insertAt: 'top',
          },
          extract: path.resolve('dist/tailwind.css'),
        })
      );
    }
    return config;
  },
};
