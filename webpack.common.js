const path = require('path');
const webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: path.join(__dirname, 'src'),
	output: {
		path: path.join(__dirname, 'www'),
		filename: 'main.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new MiniCSSExtractPlugin()
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.join(__dirname, 'src'),
				loaders: [ 'babel-loader' ]
			},
			{ test: /(\.css)$/, loaders: [ 'style-loader', 'css-loader' ] },
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&mimetype=application/font-woff'
			},
			{
				test: /\.(eot|ttf|otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: 'file-loader'
			},
			{
				test: /\.scss$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			}
		]
	}
};
