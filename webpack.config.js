var path = require('path');
var webpack = require('webpack'); // eslint-disable-line no-unused-vars
var HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// More use path
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
	entry: {
		app: path.resolve(APP_PATH, 'index.jsx')
	},
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},
  // open dev source map
	devtool: 'eval-source-map',
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			enforce: 'pre',
			use: ['eslint-loader'],
			include: APP_PATH
		}, {
			test: /\.jsx?$/,
			use: [
				'babel-loader'
			],
			include: APP_PATH
		},{
			test : /\.scss$/,
			use : ExtractTextPlugin.extract({
				fallback : 'style-loader',
				use : ['css-loader', 'sass-loader']
			})
		}
		]
	},
	plugins: [
		new HtmlwebpackPlugin({
			title: 'My app'
		}),
		new ExtractTextPlugin('style.css')
	]
};
