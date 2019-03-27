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
			events: [],
			listOfCalendarsId: null,
			selectedCalendarId: ''
		};
		this.state.realCurrentDate = `${this.state.currentYear}-${this.state.currentMonth}-${this.state.currentDate}`;
		this.checkForEvents = this.checkForEvents.bind(this);
		this.changeSelectedCalendar = this.changeSelectedCalendar.bind(this);
	}
	componentWillMount() {
		const { currentYear, currentMonth, currentDate } = this.state;
		this.checkForEvents(currentYear, currentMonth, currentDate);
		this.getCalendarList();
	}
	getCalendarList() {
		gapi.client.calendar.calendarList.list().then((res) => {
			const calendars = res.result.items;
			if (calendars.length > 0) {
				let idS = [];
				calendars.map((calendar) => {
					idS.push({ id: calendar.id, name: calendar.summary });
				});
				this.setState({
					listOfCalendarsId: idS
				});
			}
		});
	}
	checkForEvents(year, month, date) {
		let timeMin = `${year}-${month}-${date}`;
		let timeMax = `${year}-${month}-${this.daysInMonth(month, year)}`;
		let calendarId = this.state.selectedCalendarId;

		if (calendarId) {
			gapi.client.calendar.events
				.list({
					// calendarId: '1f3l1trve27ivl6iaqn4pvc7q4@group.calendar.google.com',
					calendarId: `${calendarId}`,
					timeMin: `${timeMin}T10:00:00Z`,
					timeMax: `${timeMax}T10:00:00Z`,
					showDeleted: false,
					singleEvents: true,
					maxResults: 10,
					orderBy: 'startTime'
				})
				.then(
					(response) => {
						var events = response.result.items;
						this.setState({
							events: events
						});
					},
					(err) => {
						console.log(err);
					}
				);
		}
	}
	daysInMonth(month, year) {
		return new Date(year, month, 0).getDate();
	}
	changeSelectedCalendar(ev) {
		this.setState(
			{
				selectedCalendarId: ev.target.value
			},
			() => {
				const { currentYear, currentMonth, currentDate } = this.state;
				this.checkForEvents(currentYear, currentMonth, currentDate);
			}
		);
	}
	render() {
		const {
			events,
			currentYear,
			currentMonth,
			realCurrentDate,
			listOfCalendarsId,
			selectedCalendarId
		} = this.state;

		let daysInMonth_ = this.daysInMonth(currentMonth, currentYear);
		let daysToPrint = [];

		let day = (i, eventsOnThisDate = null) => {
			return (
				<div
					className={`day ${realCurrentDate == `${currentYear}-${currentMonth}-${i}` ? 'today' : ''}`}
					key={i}
				>
					<i>{i}</i>
					{eventsOnThisDate ? (
						eventsOnThisDate.map((event) => {
							return <p key={event.id}>{event.summary} </p>;
						})
					) : null}
				</div>
			);
		};

		Utils.times(daysInMonth_)((i) => {
			if (events.length > 0) {
				let eventsOnThisDate = events.filter((event) => {
					let dateTime = new Date(event.start.dateTime);
					let date = event.start.date
						? event.start.date
						: event.start.dateTime
							? `${dateTime.getFullYear()}-${dateTime.getMonth() + 1 < 10
									? `0${dateTime.getMonth() + 1}`
									: dateTime.getMonth() + 1}-${dateTime.getDate()}`
							: '';
					if (date == `${currentYear}-${currentMonth}-${i}`) {
						return event;
					}
				});
				if (eventsOnThisDate.length > 0) {
					daysToPrint.push(day(i, eventsOnThisDate));
				} else {
					daysToPrint.push(day(i));
				}
			} else {
				daysToPrint.push(day(i));
			}
		});

		// Render
		return (
			<section className="Calendar">
				<select className="selectCalendar" onChange={this.changeSelectedCalendar} value={selectedCalendarId}>
					{listOfCalendarsId ? (
						listOfCalendarsId.map((id) => {
							return (
								<option key={id.id} value={id.id}>
									{id.name}
								</option>
							);
						})
					) : (
						<option>You dont have any calendar</option>
					)}
				</select>
				{}
				{daysToPrint}
			</section>
		);
	}
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

CalendarView.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarView);
