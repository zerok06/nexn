'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const socket_io_1 = require('socket.io')
const io = new socket_io_1.Server({
  cors: {
    origin: '*',
  },
})
let users = []
io.on('connection', socket => {
  socket.on('joinUser', req => {
    if (!req.id) {
      return
    }
    !users.some(item => item.userId === req.id) &&
      users.push({ socketId: socket.id, userId: req.id })
    console.log(users)
  })
  socket.emit('onlineUsers', users)
  socket.on('sendMessage', message => {
    /* const user_send = users.find(item => item.userId == message.senderId) */
    const user_receptor = users.find(item => item.userId == message.receptorId)
    if (user_receptor) {
      console.log(message)
      /* io.to(user_send.socketId).emit('getMessage', { ...message, role: 'SEND' }) */
      io.to(user_receptor.socketId).emit(
        'getMessage',
        Object.assign(Object.assign({}, message), { role: 'RECEPTOR' })
      )
    }
  })
  socket.on('sendNotifications', req => {
    console.log(req)
    const user_receptor = users.find(item => item.userId == req.receptorId)
    if (user_receptor) {
      socket.to(user_receptor.socketId).emit('getNotification', req)
    }
  })
  socket.on('disconnect', () => {
    users = [...users.filter(item => item.socketId !== socket.id)]
  })
})
io.listen(3001)
