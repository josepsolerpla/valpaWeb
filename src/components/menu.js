import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BoxMenu from './menu/boxMenu';
import LoginMenuSVG from './menu/loginMenu';
import SliderMenu from './menu/sliderMenu';

class Menu extends React.Component {
	render() {
		// If the user is Authed
		return (
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 1400 2160"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlSpace="preserve"
				className="menu__container"
				style={{
					fillRule: 'evenodd',
					clipRule: 'evenodd',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeMiterlimit: '1.5'
				}}
			>
				<g className="menu">
					<BoxMenu />
					<SliderMenu />
					<LoginMenuSVG />
				</g>
			</svg>
		);
	}
}

Menu.contextTypes = {
	router: PropTypes.object
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
