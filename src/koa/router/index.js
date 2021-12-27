const Koa = require("koa")
const app = new Koa()
const fs = require("fs")
async function render(page) {
    console.log("----", page);
    const path = `./view/${page}`
    return new Promise((resolve, reject) => {
        fs.readFile(path, "UTF8", function(err, data) {

            if( err ) {
                reject(err)
            } else {
                resolve(data)
            }

        });
       
    })
    
}

async function route(url) {
    
    let view = "404.html"

    switch (url) {
        case "/":
            view = "index.html"
            break;

        case "/index":
            view = "index.html"
            break;
        case "/404":
            view = "404.html"
            break;
    
        default:

            break;
    }

    let html = await render(view)
    return html
}



app.use(async (ctx) =>{
    console.log(ctx.request.url);
    const url = ctx.request.url
    let html = await route(url)

    ctx.body = html;
})

app.listen(3000)

console.log("localhost 3000");