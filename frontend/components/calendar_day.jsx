import React from "react";
import { connect } from "react-redux";
import moment from "moment";

class CalendarDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.date
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.date !== prevProps.date) {
      this.setState({
        date: this.props.date
      });
    }
  }

  handleEvent(e) {
    const eventId = Number(e.currentTarget.getAttribute("eventId"));
    e.stopPropagation();
    this.props.handleEvent(this.state.date, "Update", eventId);
  }

  displayEvents() {
    return this.props.events.map((event, i) => {
      if (
        // double check to make sure
        moment(event.start_date).format("MMM Do YY") ===
        moment(this.state.date).format("MMM Do YY")
      ) {
        return (
          <li key={i} eventid={event.id} onClick={e => this.handleEvent(e)}>
            <h5>
              <div className="circle" />{" "}
              {moment(event.start_date)
                .utcOffset("+00:00")
                .format("h:mm a")}{" "}
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
        onClick={() => this.props.handleEvent(this.state.date, "Create")}
      >
        <p>{this.state.date.getDate()}</p>
        <ul>{Object.values(this.props.events).length > 0 ? events : ""}</ul>
      </li>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const events = Object.values(state.entities.events)
    .filter(event => {
      return moment(event.start_date).isSame(ownProps.date, "day");
    })
    .sort((a, b) => moment(a.start_date) - moment(b.start_date));

  return {
    events
  };
};

export default connect(mapStateToProps, null)(CalendarDay);
