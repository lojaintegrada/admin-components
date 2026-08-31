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

// `sass-loader` no fim da cadeia porque a regra casa `.scss`: sem ele o postcss recebe sintaxe Sass
// crua e quebra no primeiro comentário `//`. Passava despercebido enquanto o único scss no grafo era
// o `tailwind.scss`, que não usa recurso nenhum do Sass.
const tailwindLoader = {
  test: /\.(s)?css$/i,
  use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
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
