import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

const VideoListContainer = connect(
  // map redux store.videoList ~> component props.videos
  (store) => {
    return {
      videos: store.videoList
    };
  },

  // map changeVideo dispatch ~> component event handler
  (dispatch) => {
    return {
      handleVideoListEntryTitleClick: (video) => {
        dispatch(changeVideo(video));
      }
    };
  }
)(VideoList);

export default VideoListContainer;
