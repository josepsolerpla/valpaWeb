import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * Main Store for all App
 */

export const store = createStore(
	rootReducer,
	//   typeof Storage && window.localStorage.getItem("redux-store")
	//     ? JSON.parse(window.localStorage.getItem("redux-store"))
	//     : {},

	/**
	 * MiddleWare will be here
	 */

	composeEnhancers(applyMiddleware(thunk))
);
