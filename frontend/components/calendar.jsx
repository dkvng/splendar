import React from "react";
import moment from "moment";
import CreateEventFormContainer from "./create_event_form_container.jsx";

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: new Date(),
      selected: moment().startOf("day"),
      eventForm: false
    };

    this.changeMonth = this.changeMonth.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  createDays() {
    const { currentDate } = this.state;
    const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    let startDay = new Date(currentYear, currentMonth, 1).getDay();

    let monthDays = monthLengths[currentDate.getMonth()];

    return new Array(monthDays + startDay).fill().map((e, i) => {
      if (i < startDay) {
        return <li key={i} />;
      } else {
        return (
          <li
            key={i}
            className="Calendar-date"
            onClick={e => this.handleEvent(e)}
            date={new Date(currentYear, currentMonth, i - startDay + 1)}
          >
            <p>{i - startDay + 1}</p>
          </li>
        );
      }
    });
  }

  handleEvent(e) {
    this.setState({
      selected: e.currentTarget.getAttribute("date"),
      eventForm: true
    });
  }

  closeModal() {
    this.setState({
      eventForm: false
    });
  }

  dayNames() {
    const allDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    return allDays.map((day, i) => {
      return <h4 key={i}>{day}</h4>;
    });
  }

  changeMonth(movement) {
    const { currentDate } = this.state;
    currentDate.setMonth(currentDate.getMonth() + movement);
    this.setState({
      currentDate
    });
  }

  render() {
    const { currentDate, eventForm, selected } = this.state;

    return (
      <section className="Calendar-section">
        <h1>
          <span onClick={() => this.changeMonth(-1)}>&#8249; </span>
          {moment(currentDate).format("MMMM")} {currentDate.getFullYear()}
          <span onClick={() => this.changeMonth(1)}> &#8250;</span>
        </h1>

        <ul className="Calendar-grid">
          {this.dayNames()}
          {this.createDays()}
        </ul>
        {eventForm ? (
          <section
            className="EventForm-modal"
            onClick={() => this.closeModal()}
          >
            <CreateEventFormContainer
              selected={selected}
              closeModal={this.closeModal}
            />
          </section>
        ) : (
          ""
        )}
      </section>
    );
  }
}
