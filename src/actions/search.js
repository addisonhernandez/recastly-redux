import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (query) => {

  const key = YOUTUBE_API_KEY;

  return (dispatch) => searchYouTube({ key, query }, (results) => {
    // dispatch actions to update video list and select the first one
    dispatch(changeVideoList(results));
    dispatch(changeVideo(results[0]));
  });

};

export default handleVideoSearch;
