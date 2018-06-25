import { connect } from "react-redux";
import React from "react";
import {
  updateEvent,
  deleteEvent,
  clearEventErrors,
  fetchEvent
} from "../actions/event_actions";
import moment from "moment";
import EventForm from "./event_form";

const mapStateToProps = ({ errors, entities }, ownProps) => {
  const event = entities.events[ownProps.eventId];

  if (event) {

    event.start_date = moment(event.start_date).format("YYYY-MM-DDTHH:mm");
    event.end_date = moment(event.end_date).format("YYYY-MM-DDTHH:mm");
  }

  return {
    event,
    errors,
    formType: "Update"
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    closeModal: () => ownProps.closeModal(),
    fetchEvent: event => dispatch(fetchEvent(event)),
    processForm: event => dispatch(updateEvent(event)),
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
    clearEventErrors: () => dispatch(clearEventErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);


// For multiday events you need datetime-local input and this format below
// event.start_date = moment(event.start_date).format("YYYY-MM-DDTHH:mm:SS");
// event.end_date = moment(event.end_date).format("YYYY-MM-DDTHH:mm:SS");
