const store = require('../store')
const showMessageTemplate = require('../templates/message.handlebars')

const sendSuccessfully = function () {
  $('#message').text('Message sent succesfully')
}

const sendFailure = function (data) {
  $('#message').text('error while sending message')
}

const getMsgSuccessfully = function (data) {
  const showmessageHtml = showMessageTemplate({
    messages: data
  })
  $('#messages').html(showmessageHtml)
  $('#messages').scrollTop(50000)
}

const getMsgFailure = function (data) {
  $('#message').text('Error while getting message')
}

const displayMessages = function (message) {
  const object = {message}
  object.current_user_id = store.user._id
}

module.exports = {
  sendSuccessfully,
  sendFailure,
  getMsgSuccessfully,
  getMsgFailure,
  displayMessages
}
