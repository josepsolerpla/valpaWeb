import React from 'react';
import { connect } from 'react-redux';
import ReactSVG from 'react-svg';

/**
 * Home
 * 
 * Renderizara las 3 partes importantes del Home, parte superior, la
 * introduccion y las noticias
 */

class Home extends React.Component {
	// Render
	render() {
		return (
			<main className="home">
				<ReactSVG className="logoValpa white" src="/imagenes/logoValparaiso.svg" />
				<h1 className="comming">Página en construcción</h1>
			</main>
		);
	}
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
