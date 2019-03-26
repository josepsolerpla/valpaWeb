import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoginMenu from '../shared/LoginMenu';

class LoginMenuSVG extends React.Component {
	render() {
		return (
			<g>
				<g transform="matrix(0.680101,0,0,2.69681,394.234,272.739)">
					<path
						d="M1248,498C1248,472.06 1164.49,451 1061.63,451L57,451L57,639L1061.63,639C1164.49,639 1248,617.94 1248,592L1248,498Z"
						style={{ fill: 'rgb(46,46,46)' }}
					/>
				</g>
				<path
					className="fondo"
					d="M1184,1644.63C1184,1588.26 1138.24,1542.5 1081.88,1542.5L705,1542.5L705,1951L1081.88,1951C1138.24,1951 1184,1905.24 1184,1848.88L1184,1644.63Z"
					style={{ fill: 'rgb(209,209,209)', filter: 'url(#dropshadow)' }}
				/>
				<foreignObject width="700" height="600" x="450" y="1500" xmlns="http://www.w3.org/2000/svg">
					<div xmlns="http://www.w3.org/1999/xhtml">
						<LoginMenu modalLogin={true} />
					</div>
				</foreignObject>
			</g>
		);
	}
}

export default connect()(LoginMenuSVG);
