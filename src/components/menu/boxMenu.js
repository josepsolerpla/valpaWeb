import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class BoxMenu extends React.Component {
	render() {
		return (
			<g>
				<rect x="0" y="0" width="1386" height="2160" style={{ fill: 'rgb(46,46,46)' }} />
				<g transform="matrix(1.1371,0,0,0.939189,-196.895,74.1284)">
					<path
						d="M1334,246.831C1334,129.918 1255.6,35 1159.04,35L217.961,35C121.398,35 43,129.918 43,246.831L43,1895.17C43,2012.08 121.398,2107 217.961,2107L1159.04,2107C1255.6,2107 1334,2012.08 1334,1895.17L1334,246.831Z"
						style={{ fill: 'rgb(72,72,72)' }}
					/>
				</g>
			</g>
		);
	}
}

export default connect()(BoxMenu);
