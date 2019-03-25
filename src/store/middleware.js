import agent from '../agent';
import { ASYNC_START, ASYNC_END } from '../constants/actionTypes';

// Promise Middleware used to automatly create an ASYNC_START & ASYNC_END on your Reducer
const promiseMiddleware = (store) => (next) => (action) => {
	if (isPromise(action.payload)) {
		store.dispatch({ type: ASYNC_START, subtype: action.type });

		const currentView = store.getState().viewChangeCounter;
		const skipTracking = action.skipTracking;
		action.payload.then(
			(res) => {
				const currentState = store.getState();
				if (!skipTracking && currentState.viewChangeCounter !== currentView) {
					return;
				}
				console.log('RESULT', res);
				action.payload = res;
				store.dispatch({ type: ASYNC_END, promise: action.payload });
				store.dispatch(action);
			},
			(error) => {
				const currentState = store.getState();
				if (!skipTracking && currentState.viewChangeCounter !== currentView) {
					return;
				}
				console.log('ERROR', error);
				action.error = true;
				action.payload = error.response.body;
				if (!action.skipTracking) {
					store.dispatch({ type: ASYNC_END, promise: action.payload });
				}
				store.dispatch(action);
			}
		);

		return;
	}

	next(action);
};

// JWT Middleware, this will be perfomed just when the dispatch type is REGISTER or LOGIN, it will store the token on the localstorage
const localStorageMiddleware = (store) => (next) => (action) => {
	if (action.type === REGISTER || action.type === LOGIN) {
		if (!action.error) {
			window.localStorage.setItem('jwt', action.payload.user.token);
			agent.setToken(action.payload.user.token);
		}
	} else if (action.type === LOGOUT) {
		window.localStorage.setItem('jwt', '');
		agent.setToken(null);
	}

	next(action);
};

// Check if exist and if then is a function in this case thats mean is a promsie
function isPromise(v) {
	return v && typeof v.then === 'function';
}

export { promiseMiddleware, localStorageMiddleware };
