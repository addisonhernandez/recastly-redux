/**
 *
 * @param {Object[]} videos
 * @returns A redux object with a payload of videos to update the VideoList
 */
var changeVideoList = (videos) => ({
  type: 'CHANGE_VIDEO_LIST',
  videos
});

export default changeVideoList;
