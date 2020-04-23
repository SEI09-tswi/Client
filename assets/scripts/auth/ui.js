const store = require('../store')
const chatRoomTemplate = require('../templates/message.handlebars')
const sendTemplate = require('../templates/send.handlebars')
const authTemplate = require('../templates/change-password-signout.handlebars')

const signUpSuccess = function () {
  $('#message').text('signed UP succesfully')
  console.log('sign-up signUPSuccess')
}

const signUpFailure = function () {
  $('#message').text('signup is fail')
  console.log('sign-up Failures')
}

const signInSuccess = function (data) {
  $('#message').text('signed in is Success')
  store.user = data.user
  $('.main').html('')
  $('.main').html(chatRoomTemplate)
  $('.main').html(sendTemplate)
  $('#auth').html(authTemplate)
}

const signInFailure = function () {
  $('#message').text('sign in Failure')
}

const changePasswordSuccess = function () {
  $('#message').text('change Password Success')
}

const changePasswordFailure = function () {
  $('#message').text('change Password Failure')
}

module.exports = {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure
  // signOutSuccess,
  // signOutFailure,
}
