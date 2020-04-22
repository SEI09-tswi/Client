const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onSend = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.onSendMessage(data)
    .then(ui.sendSuccessfully)
    .catch(ui.sendFailure)

  api.onGetMessage()
    .then(ui.getMsgSuccessfully)
    .catch(ui.getMsgFailure)
}

module.exports = {
  onSend
}
