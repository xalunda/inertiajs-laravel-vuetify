const cssImport = require('postcss-import')
const cssNesting = require('postcss-nesting')
const mix = require('laravel-mix')
const path = require('path')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

/*
|--------------------------------------------------------------------------
| Mix Asset Management
|--------------------------------------------------------------------------
|
| Mix provides a clean, fluent API for defining some Webpack build steps
| for your Laravel application. By default, we are compiling the Sass
| file for the application as well as bundling up all the JS files.
|
*/
Mix.listen('configReady', config => {
  const scssRule = config.module.rules.find(r => r.test.toString() === /\.scss$/.toString())
  const scssOptions = scssRule.loaders.find(l => l.loader === 'sass-loader').options
  scssOptions.implementation = require('sass')
  scssOptions.fiber = require('fibers')
  scssOptions.data = '@import "./resources/scss/variables.scss";'

  const sassRule = config.module.rules.find(r => r.test.toString() === /\.sass$/.toString())
  const sassOptions = sassRule.loaders.find(l => l.loader === 'sass-loader').options
  scssOptions.implementation = require('sass')
  scssOptions.fiber = require('fibers')

  sassOptions.data = '@import "./resources/scss/variables.scss"'
})

mix.js('resources/js/app.js', 'public/js')
  .postCss('resources/css/app.css', 'public/css', [
    cssImport(),
    cssNesting(),
  ])
  .webpackConfig({
    plugins: [
      new VuetifyLoaderPlugin()
    ],
    output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.runtime.esm.js',
        '@shared': path.resolve('resources/js/Components/Shared'),
        '@': path.resolve('resources/js'),
      },
    },
  })
  .babelConfig({
    plugins: ['@babel/plugin-syntax-dynamic-import'],
  })
  // .version()
  .sourceMaps()
