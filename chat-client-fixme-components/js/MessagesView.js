var MessagesView = {

  render: function () {
    $('#messages').html(''); // clear all messages
    Messages.each(MessagesView.renderMessage);
  },

  renderMessage: function(message) {
    var timestamp = moment(message.createdAt).format('h:mm:ss a');

    var $message = MessagesView.template({
      timestamp: timestamp,
      text: message.text,
      username: message.username
    });

    $('#messages').append($message);
  },

  template: _.template(`
      <li class="chat">
        <div class="username"><%- username %></div>
        <div><%- text %></div>
        <div class="timestamp"><%- timestamp %></div>
      </li>
    `)
};