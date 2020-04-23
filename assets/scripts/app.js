'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/event')
const msgEvents = require('./messages/event')
const io = require('socket.io-client')

$(() => {
   // connect to socket
  const socket = io.connect('http://localhost:4741')
  $('#send-message').submit(function(e) {
    console.log("inside 33")
      e.preventDefault(); // prevents page reloading
      const userInput = $('#send-message2').val()
      socket.emit('chat message', userInput);
  });

  socket.on('chat message', function(msg){
      $('#messages').append($('<li>').text(msg));
    });
})



$(() => {
  // your JS code goes here
 $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
//   $('#change-password').on('submit', authEvents.onChangePassword)
//   $('#sign-out').on('click', authEvents.onSignOut)
// $('#send-message').on('submit', msgEvents.onSend)
//   $('#messages').on('click','#btn-ondelete', msgEvents.ondelete)
// $('#messages').on('click','#btn-onupdate', msgEvents.onupdate)


})
