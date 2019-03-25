import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * Productos Component
 */

class CalendarView extends Component {
	constructor() {
		super();
		this.state = {
			events: []
		};
		this.listUpcomingEvents = this.listUpcomingEvents.bind(this);
	}
	componentWillMount() {
		this.listUpcomingEvents();
	}
	listUpcomingEvents() {
		gapi.client.calendar.events
			.list({
				calendarId: 'primary',
				timeMin: new Date().toISOString(),
				showDeleted: false,
				singleEvents: true,
				maxResults: 10,
				orderBy: 'startTime'
			})
			.then((response) => {
				var events = response.result.items;
				this.setState({
					events: events
				});
			});
	}

	render() {
		const { events } = this.state;
		const eventsPrint = events.map((event) => {
			return <h1 key={event.id}>{event.summary}</h1>;
		});
		return <section className="Calendar">{eventsPrint}</section>;
	}
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

CalendarView.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarView);
