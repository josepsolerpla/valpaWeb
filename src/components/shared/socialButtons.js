import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import googleApi from '../../apiGoogleconfig.json';
import { Utils } from '../../utils';

const mapDispatchToProps = (dispatch) => ({});
const mapStateToProps = (state) => ({});

class SocialButton extends Component {
	constructor() {
		super();
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(res) {}
	render() {
		const { button } = this.props;

		switch (button) {
			case 'SocialLoginGoogle':
				return <SocialLoginGoogle response={this.onSubmit} />;
			default:
				return <SocialLoginGoogle response={this.onSubmit} />;
		}
	}
}
SocialButton.propTypes = {
	button: PropTypes.string
};

const SocialLoginGoogle = (props) => {
	return (
		<GoogleLogin
			clientId={googleApi.clientId}
			buttonText="Google"
			onSuccess={props.response}
			onFailure={props.response}
		/>
	);
};
SocialLoginGoogle.propTypes = {
	response: PropTypes.any
};

export default connect(mapStateToProps, mapDispatchToProps)(SocialButton);
