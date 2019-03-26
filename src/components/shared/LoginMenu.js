import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SocialButton from './socialButtons';
import { SET_AUTH, LOGIN, LOGOUT, SET_VALUE } from '../../constants/actionTypes';
import agent from '../../agent';
import { Utils } from '../../utils';

/**
 * Productos Component
 */

class LoginMenu extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			password: ''
		};

		this.initClient = this.initClient.bind(this);
		this.handleSignoutClick = this.handleSignoutClick.bind(this);
		this.updateSigninStatus = this.updateSigninStatus.bind(this);
		this.changeInput = this.changeInput.bind(this);
		this.login = this.login.bind(this);
	}
	componentWillMount() {
		gapi.load('client:auth2', this.initClient);
	}
	initClient() {
		gapi.client
			.init({
				apiKey: 'AIzaSyCx5i-GvCIDYAVIHBMHvytmbPQPaMJZ1C4',
				clientId: '583358016498-4r0ph0bk5ms93ffbdr9h5591kbej2vgq.apps.googleusercontent.com',
				discoveryDocs: [ 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest' ],
				scope: 'https://www.googleapis.com/auth/calendar.readonly profile'
			})
			.then(
				() => {
					let GoogleAuth = gapi.auth2.getAuthInstance();
					console.log('Is loged: ', GoogleAuth.isSignedIn.get());

					// Para dar permisos -->
					// GoogleUser.grant({ scope: 'profile' });

					// GoogleAuth.signOut();

					// Listen for sign-in state changes.
					GoogleAuth.isSignedIn.listen(this.updateSigninStatus);
					// Handle the initial sign-in state.
					this.updateSigninStatus(GoogleAuth.isSignedIn.get());
				},
				(err) => {
					console.warn(err);
				}
			);
	}
	updateSigninStatus(isSignedIn) {
		let GoogleAuth = gapi.auth2.getAuthInstance();
		if (isSignedIn) {
			// User _proto_ to see the data
			let GoogleUser = GoogleAuth.currentUser.get();
			// console.log('who ami: ', GoogleUser);
			// console.log('DataOfSession: ', GoogleUser.getAuthResponse());
			let googleToken = GoogleUser.getAuthResponse().id_token;
			Utils.setCookie('jwt', googleToken);
			this.props.isAuthed(googleToken);
		} else {
			console.warn('ERROR on google auth');
			this.props.setValue(false, 'authLoading');
		}
	}
	handleAuthClick() {
		gapi.auth2.getAuthInstance().signIn();
	}
	handleSignoutClick() {
		gapi.auth2.getAuthInstance().signOut();
		this.props.logout();
	}
	login(ev) {
		ev.preventDefault();
		const { name, password } = this.state;
		// console.log('user : ', this.state);
		this.props.loginRequest(name, password);
	}
	changeInput(ev) {
		this.setState({
			[ev.target.name]: ev.target.value
		});
	}
	render() {
		const { modalLogin, showModalLogin, isAuth, errors, authLoading } = this.props;
		const { name, password } = this.state;

		// If the call is beeing emited
		if (authLoading) {
			return (
				<section className="LoginMenun">
					<h1>Loading</h1>
				</section>
			);
		}

		// If the user is Authed on the app
		if (isAuth) {
			return (
				<section className="LoginMenu">
					<div onClick={showModalLogin}>Login</div>
					<form className={modalLogin ? null : 'close'}>
						<label className="buttons logout">
							<button onClick={this.handleSignoutClick}>Logout</button>
						</label>
					</form>
				</section>
			);
		}

		// If not
		return (
			<section className="LoginMenu">
				<div onClick={showModalLogin}>Login</div>
				<form className={modalLogin ? null : 'close'} onSubmit={this.login}>
					<label>
						User:
						<input className="transparent" name={'name'} value={name} onChange={this.changeInput} />
					</label>
					<label>
						Password:
						<input
							className="transparent"
							type="password"
							name={'password'}
							value={password}
							onChange={this.changeInput}
						/>
						{errors && errors.Email ? <p>{errors.Email}</p> : null}
						{errors && errors.idGoogle ? <p>{errors.idGoogle}</p> : null}
					</label>
					<label className="buttons">
						<button>Login</button>
						<SocialButton />
						{/* 
							Use this button in case you want to use base Google Api call
							
							<button onClick={this.handleAuthClick}>Login Google</button>
						*/}
					</label>
				</form>
			</section>
		);
	}
}

const mapStateToProps = (state) => ({ ...state.Auth });
const mapDispatchToProps = (dispatch) => ({
	isAuthed: (googleToken) => {
		dispatch({ type: SET_AUTH, payload: agent.Auth.isAuthed(googleToken) });
	},
	loginRequest: (name, password) => {
		dispatch({ type: LOGIN, payload: agent.Auth.login(name, password) });
	},
	logout: () => {
		dispatch({ type: LOGOUT, payload: agent.Auth.logout() });
	},
	setValue: (value, target) => {
		dispatch({ type: SET_VALUE, value, target });
	}
});

LoginMenu.propTypes = {
	modalLogin: PropTypes.bool,
	showModalLogin: PropTypes.func,
	isAuthed: PropTypes.func,
	isAuth: PropTypes.bool,
	loginRequest: PropTypes.func,
	logout: PropTypes.func,
	setValue: PropTypes.func,
	errors: PropTypes.object,
	authLoading: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginMenu);
