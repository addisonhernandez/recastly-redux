import Redux from 'redux';

var videoListReducer = (state = [], { type, videos }) => {
  if (type === 'CHANGE_VIDEO_LIST') {
    return videos;
  }

  return state;
};

export default videoListReducer;
