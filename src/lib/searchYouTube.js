var searchYouTube = ({key, query, max = 5}, callback) => {
  // TODO: replace this with a call to the fetch api
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });

  // fetch('https://www.googleapis.com/youtube/v3/search', {
  //   method: 'GET',
  //   headers: {
  //     Authorization: key,
  //   },
  //   // TODO: more init settings here
  // })
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw Error(response.statusText);
  //     }

  //     return response.json();
  //   })
  //   .then((items) => {
  //     if (callback) {
  //       callback(items);
  //     }
  //   })
  //   .catch((error) => console.error('Fetch: uh oh.', error));
};

export default searchYouTube;
