const babelLoaderConfig = {
  loader: 'babel-loader',
  options: {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-typescript"
    ],
    "plugins": [
      [
        "module-name-mapper",
        {
          "moduleNameMapper": {
            "\\.(css|jpg|png)$": "<pkgDir>/cypress/plugins/cssTransform.js"
          }
        }
      ]
    ]
  }
}

module.exports = (on, config) => {
  if (config.testingType === 'component') {
    require('@cypress/react/plugins/babel')(on, config, {
      setWebpackConfig: (webpackConfig) => {
        if(webpackConfig.module && webpackConfig.module.rules && webpackConfig.module.rules.length) {
          if(webpackConfig.module.rules[0].loader && webpackConfig.module.rules[0].loader == 'babel-loader') {
            delete webpackConfig.module.rules[0].loader
          }
          webpackConfig.module.rules[0].use = babelLoaderConfig
        } else {
          webpackConfig.module.rules = [
            babelLoaderConfig
          ]
        }
        return webpackConfig
      }
    })
  }

  return config
}
