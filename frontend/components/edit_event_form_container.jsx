import { connect } from "react-redux";
import React from "react";
import {
  updateEvent,
  deleteEvent,
  clearEventErrors,
  fetchEvent
} from "../actions/event_actions";
import EventForm from "./event_form";

const mapStateToProps = ({ errors, entities }, ownProps) => {
  console.log(ownProps);
  console.log(ownProps.match.params.eventId);
  return {
    event: entities.events[ownProps.match.params.eventId],
    errors: errors,
    formType: 'Update'
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
