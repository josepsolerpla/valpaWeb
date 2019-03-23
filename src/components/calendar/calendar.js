import React from 'react';
import { connect } from 'react-redux';
import ReactSVG from 'react-svg';

class Calendar extends React.Component {
	// Render
	render() {
		return (
			<main className="Calendar">
				<ReactSVG className="logoValpa white" src="/imagenes/logoValparaiso.svg" />
				<h1 className="comming">Página en construcción</h1>
			</main>
		);
	}
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
