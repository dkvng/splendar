import React from "react";
import { closeModal } from "../actions/modal_actions";
import { connect } from "react-redux";
import CreateEventFormContainer from "./event_form";

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case "CreateEventForm":
      component = <CreateEventFormContainer />;
      break;
    default:
      return null;
  }
  return <section>{component}</section>;
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
