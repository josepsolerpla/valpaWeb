import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CalendarView from './calendarView';

class CalendarComponent extends React.Component {
	// Render
	render() {
		const { isAuthed } = this.props;
		if (isAuthed) {
			return <CalendarView />;
		}
		return <section className="Calendar" />;
	}
}

const mapStateToProps = (state) => ({ ...state.Auth });
const mapDispatchToProps = (dispatch) => ({});

CalendarComponent.propTypes = {
	isAuthed: PropTypes.any
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarComponent);
