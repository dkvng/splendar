import { connect } from "react-redux";
import React from "react";
import { createEvent, clearEventErrors } from "../actions/event_actions";
import EventForm from "./event_form";
import moment from "moment";

const mapStateToProps = ({ errors }, ownProps) => {
  const date =
    moment(ownProps.selected).format("YYYY-MM-DD") +
    moment(ownProps.currentDate).format("THH:mm");
  return {
    event: {
      title: "",
      description: "",
      start_date: date,
      end_date: moment(date)
        .add(30, "minutes")
        .format("YYYY-MM-DDTHH:mm")
    },
    errors: errors,
    formType: "Create"
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
