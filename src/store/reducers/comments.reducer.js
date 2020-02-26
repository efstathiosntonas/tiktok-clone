import {SUBMIT_COMMENT} from '../actions/comments/actionTypes';

const initialState = {comment: ''};

const videoComments = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_COMMENT: {
      return {...state, comment: action.payload};
    }
    default:
      return state;
  }
};

export default videoComments;
