import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SocialButton from './socialButtons';
import { SET_AUTH, LOGIN, LOGOUT } from '../../constants/actionTypes';
import agent from '../../agent';

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
				scope: 'https://www.googleapis.com/auth/calendar.readonly'
			})
			.then(
				() => {
					// Listen for sign-in state changes.
					gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
					// Handle the initial sign-in state.
					this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
				},
				(error) => {
					console.warn(error);
				}
			);
	}
	updateSigninStatus(isSignedIn) {
		if (isSignedIn) {
			console.log('Correct');
			this.props.setAuth(isSignedIn);
		} else {
			console.warn('ERROR on google auth');
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
		const { modalLogin, showModalLogin, isAuth, errors } = this.props;
		const { name, password } = this.state;
		if (isAuth) {
			return (
				<section className="LoginMenu">
					<div onClick={showModalLogin}>Login</div>
					<form className={modalLogin ? null : 'close'}>
						<label className="buttons">
							<button onClick={this.handleSignoutClick}>Logout</button>
						</label>
					</form>
				</section>
			);
		}
		return (
			<section className="LoginMenu">
				<div onClick={showModalLogin}>Login</div>
				<form className={modalLogin ? null : 'close'} onSubmit={this.login}>
					<label>
						User:
						<input name={'name'} value={name} onChange={this.changeInput} />
					</label>
					<label>
						Password:
						<input type="password" name={'password'} value={password} onChange={this.changeInput} />
						{errors ? <p>{errors.Email}</p> : null}
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
	setAuth: (auth) => {
		dispatch({ type: SET_AUTH, auth });
	},
	loginRequest: (name, password) => {
		dispatch({ type: LOGIN, payload: agent.Auth.login(name, password) });
	},
	logout: () => {
		dispatch({ type: LOGOUT, payload: agent.Auth.logout() });
	}
});

LoginMenu.propTypes = {
	modalLogin: PropTypes.bool,
	showModalLogin: PropTypes.func,
	setAuth: PropTypes.func,
	isAuth: PropTypes.bool,
	loginRequest: PropTypes.func,
	logout: PropTypes.func,
	errors: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginMenu);
