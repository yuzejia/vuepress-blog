const Koa = require("koa")
const app = new Koa()
const Router = require('koa-router')

let home = new Router()
home.get('/', async (ctx) => {
    ctx.body = `
    <ul>
    <li><a href="/page/index">/page/index</a></li>
    <li><a href="/page/404">/page/404</a></li>
  </ul>
    `
})


// 子路由
let page = new Router()

page.get("/404", async ( ctx ) => {
    ctx.body = "404 page!"
}).get("/index", async (ctx) => {
    ctx.body = "我是index 页面"
})

let router = new Router()

router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), home.allowedMethods())
app.use(router.routes()).use(router.allowedMethods())
app.use((ctx) => {

})
app.listen("3000")

console.log('服务启动：localhost 3000');