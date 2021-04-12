const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
module.exports = {
    chainWebpack: config => {
      config.module
        .rule('vue')
        .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
          options.transformAssetUrls = {
            img: 'src',
            image: 'xlink:href',
            'b-img': 'src',
            'b-img-lazy': ['src', 'blank-src'],
            'b-card': 'img-src',
            'b-card-img': 'src',
            'b-card-img-lazy': ['src', 'blank-src'],
            'b-carousel-slide': 'img-src',
            'b-embed': 'src'
          }
  
          return options
        })
    },

    configureWebpack: {
      plugins : [
    new PrerenderSPAPlugin({
      // Required - The path to the webpack-outputted app to prerender.
      staticDir: path.resolve(__dirname,  'dist'),
      
      // Required - Routes to render.
      routes: [ '/', '/one_year', '/Fascism', '/About'   ],
   
    
    })
  ]

  }}