import Redux from 'redux';

var currentVideoReducer = (state = null, { type, video }) => {
  if (type === 'CHANGE_VIDEO') {
    return video;
  }

  return state;
};

export default currentVideoReducer;
