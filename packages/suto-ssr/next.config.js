const path = require('path')

const withSass = require('@zeit/next-sass')
const withTM = require('next-transpile-modules')
const { withPlugins } = require('next-compose-plugins')

module.exports = withPlugins([
  [withTM, {
    transpileModules: [
      'react-redux',
      'lodash-es',
      'ramda/es',
      'redux-actions',
    ],
  }],
  [withSass, {
    cssModules: true,
    cssLoaderOptions: {
      localIdentName: '[folder]--[local]__[hash:base64:2]',
    },
    sourceMap: true,
    sassLoaderOptions: {
      includePaths: [
        path.resolve(__dirname, '../../node_modules'),
        path.resolve(__dirname, '../'),
        path.resolve(__dirname, './node_modules'),
        path.resolve(__dirname, './'),
      ],
    },
  }],
], {
  webpack: (config) => {
    try {
      return config
    } catch (err) {
      console.error('webpack: (config, { isServer }) - error', err)
      process.exit(1)
      throw new Error()
    }
  },
})
