import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CalendarView from './calendarView';

class CalendarComponent extends React.Component {
	// Render
	render() {
		const { isAuth } = this.props;
		if (isAuth) {
			return <CalendarView />;
		}
		return <section className="Calendar" />;
	}
}

const mapStateToProps = (state) => ({ ...state.Auth });
const mapDispatchToProps = (dispatch) => ({});

CalendarComponent.propTypes = {
	isAuth: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarComponent);
