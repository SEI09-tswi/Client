const store = require('../store')
const showMessageTemplate = require('../templates/message.handlebars')

const sendSuccessfully = function () {
  $('#message').text('Message sent succesfully')
}

const sendFailure = function (data) {
  $('#message').text('error while sending message')
}

const getMsgSuccessfully = function (data) {
  console.log('data ')
  console.log(data)
  console.log('user')
  console.log(data.message)

  const showmessageHtml = showMessageTemplate({
      messages: data
    })
    $('#messages').html(showmessageHtml)
  $('#messages').scrollTop(50000)
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
