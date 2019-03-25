import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://127.0.0.1:3000/api';

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
	login: (user, password) => requests.post('/users/login', { user: user, password: password })
};

export default {
	Auth,
	setToken: (_token) => {
		token = _token;
	}
};
