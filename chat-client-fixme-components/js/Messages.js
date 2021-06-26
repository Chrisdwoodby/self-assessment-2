var Messages = {

  _data: [],

  create: function(text, username, callback = ()=>{}) {
    var message = { text, username };
    Parse.post(message, (response) => {
      _.extend(message, response);
      Messages._data.unshift(message); // add to begining of array
      callback();
      // if we are rendering when the sever has succesfuly sored the item-
      // this function is where i think a solution could be implemented.
    });
  },

  fetch: function(callback = ()=>{}) {
    Parse.getAll((messages) => {
      Messages._data = messages;
      callback();
    });
  },

  each: function(callback = ()=>{}) {
    for (var i = 0; i < Messages._data.length; i++) {
      callback(Messages._data[i]);
    }
  }

};