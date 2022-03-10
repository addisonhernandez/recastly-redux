/**
 *
 * @param {Object[]} videos
 * @returns A redux object with a payload of videos to update the VideoList
 */
var changeVideoList = (videos) => ({
  // Return some action object to change the list of videos in VideoList.
  type: 'CHANGE_VIDEO_LIST',
  videos
});

export default changeVideoList;
