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
			currentMonth: new Date().getMonth() + 1 < 10 ? `0${new Date().getMonth() + 1}` : new Date().getMonth() + 1,
			currentDate: new Date().getDate(),
			events: []
		};
		this.state.realCurrentDate = `${this.state.currentYear}-${this.state.currentMonth}-${this.state.currentDate}`;
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
				if (events) {
					this.setState({
						events: events
					});
				}
			});
	}
	daysInMonth(month, year) {
		return new Date(year, month, 0).getDate();
	}

	render() {
		const { events, currentYear, currentMonth, currentDate, realCurrentDate } = this.state;

		let daysInMonth_ = this.daysInMonth(currentMonth, currentYear);
		let daysToPrint = [];
		console.log(realCurrentDate);
		Utils.times(daysInMonth_)((i) =>
			events.map((event) => {
				if (event.start.date == `${currentYear}-${currentMonth}-${i}`) {
					daysToPrint.push(
						<div
							className={`day ${realCurrentDate == `${currentYear}-${currentMonth}-${i}` ? 'today' : ''}`}
							key={i}
						>
							<i>{i}</i>
							<p>{event.summary}</p>
						</div>
					);
				} else {
					daysToPrint.push(
						<div
							className={`day ${realCurrentDate == `${currentYear}-${currentMonth}-${i}` ? 'today' : ''}`}
							key={i}
						>
							<i>{i}</i>
						</div>
					);
				}
			})
		);

		events.map((event) => {
			console.log(event.start.date);
			console.log(event);
		});

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
