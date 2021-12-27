var Koa  = require("koa")

const app = new Koa()
app.use((ctx) => {
    console.log(ctx.request.url);
    ctx.body = ctx.request.url
})

app.listen(3000)
console.log("localhost 3000");