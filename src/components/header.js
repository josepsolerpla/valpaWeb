import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

let lastScrollY = 0;
let ticking = false;

/**
 * Header
 * 
 * Header component in this app
 * This will contain all the links on navBar
 */

class Header extends React.Component {
	// Contrstructor
	constructor(props) {
		super(props);
		// Estado
		this.state = {
			hideShow: ''
		};
		this.handleScroll = this.handleScroll.bind(this);
	}
	// Esta funcion se acciona cuando el componente se monta
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}
	// Esta funcion se acciona cuando el componente se desmonta
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
	// Funcion para comprobar el movimiento de la pantalla en Y
	handleScroll() {
		lastScrollY = window.scrollY;
		let width = window.innerWidth;
		if (!ticking && width > 780) {
			window.requestAnimationFrame(() => {
				if (lastScrollY <= 200) {
					document.getElementById('main').classList.add('fixed');
					this.setState({ hideShow: '' });
				} else {
					document.getElementById('main').classList.remove('fixed');
					this.setState({ hideShow: 'fixed' });
				}

				ticking = false;
			});

			ticking = true;
		}
	}
	// Funcion para cambiar el estado del estado 'hideShow',
	// des esta forma veremos o no el menu
	cambiarEstado() {
		if (this.state.hideShow == 'fixed') {
			this.setState({ hideShow: '' });
			// document.querySelector('body').classList.add('blockScroll');
		} else {
			this.setState({ hideShow: 'fixed' });
			// document.querySelector('body').classList.remove('blockScroll');
		}
	}
	// Render
	render() {
		const { hideShow } = this.state;
		const history = this.context.router.history;
		return (
			<HashRouter>
				<header>
					<section className={`buttonNav ${hideShow}`} onClick={() => this.cambiarEstado()}>
						<div className="line" />
						<div className="line" />
						<div className="line" />
					</section>
					<section className={`navBarLinks ${hideShow}`}>
						<Link
							to="/"
							className={history.location.hash == '#/' ? 'active' : null}
							onClick={() => (hideShow != '' ? this.cambiarEstado() : null)}
						>
							Inicio
						</Link>
						<Link
							to="/Calendario"
							className={history.location.hash == '#/Calendario' ? 'active' : null}
							onClick={() => (hideShow != '' ? this.cambiarEstado() : null)}
						>
							Calendario
						</Link>
						<Link
							to="/RSS"
							className={history.location.hash == '#/RSS' ? 'active' : null}
							onClick={() => (hideShow != '' ? this.cambiarEstado() : null)}
						>
							RSS
						</Link>
						<Link
							to="/Temas"
							className={history.location.hash == '#/Temas' ? 'active' : null}
							onClick={() => (hideShow != '' ? this.cambiarEstado() : null)}
						>
							Temas
						</Link>
					</section>
				</header>
			</HashRouter>
		);
	}
}

Header.contextTypes = {
	router: PropTypes.object
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
