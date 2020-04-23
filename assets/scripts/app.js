'use strict'
const authEvents = require('./auth/event')
const msgEvents = require('./messages/event')
const io = require('socket.io-client')
const msgdisplay = require('./messages/ui')
const authScripts = require('./js/authscripts')

$(() => {
  // Auth listeners

  $('.main').on('submit', '#sign-up', authEvents.onSignUp)
  $('.main').on('submit', '#sign-in', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  
  // Message listeners
  $('.main').on('click', '.selectable', authScripts.displayForm)
  $('#send-message').on('submit', msgEvents.onSend)
  $('#messages').on('click','.btn-ondelete', msgEvents.ondelete)
  $('#messages').on('click','.btn-onupdate', msgEvents.onupdate)

  //connect to socket
  const socket = io.connect('http://localhost:4741')
  $('#send-message').submit(function(e) {
  //  console.log("inside 33")
    e.preventDefault(); // prevents page reloading
    const userInput = $('#send-message2').val()
    socket.emit('chat message', userInput);
  });

  socket.on('chat message', function(msg){

  msgdisplay.getMsgSuccessfully(msg)
   //$('#messages').append($('<li>').text(msg));
  });


  socket.on('chat message', function (msg) {
    $('#messages').append($('<li>').text(msg))
  })
})
