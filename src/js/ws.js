var express = require('express');
var http = require('http');
var WebSocket = require('./ws');
var app = express();
var server = http.createServer(app);
var wss = new WebSocket.Server({server});

wss.on('connection', function connection(ws) {
    console.log('连接成功！')
    ws.on('message', function incoming(data) {
      wss.clients.forEach(function each(client) {
        client.send(data);
      });
    });
  });

  server.listen(3000, function listening() {
    console.log('服务器启动成功！');
  }); 