import { SET_AUTH, LOGIN, LOGOUT, VALIDATE_TOKEN } from '../constants/actionTypes';

const initialState = {
	isAuth: false
};

export default function Auth(state = initialState, action) {
	switch (action.type) {
		case VALIDATE_TOKEN:
			return {
				...state,
				isAuth: action.payload.user ? true : false,
				user: !action.payload.error ? action.payload.user : null
			};
		case SET_AUTH:
			return {
				...state,
				isAuth: action.error ? false : action.auth
			};
		case LOGIN:
			if (action.error) {
				return {
					...state,
					errors: action.payload.errors,
					isAuth: false
				};
			}
			return {
				...state,
				user: action.user,
				isAuth: true
			};
		case LOGOUT:
			return {
				...state,
				user: null,
				isAuth: false
			};
		default:
			return state;
	}
}
