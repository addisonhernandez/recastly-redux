import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

const VideoPlayerContainer = connect(
  (store) => {
    return {
      video: store.currentVideo
    };
  }
  // TODO: do I need an event handler here?
)(VideoPlayer);

export default VideoPlayerContainer;
