const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const withCSS = require('@zeit/next-css')

module.exports = withPlugins(
  [
    withCSS,
    [
      optimizedImages,
      {
        imagesFolder: 'img',
        imagesName: '[name].[hash].[ext]',
        optimizeImages: false
      }
    ]
  ],
  {
    webpack: (config, { dev }) => {
      config.node = config.node || {}
      config.node.fs = 'empty'
      const originalEntry = config.entry
      config.entry = async () => {
        const entries = await originalEntry()
        if (entries['main.js'] && !entries['main.js'].includes('./client/polyfills.js')) {
          entries['main.js'].unshift('./client/polyfills.js')
        }
        return entries
      }
      return config
    }
  }
)
