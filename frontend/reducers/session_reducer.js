import merge from "lodash/merge";

// import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

// DKVNG: need to hard code a user, also maybe get all events when current user fetch??

const _nullUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    // case RECEIVE_CURRENT_USER:
    //   const currentUser = action.payload ? action.payload.currentUser : null;
    //   return merge({}, { currentUser });
    default:
      return state;
  }
};

export default sessionReducer;
