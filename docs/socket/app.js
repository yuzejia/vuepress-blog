// 使用 express 框架
var app = require('express')();
var express = require("express");
var server = require('http').Server(app);
// 引入 socket.io
var io = require('socket.io')(server);
// 监听 80 端口
server.listen(80);
// 开启静态资源服务
app.use(express.static("./static"));
// io 各种事件
io.on('connection', function (socket) {
  console.log('websocket has connected')
  socket.emit('message', { hello: '欢迎链接' });
  socket.on('my other event', function (data) {
    console.log(data);
    socket.emit('message', { hello: '发送成功' });
  });
  socket.on('say', function (data) {
    console.log(data);
    if (data.my === '走，一起吃饭吧') {
      io.sockets.emit('eating', { hello: '果断走起呀！' });
      return
    }
    io.sockets.emit('news', { hello: data.my });
  });
});