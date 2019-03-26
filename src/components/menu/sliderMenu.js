import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { HashRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SliderMenu extends React.Component {
	render() {
		const history = this.context.router.history;

		return (
			<HashRouter>
				<g className="faders">
					<Link to="/">
						<g
							className={`InicioFader ${history.location.hash == '#/' ? 'active' : ''}`}
							transform="translate(1.6078 -227.86)"
						>
							<g transform="matrix(.79849 0 0 1 6.4862 57)">
								<rect x="57" y="451" width="1191" height="188" fill="#2e2e2e" />
							</g>
							<g transform="matrix(.99395 0 0 1 .52031 -653)">
								<path d="M 998.521,1255 H 86" fill="none" stroke="#000" strokeWidth="7.02px" />
							</g>
							<g
								className="Fader"
								transform={`${history.location.hash == '#/' ? 'translate(600,0)' : ''}`}
							>
								<path
									d="m378 653.5h-49.406c-24.031-11.374-58.424-13.5-96.594-13.5s-72.563 2.126-96.594 13.5h-49.406v-103h49.442c24.113 11.335 59.564 13.5 99.058 13.5s74.945-2.165 99.058-13.5h44.442z"
									fill="#626262"
								/>
								<path
									d="m378 653.5h-49.406c-24.031-11.374-58.424-18.5-96.594-18.5s-72.563 7.126-96.594 18.5h-49.406v-103h49.442c24.113 11.335 59.564 18.5 99.058 18.5s74.945-7.165 99.058-18.5h44.442z"
									fill="#454545"
								/>
								<g transform="translate(8.7624 -659.51)">
									<text
										x="161.46967"
										y="1279.6979"
										fill="#ffffff"
										fontFamily="ArialMT, Arial, sans-serif"
										fontSize="51.654px"
									>
										Inicio
									</text>
								</g>
							</g>
							<g transform="matrix(1 0 0 1.1845 8.5 -111.05)" className="Check" filter="url(#dropshadow)">
								<path
									d="m1275 576.25c0-14.212-13.67-25.75-30.5-25.75h-133c-16.83 0-30.5 11.538-30.5 25.75v51.5c0 14.212 13.67 25.75 30.5 25.75h133c16.83 0 30.5-11.538 30.5-25.75z"
									fill="#ffccd7"
								/>
							</g>
						</g>
					</Link>
					<Link to="/Calendario">
						<g className={`CalendarioFader ${history.location.hash == '#/Calendario' ? 'active' : ''}`}>
							<g transform="matrix(0.798489,0,0,1,6.48615,57)">
								<rect x="57" y="451" width="1191" height="188" style={{ fill: 'rgb(46,46,46)' }} />
							</g>
							<g transform="matrix(0.99395,0,0,1,0.520311,-653)">
								<path
									d="M998.521,1255L86,1255"
									style={{ fill: 'none', stroke: 'black', strokeWidth: '7.02px' }}
								/>
							</g>
							<g
								id="Fader3"
								className="Fader"
								transform={`${history.location.hash == '#/Calendario' ? 'translate(600,0)' : ''}`}
							>
								<path
									d="M378,653.5L328.594,653.5C304.563,642.126 270.17,640 232,640C193.83,640 159.437,642.126 135.406,653.5L86,653.5L86,550.5L135.442,550.5C159.555,561.835 195.006,564 234.5,564C273.994,564 309.445,561.835 333.558,550.5L378,550.5L378,653.5Z"
									style={{ fill: 'rgb(98,98,98)' }}
								/>
								<path
									d="M378,653.5L328.594,653.5C304.563,642.126 270.17,635 232,635C193.83,635 159.437,642.126 135.406,653.5L86,653.5L86,550.5L135.442,550.5C159.555,561.835 195.006,569 234.5,569C273.994,569 309.445,561.835 333.558,550.5L378,550.5L378,653.5Z"
									style={{ fill: 'rgb(69,69,69)' }}
								/>
								<g transform="matrix(1,0,0,1,8.76244,-659.513)">
									<text
										x="98px"
										y="1280px"
										style={{
											fontFamily: 'ArialMT, Arial, sans-serif',
											fontSize: '51.654px',
											fill: 'white'
										}}
									>
										Calendario
									</text>
								</g>
							</g>
							<g
								className="Check"
								filter="url(#dropshadow)"
								transform="matrix(1,0,0,1.18447,8.5,-111.049)"
							>
								<path
									d="M1275,576.25C1275,562.038 1261.33,550.5 1244.5,550.5L1111.5,550.5C1094.67,550.5 1081,562.038 1081,576.25L1081,627.75C1081,641.962 1094.67,653.5 1111.5,653.5L1244.5,653.5C1261.33,653.5 1275,641.962 1275,627.75L1275,576.25Z"
									style={{ fill: 'rgb(255,204,215)' }}
								/>
							</g>
						</g>
					</Link>
					<Link to="/RSS">
						<g className={`RSSFader ${history.location.hash == '#/RSS' ? 'active' : ''}`}>
							<g transform="matrix(0.798489,0,0,1,6.48615,273)">
								<rect x="57" y="451" width="1191" height="188" style={{ fill: 'rgb(46,46,46)' }} />
							</g>
							<g transform="matrix(0.99395,0,0,1,0.520311,-437)">
								<path
									d="M998.521,1255L86,1255"
									style={{ fill: 'none', stroke: 'black', strokeWidth: '7.02px' }}
								/>
							</g>
							<g
								id="Fader2"
								className="Fader"
								transform={`matrix(1,0,0,1,0,216) ${history.location.hash == '#/RSS'
									? 'translate(600,0)'
									: ' '}`}
							>
								<path
									d="M378,653.5L328.594,653.5C304.563,642.126 270.17,640 232,640C193.83,640 159.437,642.126 135.406,653.5L86,653.5L86,550.5L135.442,550.5C159.555,561.835 195.006,564 234.5,564C273.994,564 309.445,561.835 333.558,550.5L378,550.5L378,653.5Z"
									style={{ fill: 'rgb(98,98,98)' }}
								/>
								<path
									d="M378,653.5L328.594,653.5C304.563,642.126 270.17,635 232,635C193.83,635 159.437,642.126 135.406,653.5L86,653.5L86,550.5L135.442,550.5C159.555,561.835 195.006,569 234.5,569C273.994,569 309.445,561.835 333.558,550.5L378,550.5L378,653.5Z"
									style={{ fill: 'rgb(69,69,69)' }}
								/>
								<g transform="matrix(1,0,0,1,80.2151,-659.513)">
									<text
										x="98px"
										y="1280px"
										style={{
											fontFamily: 'ArialMT, Arial, sans-serif',
											fontSize: '51.654px',
											fill: 'white'
										}}
									>
										RSS
									</text>
								</g>
							</g>
							<g
								className="Check"
								filter="url(#dropshadow)"
								transform="matrix(1,0,0,1.18447,8.5,104.951)"
							>
								<path
									d="M1275,576.25C1275,562.038 1261.33,550.5 1244.5,550.5L1111.5,550.5C1094.67,550.5 1081,562.038 1081,576.25L1081,627.75C1081,641.962 1094.67,653.5 1111.5,653.5L1244.5,653.5C1261.33,653.5 1275,641.962 1275,627.75L1275,576.25Z"
									style={{ fill: 'rgb(255,204,215)' }}
								/>
							</g>
						</g>
					</Link>
					<Link to="/Temas">
						<g className={`TemasFader ${history.location.hash == '#/Temas' ? 'active' : ''}`}>
							<g transform="matrix(0.798489,0,0,1,6.48615,491)">
								<rect x="57" y="451" width="1191" height="188" style={{ fill: 'rgb(46,46,46)' }} />
							</g>
							<g transform="matrix(0.99395,0,0,1,0.520311,-219)">
								<path
									d="M998.521,1255L86,1255"
									style={{ fill: 'none', stroke: 'black', strokeWidth: '7.02px' }}
								/>
							</g>
							<g
								id="Fader1"
								className="Fader"
								transform={`matrix(1,0,0,1,0,434) ${history.location.hash == '#/Temas'
									? 'translate(600,0)'
									: ' '}`}
							>
								<path
									d="M378,653.5L328.594,653.5C304.563,642.126 270.17,640 232,640C193.83,640 159.437,642.126 135.406,653.5L86,653.5L86,550.5L135.442,550.5C159.555,561.835 195.006,564 234.5,564C273.994,564 309.445,561.835 333.558,550.5L378,550.5L378,653.5Z"
									style={{ fill: 'rgb(98,98,98)' }}
								/>
								<path
									d="M378,653.5L328.594,653.5C304.563,642.126 270.17,635 232,635C193.83,635 159.437,642.126 135.406,653.5L86,653.5L86,550.5L135.442,550.5C159.555,561.835 195.006,569 234.5,569C273.994,569 309.445,561.835 333.558,550.5L378,550.5L378,653.5Z"
									style={{ fill: 'rgb(69,69,69)' }}
								/>
								<g transform="matrix(1,0,0,1,58.3228,-659.815)">
									<text
										x="98px"
										y="1280px"
										style={{
											fontFamily: 'ArialMT, Arial, sans-serif',
											fontSize: '51.654px',
											fill: 'white'
										}}
									>
										Temas
									</text>
								</g>
							</g>
							<g
								className="Check"
								filter="url(#dropshadow)"
								transform="matrix(1,0,0,1.18447,8.5,322.951)"
							>
								<path
									d="M1275,576.25C1275,562.038 1261.33,550.5 1244.5,550.5L1111.5,550.5C1094.67,550.5 1081,562.038 1081,576.25L1081,627.75C1081,641.962 1094.67,653.5 1111.5,653.5L1244.5,653.5C1261.33,653.5 1275,641.962 1275,627.75L1275,576.25Z"
									style={{ fill: 'rgb(255,204,215)' }}
								/>
							</g>
						</g>
					</Link>
					<Link to="/Login">
						<g className={`LoginFader ${history.location.hash == '#/Login' ? 'active' : ''}`}>
							<g transform="matrix(0.798489,0,0,1,6.48615,710)">
								<rect x="57" y="451" width="1191" height="188" style={{ fill: 'rgb(46,46,46)' }} />
							</g>
							<g transform="matrix(0.99395,0,0,1,0.520311,0)">
								<path
									d="M998.521,1255L86,1255"
									style={{ fill: 'none', stroke: 'black', strokeWidth: '7.02px' }}
								/>
							</g>
							<g
								className="Fader"
								transform={`matrix(1,0,0,1,0,653) ${history.location.hash == '#/Login'
									? 'translate(600,0)'
									: ' '}`}
							>
								<g className="object">
									<path
										d="M378,653.5L328.594,653.5C304.563,642.126 270.17,640 232,640C193.83,640 159.437,642.126 135.406,653.5L86,653.5L86,550.5L135.442,550.5C159.555,561.835 195.006,564 234.5,564C273.994,564 309.445,561.835 333.558,550.5L378,550.5L378,653.5Z"
										style={{ fill: 'rgb(98,98,98)' }}
									/>
									<path
										d="M378,653.5L328.594,653.5C304.563,642.126 270.17,635 232,635C193.83,635 159.437,642.126 135.406,653.5L86,653.5L86,550.5L135.442,550.5C159.555,561.835 195.006,569 234.5,569C273.994,569 309.445,561.835 333.558,550.5L378,550.5L378,653.5Z"
										style={{ fill: 'rgb(69,69,69)' }}
									/>
								</g>
								<g transform="matrix(1,0,0,1,70.6939,-664.948)">
									<text
										x="98px"
										y="1280px"
										style={{
											fontFamily: 'ArialMT, Arial, sans-serif',
											fontSize: '51.654px',
											fill: 'white'
										}}
									>
										Login
									</text>
								</g>
							</g>
							<g
								className="Check"
								filter="url(#dropshadow)"
								transform="matrix(1,0,0,1.18447,8.5,541.951)"
							>
								<path
									d="M1275,576.25C1275,562.038 1261.33,550.5 1244.5,550.5L1111.5,550.5C1094.67,550.5 1081,562.038 1081,576.25L1081,627.75C1081,641.962 1094.67,653.5 1111.5,653.5L1244.5,653.5C1261.33,653.5 1275,641.962 1275,627.75L1275,576.25Z"
									style={{ fill: 'rgb(255,204,215)' }}
								/>
							</g>
						</g>
					</Link>
				</g>
			</HashRouter>
		);
	}
}

SliderMenu.contextTypes = {
	router: PropTypes.object
};

export default connect()(SliderMenu);
