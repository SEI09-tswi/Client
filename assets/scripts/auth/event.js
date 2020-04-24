
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require ('./api')
const io = require('socket.io-client')
const messagesui = require('../messages/ui')
const messagesevents = require('../messages/event')
let socket

const onSignUp = function (event) {
    console.log('inevents for signup')
  event.preventDefault()
  const data = getFormFields(event.target)

  api.signUp(data)
  .then(ui.signUpSuccess)
  .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  console.log('inevents for signin')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
  .then(ui.signInSuccess)
  .then (function () {
    socket = io.connect('https://sei-chatroom.herokuapp.com')
    socket.on('chat message', messagesui.displayMessages)
  })
  .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  console.log('events')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
.then(ui.changePasswordSuccess)
.catch(ui.changePasswordFailure)
}



const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
  .then(ui.signOutSuccess)
 .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
onChangePassword,
onSignOut
}
