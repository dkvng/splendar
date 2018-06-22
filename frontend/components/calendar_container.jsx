import { connect } from "react-redux";
import { openModal, closeModal } from "../actions/modal_actions";
import { fetchEvents } from "../actions/event_actions";
import { clearEventErrors } from "../actions/event_actions";


import Calendar from "./calendar";

const msp = (state, ownProps) => {
  return {
    events: state.entities.events
  };
};

const mdp = dispatch => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    clearEventErrors: () => dispatch(clearEventErrors())
  };
};

export default connect(msp, mdp)(Calendar);
