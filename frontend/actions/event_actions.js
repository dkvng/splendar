import * as APIUtil from "../util/event_api_util";

export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";

export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";
export const CLEAR_EVENT_ERRORS = "CLEAR_EVENT_ERRORS";

export const receiveALLEvents = events => ({
  type: RECEIVE_ALL_EVENTS,
  events
});

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

const removeEvent = eventId => ({
  type: REMOVE_EVENT,
  eventId
});

export const receiveErrors = errors => ({
  type: RECEIVE_EVENT_ERRORS,
  errors
});

export const clearEventErrors = errors => ({
  type: CLEAR_EVENT_ERRORS
});

export const fetchEvents = () => dispatch => {
  return APIUtil.fetchEvents().then(
    events => dispatch(receiveALLEvents(events)),
    err => dispatch(receiveErrors(err.reponseJSON))
  );
};

export const fetchEvent = id => dispatch => {
  return APIUtil.fetchEvent(id).then(
    event => dispatch(receiveEvent(event)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const createEvent = event => dispatch => {
  return APIUtil.createEvent(event).then(
    payload => dispatch(receiveEvent(payload.event)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const updateEvent = event => dispatch => {
  return APIUtil.updateEvent(event).then(dispatch(receiveEvent(event)), err =>
    dispatch(receiveErrors(err.responseJSON))
  );
};

export const deleteEvent = eventId => dispatch => {
  debugger
  return APIUtil.deleteEvent(eventId).then(event =>
    dispatch(removeEvent(eventId))
  );
};
