const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const store = require('../store')

const displayMassage= function(){
  api.onGetMessage()
    .then(ui.getMsgSuccessfully)
    .catch(ui.getMsgFailure)
}

const onSend = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  data.chat.user=  store.user.email
  api.onSendMessage(data)
    .then(ui.sendSuccessfully)
    .catch(ui.sendFailure)

displayMassage()
}

const ondelete = function(event) {

  const id = $(event.target).data('id')
  console.log('id '+id )
  api.removeMessage(id)
    .then(function() {
    console.log('delete suces')
    displayMassage()
    })
    .catch(function() {
    console.log('fail')
    })

}


const onupdate = function(event) {
const data={
"chat":{"message":"change"}
}
  const id = $(event.target).data('id')
  console.log('id '+id )
  api.updateMessage(data,id)
    .then(function() {
      console.log('updateMessage suces')
      displayMassage()
    })
  }


module.exports = {
  onSend,
  ondelete,
  onupdate
}
