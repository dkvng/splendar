import {
  RECEIVE_EVENT,
  RECEIVE_ALL_EVENTS,
  RECEIVE_EVENT_ERRORS,
  CLEAR_EVENT_ERRORS
} from "../actions/event_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT_ERRORS:
      return action.errors;
    case CLEAR_EVENT_ERRORS:
      return [];
    default:
      return state;
  }
};
