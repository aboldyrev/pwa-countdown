const copyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path')

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
	productionSourceMap: false,
	publicPath: 'pwa-countdown',
	outputDir: 'docs',
	configureWebpack: {
		plugins: [
			new copyWebpackPlugin({
				patterns: [
					{ from: "./src/assets/img", to: "img" },
				]
			})
		]
	},
	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].template = './src/assets/index.html'
				return args
			});

		//config.plugins.delete('pwa');
		//config.plugins.delete('workbox');
	},
	pwa: {
		name: 'Countdown',
		themeColor: '#1D4ED8',
		msTileColor: '#000000',
		appleMobileWebAppCapable: 'yes',
		appleMobileWebAppStatusBarStyle: 'black',
		manifestOptions: {
			icons: [
				{ 'src': './src/assets/img/icons/android-icon-36x36.png', 'sizes': '36x36', 'type': 'image/png' },
				{ 'src': './src/assets/img/icons/android-icon-48x48.png', 'sizes': '48x48', 'type': 'image/png' },
				{ 'src': './src/assets/img/icons/android-icon-72x72.png', 'sizes': '72x72', 'type': 'image/png' },
				{ 'src': './src/assets/img/icons/android-icon-96x96.png', 'sizes': '96x96', 'type': 'image/png' },
				{ 'src': './src/assets/img/icons/android-icon-144x144.png', 'sizes': '144x144', 'type': 'image/png' },
				{ 'src': './src/assets/img/icons/android-icon-192x192.png', 'sizes': '192x192', 'type': 'image/png' },
				{ 'src': './src/assets/img/icons/apple-icon-57x57.png', 'sizes': '57x57', 'type': 'image/png' },
				{ 'src': './src/assets/img/icons/apple-icon-60x60.png', 'sizes': '60x60', 'type': 'image/png' },
				{ 'src': './src/assets/img/icons/apple-icon-72x72.png', 'sizes': '72x72', 'type': 'image/png' },
				{ 'src': './src/assets/img/icons/apple-icon-76x76.png', 'sizes': '76x76', 'type': 'image/png' },
				{ 'src': './src/assets/img/icons/apple-icon-114x114.png', 'sizes': '114x114', 'type': 'image/png' },
				{ 'src': './src/assets/img/icons/apple-icon-120x120.png', 'sizes': '120x120', 'type': 'image/png' },
				{ 'src': './src/assets/img/icons/apple-icon-144x144.png', 'sizes': '144x144', 'type': 'image/png' },
				{ 'src': './src/assets/img/icons/apple-icon-152x152.png', 'sizes': '152x152', 'type': 'image/png' },
				{ 'src': './src/assets/img/icons/apple-icon-180x180.png', 'sizes': '180x180', 'type': 'image/png' },
				{ 'src': './src/assets/img/icons/apple-icon-precomposed.png', 'sizes': '192x192', 'type': 'image/png' },
				{ 'src': './src/assets/img/icons/apple-icon.png', 'sizes': '192x192', 'type': 'image/png' },
				{ 'src': './src/assets/img/icons/favicon-16x16.png', 'sizes': '16x16', 'type': 'image/png' },
				{ 'src': './src/assets/img/icons/favicon-32x32.png', 'sizes': '32x32', 'type': 'image/png' },
				{ 'src': './src/assets/img/icons/favicon-96x96.png', 'sizes': '96x96', 'type': 'image/png' },
				{ 'src': './src/assets/img/icons/favicon.ico', 'sizes': '16x16', 'type': 'image/vnd.microsoft.icon' },
				{ 'src': './src/assets/img/icons/ms-icon-70x70.png', 'sizes': '70x70', 'type': 'image/png' },
				{ 'src': './src/assets/img/icons/ms-icon-144x144.png', 'sizes': '144x144', 'type': 'image/png' },
				{ 'src': './src/assets/img/icons/ms-icon-150x150.png', 'sizes': '150x150', 'type': 'image/png' },
				{ 'src': './src/assets/img/icons/ms-icon-310x310.png', 'sizes': '310x310', 'type': 'image/png' },
			]
		},

		workboxPluginMode: 'InjectManifest',
		workboxOptions: {
			swSrc: 'src/sw.js',
		}
	}
}
