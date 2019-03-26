import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Utils } from '../../utils';

/**
 * Productos Component
 */

class CalendarView extends Component {
	constructor() {
		super();
		this.state = {
			currentYear: new Date().getFullYear(),
			currentMonth: new Date().getMonth() + 1,
			currentDate: new Date().getDate(),
			events: []
		};
		this.listUpcomingEvents = this.listUpcomingEvents.bind(this);
	}
	componentWillMount() {
		const { currentYear, currentMonth, currentDate } = this.state;
		this.listUpcomingEvents(currentYear, currentMonth, currentDate);
	}
	listUpcomingEvents(year, month, date) {
		let timeMin = `${year}-${month}-${date}`;
		let timeMax = `${year}-${month}-${this.daysInMonth(month, year)}`;
		gapi.client.calendar.events
			.list({
				calendarId: '1f3l1trve27ivl6iaqn4pvc7q4@group.calendar.google.com',
				timeMin: `${timeMin}T10:00:00Z`,
				timeMax: `${timeMax}T10:00:00Z`,
				showDeleted: false,
				singleEvents: true,
				maxResults: 10,
				orderBy: 'startTime'
			})
			.then((response) => {
				var events = response.result.items;
				console.log(response);
				this.setState({
					events: events
				});
			});
	}
	daysInMonth(month, year) {
		return new Date(year, month, 0).getDate();
	}

	render() {
		const { events, currentYear, currentMonth, currentDate } = this.state;

		let daysInMonth_ = this.daysInMonth(currentMonth, currentYear);
		let daysToPrint = [];
		Utils.times(daysInMonth_)((i) =>
			daysToPrint.push(
				<div className="day" key={i}>
					<i>{i}</i>
				</div>
			)
		);

		const eventsPrint = events.map((event) => {
			return <h1 key={event.id}>{event.summary}</h1>;
		});
		return <section className="Calendar">{daysToPrint}</section>;
	}
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

CalendarView.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarView);
