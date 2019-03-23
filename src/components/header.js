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
				<header className={hideShow}>
					<section className={`buttonNav`} onClick={() => this.cambiarEstado()}>
						<div className="line" />
						<div className="line" />
						<div className="line" />
					</section>
					<section className={`navBarLinks`}>
						<Link
							to="/"
							className={'link ' + `${history.location.hash == '#/' ? 'active' : null}`}
							onClick={() => (hideShow != '' ? this.cambiarEstado() : null)}
						>
							<h3>Inicio</h3>
						</Link>
						<Link
							to="/Calendario"
							className={'link ' + `${history.location.hash == '#/Calendario' ? 'active' : null}`}
							onClick={() => (hideShow != '' ? this.cambiarEstado() : null)}
						>
							<h3>Calendario</h3>
						</Link>
						<Link
							to="/RSS"
							className={'link ' + `${history.location.hash == '#/RSS' ? 'active' : null}`}
							onClick={() => (hideShow != '' ? this.cambiarEstado() : null)}
						>
							<h3>RSS</h3>
						</Link>
						<Link
							to="/Temas"
							className={'link ' + `${history.location.hash == '#/Temas' ? 'active' : null}`}
							onClick={() => (hideShow != '' ? this.cambiarEstado() : null)}
						>
							<h3>Temas</h3>
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
