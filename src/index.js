// Require the polyfill before requiring any other modules.
import 'intersection-observer';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/fn/array/find';
import 'core-js/fn/array/includes';
import 'core-js/fn/number/is-nan';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { store } from './store';
import I18n from 'redux-i18n';
import { translations } from './i18n/translations';
import { createBrowserHistory } from 'history';
import { HashRouter } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import AppRoutes from './routes';

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
		<Provider store={store}>
			<Router history={createBrowserHistory()}>
				<I18n translations={translations} initialLang={'es'} fallbackLang={'es'}>
					<Header />
					<aside id="main" className="">
						<HashRouter>
							<AppRoutes />
						</HashRouter>
					</aside>
					<footer>
						<Footer />
					</footer>
				</I18n>
			</Router>
		</Provider>,
		document.getElementById('root')
	);
});
