/**
 * This file runs a webpack-dev-server, using the API.
 *
 * For more information on the options passed to WebpackDevServer,
 * see the webpack-dev-server API docs:
 * https://github.com/webpack/docs/wiki/webpack-dev-server#api
 * @ignore
 */

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('../webpack.dev.js');
const path = require('path');
const colors = require('colors');

// Configuración para el Webpack
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
	contentBase: 'www', // Donde compilar
	open: true, // Abrir al ejecutarse
	hot: true, // Hot Reload
	filename: 'main.js', // Nombre del compilado
	port: 80,
	publicPath: '/', // Ruta
	stats: {
		colors: true
	}
});
// Puerto escuchando
server.listen(8080, '0.0.0.0', function(err, result) {
	console.log("POINT YOUR BROWSER TO http://localhost:8080 IF THIS DOESN'T HAPPEN AUTOMATICALLY".yellow);
	console.log('ENJOY IT. SALUT I RES PUBLICA!'.red);
	if (err) {
		return console.log(err);
	}
});
