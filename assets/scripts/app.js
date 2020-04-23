'use strict'
const authEvents = require('./auth/event')
const msgEvents = require('./messages/event')
const io = require('socket.io-client')
const msgdisplay = require('./messages/ui')
const authScripts = require('./js/authscripts')

$(() => {
  // Auth listeners
  // $('#sign-up').on('click', authEvents.onSignUp)
  // $('#sign-in').on('click', authEvents.onSignIn)
  $('.main').on('submit', '#sign-up', authEvents.onSignUp)
  $('.main').on('submit', '#sign-in', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('.main').on('click', '.selectable', authScripts.displayForm)

  // Message listeners
  $('.main').on('submit', '#send-message', msgEvents.onSend)
  $('.main').on('click', '.btn-ondelete', msgEvents.ondelete)
  $('.main').on('submit', '#update', msgEvents.onUpdate)

  // connect to socket
  const socket = io.connect('http://localhost:4741')
  $('#send-message').submit(function (e) {
    e.preventDefault() // prevents page reloading
    const userInput = $('#send-message2').val()
    socket.emit('chat message', userInput)
  })

  socket.on('chat message', function (msg) {
    msgdisplay.getMsgSuccessfully(msg)
    // $('#messages').append($('<li>').text(msg));
  })
})
