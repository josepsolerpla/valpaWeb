import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BoxMenu from './menu/boxMenu';
import LoginMenuSVG from './menu/loginMenu';
import SliderMenu from './menu/sliderMenu';

class Menu extends React.Component {
	constructor() {
		super();
		this.state = {
			modal: true
		};
		this.showModal = this.showModal.bind(this);
	}
	showModal() {
		this.setState({
			modal: !this.state.modal
		});
	}
	render() {
		// If the user is Authed
		const { modal } = this.state;
		return (
			<header className={`menu__container ${modal ? '' : 'close'}`}>
				<section className={`buttonNav`} onClick={() => this.showModal()}>
					<div className="line" />
					<div className="line" />
					<div className="line" />
				</section>
				<svg
					width="100%"
					height="100%"
					viewBox="0 0 1400 2160"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlSpace="preserve"
					style={{
						fillRule: 'evenodd',
						clipRule: 'evenodd',
						strokeLinecap: 'round',
						strokeLinejoin: 'round',
						strokeMiterlimit: '1.5'
					}}
				>
					<filter id="dropshadow" height="130%">
						<feGaussianBlur in="SourceAlpha" stdDeviation="3" />
						<feOffset dx="5" dy="5" result="offsetblur" />
						<feComponentTransfer>
							<feFuncA type="linear" slope="0.5" />
						</feComponentTransfer>
						<feMerge>
							<feMergeNode />
							<feMergeNode in="SourceGraphic" />
						</feMerge>
					</filter>
					<filter id="dropshadowHover" height="130%">
						<feGaussianBlur in="SourceAlpha" stdDeviation="3" />
						<feOffset dx="10" dy="10" result="offsetblur" />
						<feComponentTransfer>
							<feFuncA type="linear" slope="0.5" />
						</feComponentTransfer>
						<feMerge>
							<feMergeNode />
							<feMergeNode in="SourceGraphic" />
						</feMerge>
					</filter>
					<g className={`menu`}>
						<BoxMenu />
						<SliderMenu />
						<LoginMenuSVG />
					</g>
				</svg>
			</header>
		);
	}
}

Menu.contextTypes = {
	router: PropTypes.object
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
