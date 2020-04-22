'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

import 'bootstrap'

// allows usage of new JS features
require('babel-polyfill')

// load manifests
// scripts
require('./assets/scripts/app.js')

// styles
require('./assets/styles/index.scss')
//
// const config = require('./assets/scripts/config.js')
// const app = require('express')()
// console.log(config.apiUrl)
// const http = app.listen(config.apiUrl + '/chats')
// const path = require('path')
// // server ??
// const io = require('socket.io')(http)
//
// const fullpath = path.join(__dirname, 'index.html')
// app.get('/', (req, res) => {
//   res.sendFile(fullpath)
// })
//
// io.on('connection', (socket) => {
//   console.log('a user connected')
//
//   socket.on('chat message', (msg) => {
//     io.emit('chat message', msg)
//   })
//
//   socket.on('disconnect', () => {
//     console.log('user disconnected')
//   })
// })
//
// http.listen(3000, () => {
//   console.log('listening on *: 3000')
// })
