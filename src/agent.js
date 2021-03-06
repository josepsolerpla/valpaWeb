import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import { Utils } from './utils';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://yuse.ga:3000/api';

const responseBody = (res) => res.body;

let token = null;
const tokenPlugin = (req) => {
	if (token) {
		req.set('authorization', `Token ${token}`);
	}
};

const requests = {
	del: (url) => superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
	get: (url) => superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
	put: (url, body) => superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
	post: (url, body) => superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

const Auth = {
	login: (user, password) => requests.post('/users/login', { user: user, password: password }),
	logout: () => {
		Utils.deleteCookie('jwt');
		token = null;
	},
	isAuthed: (tokenGoogle = null) => {
		if (tokenGoogle) {
			return requests.post('/authed/isIn', { tokenGoogle: tokenGoogle });
		}
		if (Utils.getCookie('jwt')) {
			return requests.post('/authed/isIn', { tokenGoogle: Utils.getCookie('jwt') });
		}

		return { error: 'no_jwt' };
	}
};

export default {
	Auth,
	setToken: (_token) => {
		token = _token;
	}
};
