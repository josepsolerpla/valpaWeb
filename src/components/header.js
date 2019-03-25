import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';

import LoginMenu from './shared/LoginMenu';

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
			// hideShow: 'open',
			hideShow: '',
			// modalLogin: false
			modalLogin: true
		};
		this.handleScroll = this.handleScroll.bind(this);
		this.showModalLogin = this.showModalLogin.bind(this);
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
					document.getElementById('main').classList.add('open');
					this.setState({ hideShow: '' });
				} else {
					document.getElementById('main').classList.remove('open');
					this.setState({ hideShow: 'open' });
				}

				ticking = false;
			});

			ticking = true;
		}
	}
	closeModal() {
		if (this.state.hideShow == 'open') {
			this.setState({ hideShow: '' });
		} else {
			this.setState({ hideShow: 'open', modalLogin: false });
		}
	}
	showModalLogin() {
		if (!this.state.hideShow) {
			this.setState({
				modalLogin: !this.state.modalLogin
			});
		}
	}
	// Render
	render() {
		const { isAuth } = this.props;
		const { hideShow, modalLogin } = this.state;
		const history = this.context.router.history;
		if (!isAuth) {
			return (
				<HashRouter>
					<header className={hideShow}>
						<section className={`buttonNav`} onClick={() => this.closeModal()}>
							<div className="line" />
							<div className="line" />
							<div className="line" />
						</section>
						<section className={`navBarLinks`}>
							<Link
								to="/"
								className={'link ' + `${history.location.hash == '#/' ? 'active' : null}`}
								onClick={() => (hideShow != '' ? this.closeModal() : null)}
							>
								Inicio
							</Link>
							<Link
								to="/Calendario"
								className={'link ' + `${history.location.hash == '#/Calendario' ? 'active' : null}`}
								onClick={() => (hideShow != '' ? this.closeModal() : null)}
							>
								Calendario
							</Link>
							<Link
								to="/RSS"
								className={'link ' + `${history.location.hash == '#/RSS' ? 'active' : null}`}
								onClick={() => (hideShow != '' ? this.closeModal() : null)}
							>
								RSS
							</Link>
							<LoginMenu modalLogin={modalLogin} showModalLogin={this.showModalLogin} />
						</section>
						<ReactSVG className="logoValpa white" src="/imagenes/logoValparaiso.svg" />
					</header>
				</HashRouter>
			);
		}
		return (
			<HashRouter>
				<header className={hideShow}>
					<section className={`buttonNav`} onClick={() => this.closeModal()}>
						<div className="line" />
						<div className="line" />
						<div className="line" />
					</section>
					<section className={`navBarLinks`}>
						<Link
							to="/"
							className={'link ' + `${history.location.hash == '#/' ? 'active' : null}`}
							onClick={() => (hideShow != '' ? this.closeModal() : null)}
						>
							Inicio
						</Link>
						<Link
							to="/Calendario"
							className={'link ' + `${history.location.hash == '#/Calendario' ? 'active' : null}`}
							onClick={() => (hideShow != '' ? this.closeModal() : null)}
						>
							Calendario
						</Link>
						<Link
							to="/RSS"
							className={'link ' + `${history.location.hash == '#/RSS' ? 'active' : null}`}
							onClick={() => (hideShow != '' ? this.closeModal() : null)}
						>
							RSS
						</Link>
						<Link
							to="/Temas"
							className={'link ' + `${history.location.hash == '#/Temas' ? 'active' : null}`}
							onClick={() => (hideShow != '' ? this.closeModal() : null)}
						>
							Temas
						</Link>
					</section>
					<ReactSVG className="logoValpa white" src="/imagenes/logoValparaiso.svg" />
				</header>
			</HashRouter>
		);
	}
}

Header.contextTypes = {
	router: PropTypes.object
};
Header.propTypes = {
	isAuth: PropTypes.any
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
