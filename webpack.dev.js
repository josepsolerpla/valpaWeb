const path = require('path');
const webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	entry: [ './index.js', 'webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:8080/' ]
});
