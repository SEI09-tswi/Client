const store = require('../store')


const signUpSuccess = function(){
$('#message').text('signed in succesfully')

}

const signUpFailure = function(){
$('#message').text('signed in fail')
}

const signInSuccess = function(data){
$('#message').text('signed in signInSucces')

store.user=data.user
console.log("user  "+data.user)
}

const signInFailure = function(){
$('#message').text('signed signInFailure')
}

const changePasswordSuccess = function(){
$('#message').text('change Password Success')
}

const changePasswordFailure = function(){
$('#message').text('change Password Failure')
}

module.exports = {
signUpFailure,
signUpSuccess,
signInSuccess,
signInFailure,
changePasswordSuccess,
changePasswordFailure,
//
// signOutSuccess,
// signOutFailure,
}
