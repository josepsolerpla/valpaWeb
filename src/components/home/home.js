import React from 'react';
import { connect } from 'react-redux';

/**
 * Home
 * 
 * Renderizara las 3 partes importantes del Home, parte superior, la
 * introduccion y las noticias
 */

class Home extends React.Component {
	// Render
	render() {
		return <main className="home" />;
	}
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
