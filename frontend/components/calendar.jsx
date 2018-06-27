import React from "react";
import moment from "moment";
import CreateEventFormContainer from "./create_event_form_container.jsx";
import EditEventFormContainer from "./edit_event_form_container.jsx";
import CalendarDay from "./calendar_day.jsx";

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: moment(),
      eventForm: false,
      eventId: null,
      mode: "month"
    };

    this.changeTime = this.changeTime.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  createDays() {
    const { currentDate } = this.state;
    const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const currentYear = currentDate.format("YYYY");
    const currentMonth = currentDate.month();

    let startDay = new Date(currentYear, currentMonth, 1).getDay();

    let monthDays = monthLengths[currentDate.month()];

    return new Array(monthDays + startDay).fill().map((el, i) => {
      if (i < startDay) {
        return <li key={i} />;
      } else {
        return (
          <CalendarDay
            key={i}
            handleEvent={(date, eventForm, eventId) =>
              this.handleEvent(date, eventForm, eventId)
            }
            date={new Date(currentYear, currentMonth, i - startDay + 1)}
          />
        );
      }
    });
  }

  displayMode() {
    switch (this.state.mode) {
      case "month":
        return (
          <ul className="Calendar-grid">
            {this.dayNames()}
            {this.createDays()}
          </ul>
        );
      case "day":
        return (
          <CalendarDay
            handleEvent={(date, eventForm, eventId) =>
              this.handleEvent(date, eventForm, eventId)
            }
            date={new Date(this.state.currentDate)}
            className="CalendarDay"
          />
        );
      default:
    }
  }

  displayForm() {
    switch (this.state.eventForm) {
      case "Create":
        return (
          <CreateEventFormContainer
            closeModal={this.closeModal}
            currentDate={this.state.currentDate}
          />
        );

      case "Update":
        return (
          <EditEventFormContainer
            closeModal={this.closeModal}
            eventId={this.state.eventId}
          />
        );
      default:
        return "";
    }
  }

  handleEvent(date, eventForm, eventId) {
    this.setState({
      currentDate: moment(date),
      eventForm: eventForm
    });
    if (eventId) {
      this.setState({
        eventId
      });
    }
  }

  closeModal() {
    this.setState({
      eventForm: false
    });
  }

  dayNames() {
    return moment.weekdays().map((day, i) => {
      return <h4 key={i}>{day}</h4>;
    });
  }

  changeTime(movement) {
    const { currentDate } = this.state;
    const action = { month: currentDate.month(), day: currentDate.day() };
    currentDate.set(this.state.mode, action[this.state.mode] + movement);
    this.setState({
      currentDate
    });
  }

  changeMode() {
    switch (this.state.mode) {
      case "month":
        this.setState({ mode: "day" });
        break;
      case "day":
        this.setState({ mode: "month" });
        break;
      default:
    }
  }

  render() {
    const { currentDate, eventForm } = this.state;
    return (
      <section className="Calendar-section">
        <h1>
          <span onClick={() => this.changeTime(-1)}>&#8249; </span>
          {moment(currentDate).format("MMMM")} {currentDate.format("YYYY")}
          <span onClick={() => this.changeTime(1)}> &#8250;</span>
        </h1>

        <button
          className="Calendar-view-toggle"
          onClick={() => this.changeMode()}
        >
          {this.state.mode.toUpperCase()}
        </button>
        {this.displayMode()}

        {eventForm ? (
          <section
            className="EventForm-modal"
            onClick={() => this.closeModal()}
          >
            {this.displayForm()}
          </section>
        ) : (
          ""
        )}
      </section>
    );
  }
}
