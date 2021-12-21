// 创建第一个应用
const http = require("http");

http.createServer((request, response) => {
response.writeHead(200, {'content-type': 'text/plain'})

response.end('hello world\n')
}).listen(8000)

console.log('8000 success~~');