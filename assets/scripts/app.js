'use strict'
const authEvents = require('./auth/event')
//const msgEvents = require('./messages/event')
const io = require('socket.io-client')
const authscripts = require('./js/authscripts')
$(() => {
  // Auth listeners
  console.log('in app')
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('.selectable').on('click', authscripts.displayForm)
  // $('#change-password').on('submit', authEvents.onChangePassword)
  // $('#sign-out').on('click', authEvents.onSignOut)

  // Listen for chat room events
  // $('#send-message').on('submit', msgEvents.onSend)
  // $('#messages').on('click','#btn-ondelete', msgEvents.ondelete)
  // $('#messages').on('click','#btn-onupdate', msgEvents.onupdate)

  // Connect to socket
  const socket = io.connect('http://localhost:4741')
  $('#send-message').submit(function (e) {
    console.log('inside 33')
    e.preventDefault()
    const userInput = $('#send-message2').val()
    socket.emit('chat message', userInput)
  })

  socket.on('chat message', function (msg) {
    $('#messages').append($('<li>').text(msg))
  })
})
