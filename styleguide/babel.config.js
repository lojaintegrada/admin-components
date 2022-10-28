module.exports = function (api) {
  api.cache(true);

  let presets = []
  let plugins = []

  if (process.env.test) {
      presets = [
          "@babel/preset-react"
      ]

      plugins = [
          "transform-class-properties",
          "istanbul"
      ]
  }

  return {
      presets,
      plugins
  };
}