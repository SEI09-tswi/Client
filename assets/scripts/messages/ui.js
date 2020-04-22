const store = require('../store')

const sendSuccessfully = function () {
  $('#message').text('Message sent succesfully')
}

const sendFailure = function (data) {
  $('#message').text('error while sending message')
}

const getMsgSuccessfully = function (data) {
  for (let i = 0; i < data.chats.length; i++) {
    $('#messages').append('<li>' + data.chats[i].messag + '</li>')
  }
}

const getMsgFailure = function (data) {
  $('#message').text('Error while getting message')
}

module.exports = {
  sendSuccessfully,
  sendFailure,
  getMsgSuccessfully,
  getMsgFailure
}
