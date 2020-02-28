import {SET_ACTIVE_VIDEO, SUBMIT_COMMENT} from './actionTypes';

export const submitComment = (activeVideo, text) => {
  return {
    type: SUBMIT_COMMENT,
    activeVideo,
    text,
  };
};

export const setActiveVideo = activeVideo => {
  return {
    type: SET_ACTIVE_VIDEO,
    activeVideo,
  };
};
