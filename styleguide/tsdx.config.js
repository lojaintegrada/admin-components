const path = require('path')
const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        // inject: {
        //   insertAt: 'top',
        // },
        extract: !!options.writeMeta ? path.resolve('dist/tailwind.css') : false,
      })
    );
    return config;
  },
};
