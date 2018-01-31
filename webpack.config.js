var webpack = require('webpack')
var path = require('path')

module.exports = (env) => {
  const environment = process.env.NODE_ENV || 'development'
  const config = env.NODE_ENV || 'development'

  let webpackConfig = {
    context: path.join(__dirname, './src'),
    entry: './index.js',
    output: {
      path: path.join(__dirname, environment === 'production' ? './build' : './public'),
      filename: 'index.js'
    },
    module: {
      rules: [
        {
          exclude: [
            /\.html$/,
            /\.(js|jsx)$/,
            /\.(css|styl)$/,
            /\.json$/,
            /\.svg$/,
            /\.php$/
          ],
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'static/[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.php$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                limit: 10000,
                name: '[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(svg|png)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'static/[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.json$/,
          use: [ 'json-loader' ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                'presets': [
                  'env',
                  'stage-3',
                  'stage-2',
                  'stage-1',
                  'stage-0',
                  'preact'
                ],
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            }
          ]
        },
        {
          test: /\.styl$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            'stylus-loader'
          ]
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader'
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        'jQuery': 'jquery',
        '$': 'jquery',
        'jquery': 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
  }

  switch (environment) {
    case 'production':
      webpackConfig.plugins.push(new webpack.optimize.DedupePlugin())
      webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
        comments: false,
        compress: {
          warnings: false,
          drop_console: true
        }
      }))
      webpackConfig.plugins.push(new webpack.optimize.AggressiveMergingPlugin())
      break
    }

  return webpackConfig
}
