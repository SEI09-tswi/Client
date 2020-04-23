const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const store = require('../store')
const io = require('socket.io-client')
const socket = io.connect('http://localhost:4741')

const displayMassage = function () {
  api.onGetMessage()
    .then(ui.getMsgSuccessfully)
    .catch(ui.getMsgFailure)
}

// Delete chat message
const ondelete = function (event) {
  const id = $(event.target).data('_id')
  api.removeMessage(id)
    .then(function () {
      socket.emit('chat message', 'send')
      socket.on('chat message', function (msg) {
        ui.getMsgSuccessfully(msg)
      })
    })
    .catch(function () {
      console.log('fail')
    })
  socket.emit('chat message', 'send')
  socket.on('chat message', function (msg) {
    ui.getMsgSuccessfully(msg)
  })
}

const onSend = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  data.chat.user = store.user.email
  api.onSendMessage(data)
    .then(() => {
      socket.emit('chat message', 'send')
      socket.on('chat message', function (msg) {
        ui.getMsgSuccessfully(msg)
      })
    })
    .catch(ui.sendFailure)
}

// Update chat
const onupdate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  // const data = {
  //   'chat': {
  //     'message': '22'
  //   }
  // }
  console.log(data)
  const id = $(event.target).data('_id')
  console.log(id)
  api.updateMessage(data, id)
    .then(function () {
      displayMassage()
    })
}

module.exports = {
  onSend,
  ondelete,
  onupdate,
  displayMassage
}
