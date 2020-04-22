const config = require('../config')
const store = require('../store')

const onSendMessage = function (data) {
  return $.ajax({
    url: config.apiUrl + '/chats',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // data: data
  })
}

const onGetMessage = function () {
  return $.ajax({
    url: config.apiUrl + '/chats',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // data: data
  })
}

module.exports = {
  onSendMessage,
  onGetMessage

}
