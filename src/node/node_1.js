// 创建第一个应用
const http = require("http");

http.createServer((request, response) => {
response.writeHead(200, {'content-type': 'text/plain'})

response.end('hello world\n')
}).listen(8000)

console.log('8000 success~~');
const request  = require('request') 
const fs = require('fs')
request('http://www.cskj.sjedu.cn/data/jxky/jxyj/detail_699457.data?r=0.9813388453803804?random=102725934472305884', function(err,data, body) {
    console.log( JSON.parse(body));
   const writeStream = fs.createWriteStream('./input.json')
   writeStream.write(body, 'UTF8')
   writeStream.end()
 
})