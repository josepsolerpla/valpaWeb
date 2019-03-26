import { SET_VALUE, SET_AUTH, LOGIN, LOGOUT, VALIDATE_TOKEN, ASYNC_START, ASYNC_END } from '../constants/actionTypes';

const initialState = {
	isAuth: false,
	authLoading: true
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
				isAuth: action.error ? false : true,
				errors: action.payload.errors ? action.payload.errors : null,
				id: action.payload.id ? action.payload.id : null
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
		case ASYNC_START:
			if (action.subtype == SET_AUTH) {
				return {
					...state,
					authLoading: true
				};
			}
			return {
				...state
			};
		case ASYNC_END:
			return {
				...state,
				authLoading: false
			};
		case SET_VALUE:
			return {
				...state,
				[action.target]: action.value
			};
		default:
			return state;
	}
}
