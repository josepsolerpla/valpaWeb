import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import { promiseMiddleware } from './middleware';
/**
 * Main Store for all App
 */

export const store = createStore(
	rootReducer,
	/**
	 * MiddleWare will be here ---------->
	 */
	composeEnhancers(applyMiddleware(thunk, promiseMiddleware))
);
