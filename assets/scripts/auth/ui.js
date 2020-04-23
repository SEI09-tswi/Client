const store = require('../store')

const hide=function(){

    $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').hide()
}


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
  //console.log('user  ' + data)

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
  //
  // signOutSuccess,
  // signOutFailure,
}
