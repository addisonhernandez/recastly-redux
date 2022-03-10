/**
 *
 * @param {*} video
 * @returns A redux action object to change the currently playing video
 */
var changeVideo = (video) => ({
  type: 'CHANGE_VIDEO',
  video
});

export default changeVideo;
