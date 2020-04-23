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

const updateMessage= function (data,id) {
  return $.ajax({
    url: config.apiUrl + '/chats/'+id,
    method: 'PATCH',
    headers:{
      Authorization:'Token token='+store.user.token
    },
    data
  })
}

const removeMessage = function (id) {
  return $.ajax({
    url: config.apiUrl + '/chats/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  onSendMessage,
  onGetMessage,
  updateMessage,
  removeMessage


}
