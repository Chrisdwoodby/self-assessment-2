var Parse = {

  server: 'http://parse.shared.hackreactor.com/chatterbox/classes/messages',

  getAll: function(callback = ()=>{}) {
    $.ajax({
      type: 'GET',
      url: Parse.server,
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: (data) => {
        callback(data.results);
      },
      error: (status) => {
        console.error('chatterbox: Failed to fetch messages', status);
      }
    });
  },

  post: function(message, callback = ()=>{}) {
    $.ajax({
      type: 'POST',
      url: Parse.server,
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: (data) => {
        console.log('Success!', data);
      },
      error: (status) => {
        console.error('chatterbox: Failed to create message', status);
      }
    });
  }

};

// This will attach your set your credentials as headers for all requests sent.
$.ajaxPrefilter(function(settings, _, jqXHR) {
  jqXHR.setRequestHeader('X-Parse-Application-Id', '5ec0221ee8b439a1fc8fdfd6a638b3e6af1cb1b4');
  jqXHR.setRequestHeader('X-Parse-REST-API-Key', 'bbfaf2b05152043f1b8207ba13c600d4bf296795');
});
