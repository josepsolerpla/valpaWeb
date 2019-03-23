import React from 'react';
import { connect } from 'react-redux';

/**
 * Footer
 * 
 * Footer component on this app
 */

class Footer extends React.Component {
	// Render
	render() {
		return <div className="footer__contenedor" />;
	}
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
