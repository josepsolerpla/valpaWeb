import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
/**
 * Productos Component
 */

class Listing extends Component {
	render() {
		const { arrayToPrint, filterKey, classNames, onClick, classNamesItem } = this.props;

		if (!arrayToPrint) return <h1>Loading...</h1>;
		// Filtrar los productos por el Input
		const regex = new RegExp(`^(${filterKey})`, 'gi');
		const arrayFiltrado = arrayToPrint.filter((item) => item.key.match(regex));

		return (
			<section className={`listing ${classNames}`}>
				{arrayFiltrado.length > 0 ? (
					arrayFiltrado.map((item) => (
						<article
							className={`box ${classNamesItem}`}
							key={item.key}
							onClick={() => (onClick ? onClick(item) : null)}
						>
							{item.body}
						</article>
					))
				) : (
					<article>
						<h1 className="noResults">No hay resultados</h1>
					</article>
				)}
			</section>
		);
	}
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

Listing.propTypes = {
	arrayToPrint: PropTypes.array,
	filterKey: PropTypes.string,
	classNames: PropTypes.string,
	classNamesItem: PropTypes.string,
	onClick: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
