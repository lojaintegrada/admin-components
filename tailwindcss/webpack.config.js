const MergeJsonPlugin = require('merge-json-webpack-plugin');

const mergeDeep = (target, source) => {
  if (typeof target == "object" && typeof source == "object") {
    for (const key in source) {
      if (!target[key]) {
        target[key] = source[key];
      }
      else {
          if (typeof source[key] == "object") {
            mergeDeep(target[key], source[key]);
          }
          else {
            target[key] = source[key];
          }
      }
    }
  }
  return target;
};

module.exports = {
  plugins: [
    new MergeJsonPlugin({
      force: false,
      group: [
        {
          files: [
            './src/json/defaultSettings.json',
            './src/json/pagaLISettings.json'
          ],
          transform: (outputJson) => outputJson,
          to: './pagaLISettings.json',
        },
        {
          files: './src/json/defaultSettings.json',
          to: './defaultSettings.json',
        },
      ],
      mergeFn: (prev, current) => mergeDeep(prev, current),
    }),
  ],
};
