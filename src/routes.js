//Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';
//Components
import Home from './components/home/home';
import CalendarComponent from './components/calendar/calendar';

class AppRoutes extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" render={() => <Home />} />
				<Route exact path="/Calendario" render={() => <CalendarComponent />} />
			</Switch>
		);
	}
}

export default AppRoutes;
