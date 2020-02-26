import {SUBMIT_COMMENT} from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const submitComment = payload => {
  return {
    type: SUBMIT_COMMENT,
    payload,
  };
};
