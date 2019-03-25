import { SET_AUTH, LOGIN, LOGOUT } from '../constants/actionTypes';

const initialState = {
	isAuthed: false
};

export default function Auth(state = initialState, action) {
	switch (action.type) {
		case SET_AUTH:
			return {
				...state,
				isAuthed: action.auth
			};
		case LOGIN:
			if (action.error) {
				return {
					...state,
					errors: action.payload.errors,
					isAuthed: false
				};
			}
			return {
				...state,
				user: action.user,
				isAuthed: true
			};
		case LOGOUT:
			return {
				...state,
				user: null,
				isAuthed: false
			};
		default:
			return state;
	}
}
