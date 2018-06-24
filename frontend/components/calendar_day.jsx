import React from "react";

export default class CalendarDay extends React.Component {
  constructor(props) {
    super(props);
  }

  displayEvents() {}

  render() {
    return (
      <li
        className="Calendar-date"
        onClick={e => this.props.handleEvent(this.props.date)}
      >
        <p>{this.props.date.getDate()}</p>
        <ul>{this.displayEvents()}</ul>
      </li>
    );
  }
}
