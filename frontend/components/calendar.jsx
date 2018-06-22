import React from "react";
import moment from "moment";

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: new Date(),
      selected: moment().startOf("day")
    };

    this.changeMonth = this.changeMonth.bind(this);
  }

  createDays() {
    const allMonths = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let startDay = new Date(
      this.state.currentDate.getFullYear(),
      this.state.currentDate.getMonth(),
      1
    ).getDay();

    let monthDays = monthLengths[this.state.currentDate.getMonth()];

    return new Array(monthDays + startDay).fill().map((e, i) => {
      if (i < startDay) {
        return <li key={i} />;
      } else {
        return (
          <li key={i} className="Calendar-date">
            <p>{i - startDay + 1}</p>
          </li>
        );
      }
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
    const { currentDate } = this.state;

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
      </section>
    );
  }
}
