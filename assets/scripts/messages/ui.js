const store = require('../store')
const showMessageTemplate = require('../templates/message.handlebars')


const sendSuccessfully = function () {
  $('#messageforsend').text('Message sent succesfully')
  document.getElementById('send-message').reset()
  $('#send-message').closest('form').find('input[type=text], textarea').val('')
}

const sendFailure = function (data) {
  $('#send-message').closest('form').find('input[type=text], textarea').val('')
  $('#messageforsend').text('error while sending message')
}

const getMsgSuccessfully = function (data) {
const userArray = data

// console.log('in RSVP array', rsvpArray)
// loop through the array of hangs
userArray.forEach(data => {
  // log hang.owner and sotre.user.id to make sure these are the right values to compare
    if (data.user === store.user.email) {
      // if the current user owns it then add currentUserOwns true
      data.currentUserOwns = true
    } else {
    // else add currentUserOwns false
      data.currentUserOwns = false
    }
})

// *********************
const showmessageHtml = showMessageTemplate({
  messages: data
})
$('#messages').html(showmessageHtml)
$('#messages').scrollTop(50000)
  // const showmessageHtml = showMessageTemplate({
  //   messages: data
  // })
  // $('#messages').html(showmessageHtml)
  // $('#messages').scrollTop(50000)
}

const getMsgFailure = function (data) {
  $('#messageforsend').text('Error while getting message')
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
