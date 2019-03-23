//Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';
//Components
import Home from './components/home/home';

class AppRoutes extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" render={() => <Home />} />
			</Switch>
		);
	}
}

export default AppRoutes;
