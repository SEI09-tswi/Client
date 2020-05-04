const store = require('../store')
const chatRoomTemplate = require('../templates/message.handlebars')
const sendTemplate = require('../templates/send.handlebars')
const authTemplate = require('../templates/auth.handlebars')

const signUpSuccess = function () {
  $('#message').text('signed UP succesfully')
  $('#sign-up').closest('form').find('input[type=text], textarea').val('')
  $('#sign-up').closest('form').find('input[type=password], textarea').val('')
}

const signUpFailure = function () {
  $('#message').text('signup is fail')
  $('#sign-up').closest('form').find('input[type=text], textarea').val('')
  $('#sign-up').closest('form').find('input[type=password], textarea').val('')
//  document.getElementById('sign-up').reset()
}

const signInSuccess = function (data) {
  $('#message').text('signed in is Success')
  store.user = data.user
  $('.main').html('')
  $('.main').html(chatRoomTemplate)
  $('.main').html(sendTemplate)
  $('#sign-in').closest('form').find('input[type=text], textarea').val('')
  $('#sign-in').closest('form').find('input[type=password], textarea').val('')
}

const signInFailure = function () {
  $('#message').text('sign in Failure')
  $('#sign-in').closest('form').find('input[type=text], textarea').val('')
  $('#sign-in').closest('form').find('input[type=password], textarea').val('')
}

const changePasswordSuccess = function () {
  $('#changepassmessage').text('change Password Success')
  $('#change-password').closest('form').find('input[type=password], textarea').val('')
}

const changePasswordFailure = function () {
  $('#changepassmessage').text('change Password Failure')
  $('#change-password').closest('form').find('input[type=password], textarea').val('')
}
const signOutSuccess = function () {
  $('#message').text('Sign out Success')
  $('.main').html('')
  $('.main').html(authTemplate)
}

const signOutFailure = function () {
  $('#message').text('Sign out Failure')
}

module.exports = {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
