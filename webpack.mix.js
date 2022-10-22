const mix = require('laravel-mix')
const path = require('path')
require('mix-env-file')

require('laravel-mix-eslint')
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts('resources/ts/app.ts', 'public/js')
	.vue({ version: 3 })
	.eslint({
		fix: true,
		extensions: ['ts', 'vue'],
	})

mix.sass('resources/scss/app.scss', 'public/css')

mix.alias({
	'@': path.join(__dirname, 'resources/'),
	//'~': path.join(__dirname, 'node_modules/'),
	vue$: path.join(__dirname, 'node_modules/vue/dist/vue.esm-bundler.js'),
	ziggy$: path.join(__dirname, 'node_modules/ziggy-js/dist/vue.es.js'),
})

mix.js('node_modules/intl-tel-input/build/js/utils.js', 'public/js')

mix.sourceMaps()

if (process.env.APP_ENV !== "local") {
	mix.env(`.env.${process.env.APP_ENV}`)
}

if (mix.inProduction()) {
	mix.webpackConfig({
		stats: {
			warnings: false,
		}
	})
    mix.options({
        terser: {
            terserOptions: {
                compress: {
                    drop_console: true
                }
            }
        }
    })
    mix.version()
}
