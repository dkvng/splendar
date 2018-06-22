import { connect } from "react-redux";
import React from "react";
import { createEvent, clearEventErrors } from "../actions/event_actions";
import EventForm from "./event_form";

const mapStateToProps = ({ errors }, ownProps) => {
  return {
    errors: errors,
    currentDate: ownProps.currentDate,
    selected: ownProps.selected
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    closeModal: () => ownProps.closeModal(),
    processForm: event => dispatch(createEvent(event)),
    clearEventErrors: () => dispatch(clearEventErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
