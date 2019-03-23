import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
/**
 * Productos Component
 */

class LoginMenu extends Component {
	render() {
		const { modalLogin, showModalLogin } = this.props;
		return (
			<section className="LoginMenu">
				<div onClick={showModalLogin}>Login</div>
				<form className={modalLogin ? null : 'close'}>
					<label>
						User:
						<input />
					</label>
					<label>
						Password:
						<input type="password" />
					</label>
					<label className="buttons">
						<button>Login</button>
						<button>Remember Password</button>
					</label>
				</form>
			</section>
		);
	}
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

LoginMenu.propTypes = {
	modalLogin: PropTypes.bool,
	showModalLogin: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginMenu);
