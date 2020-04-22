const store = require('../store')
const showMessageTemplate = require('../templates/message.handlebars')

const sendSuccessfully = function () {
  $('#message').text('Message sent succesfully')
}

const sendFailure = function (data) {
  $('#message').text('error while sending message')
}

const getMsgSuccessfully = function (data) {
console.log('this '+data.chats[0].message.user)
console.log('this '+data.chats[data.chats.length-1].user)
  // for (let i = 0; i < data.chats.length; i++) {
  //   $('#messages').append('<li>' + data.chats[i].message + '</li>')
  // }
  // const showmessageHtml = showMessageTemplate({
  //     messages: data.chats
  //   })
  //   $('#messages').html(showmessageHtml)

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
