var changeVideo = (video) => ({
  // Return some action object to change the currently playing video.
  type: 'CHANGE_VIDEO',
  video
});

export default changeVideo;
