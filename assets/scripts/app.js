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
  $('.main').on('submit', '#change-password', authEvents.onChangePassword)
  $('.main').on('submit', '#sign-out', authEvents.onSignOut)
  $('.main').on('click', '.selectable', authScripts.displayForm)

  // Message listeners
  $('.main').on('submit', '#send-message', msgEvents.onSend)
  $('.main').on('click', '.btn-ondelete', msgEvents.ondelete)
  $('.main').on('submit', '#update', msgEvents.onUpdate)

  // connect to socket
  const socket = io.connect('https://sei-chatroom.herokuapp.com')
  $('#send-message').submit(function (e) {
    e.preventDefault() // prevents page reloading
    const userInput = $('#socket-message').val()
    socket.emit('chat message', userInput)
  })

  socket.on('chat message', function (msg) {
    msgdisplay.getMsgSuccessfully(msg)
    // $('#messages').append($('<li>').text(msg));
  })
})
