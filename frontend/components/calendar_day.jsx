import React from "react";
import { connect } from "react-redux";
import moment from "moment";

class CalendarDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.date,
      events: this.props.events
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.date !== prevProps.date) {
      this.setState({
        date: this.props.date
      });
    }
  }

  displayEvents() {
    return this.props.events.map((event, i) => {
      if (
        moment(event.start_date).format("MMM Do YY") ===
        moment(this.state.date).format("MMM Do YY")
      ) {
        return (
          <li key={i}>
            <h5>
              {moment(event.start_date).format("h:mm a")}
              <span>{event.title}</span>
            </h5>
          </li>
        );
      }
    });
  }

  render() {
    const events = this.displayEvents();

    return (
      <li
        className="Calendar-date"
        onClick={e => this.props.handleEvent(this.state.date)}
      >
        <p>{this.state.date.getDate()}</p>
        <ul>{Object.values(this.props.events).length > 0 ? events : ""}</ul>
      </li>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: Object.assign([], state.entities.events)
  };
};

export default connect(mapStateToProps, null)(CalendarDay);
