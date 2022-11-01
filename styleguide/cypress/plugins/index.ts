/// <reference types="cypress" />

const babelLoaderConfig = {
  loader: 'babel-loader',
  options: {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-typescript"
    ],
    "plugins": [
      // [
      //   "module-name-mapper",
      //   {
      //     "moduleNameMapper": {
      //       // "\\.(css|jpg|png)$": "<pkgDir>/cypress/plugins/cssTransform.js"
      //     }
      //   }
      // ]
    ]
  }
}

const tailwindLoader = {
  test: /\.css$/i,
  use: ['style-loader', 'css-loader', 'postcss-loader'],
}

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config)
  
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
        webpackConfig.module.rules.push(tailwindLoader)
        return webpackConfig
      }
    })
  }

  on('after:run', (results) => {
    return require('cypress-sonarqube-reporter/mergeReports')(results, {
      mergeFileName: "sonar.xml"
    })
  });

  return config
}
