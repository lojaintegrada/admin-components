const path = require('path');

module.exports = {
  stories: [
    '../stories/*.stories.mdx',
    '../stories/**/*.stories.@(ts|tsx|js|jsx)',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-designs',
    'storybook-dark-mode',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  typescript: {
    check: true // type-check stories during Storybook build
  },
  core: {
    builder: 'webpack5'
  },
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "postcss-loader", // required for tailwind
          options: {
            implementation: require("postcss"), // postcss 8
            postcssOptions: {
              config: path.resolve(__dirname, "../postcss.config.js"),
            },
          },
        },
        {
          loader: "sass-loader",
          options: {
            // sourceMap: true,
            implementation: require("sass"), // dart sass
          },
        },
      ],
    });
    return config;
  },
};