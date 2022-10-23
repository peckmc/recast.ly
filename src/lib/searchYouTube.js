import { API_KEY, YOUTUBE_API_KEY } from '/src/config/config.js';
var server = 'https://app-hrsei-api.herokuapp.com/api/recastly/videos';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.ajax({
      async: false,
      url: server,
      data: {
        q: query
      },
      type: 'GET',
      success: function(data) {
        callback(data);
      },
      error: function(error) {
        console.error('react.ly: Failed to fetch messages', error);
      }
    });
};

export default searchYouTube;