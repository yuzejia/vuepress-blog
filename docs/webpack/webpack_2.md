---
title: wepack 2 打包css和图片
date: 2021-08-02
categories: 
 - 前端
tags:
 - webpack
---
## 接下来我们继续 打包 css 和 图片资源

我们先修改目录增加css 文件和 图片资源

src 新建css 目录 新增 style.css 文件

src 新建img 目录

我们本次修改了入口文件：
src 下新建 main.js 我们接下来将main.js 作为我们的主入口文件
修改 webpack.config.js entry参数：

```js
entry: './src/main.js', // 入口文件 要打包的文件
```

修改main.js 为：

```js
// 引入js 文件
require('./js/index.js')

// 引入 css 
require('./css/style.css')

```

## css 文件打包
接下来我们先安装 css 打包相关 loader 

**style-loader**
**css-loader**


```
npm install style-loader css-loader --save-dev
```

安装完之后 在 webpack.config.js 中配置 loader

```js
    module: {
        rules:[
            {
                test: /\.css$/i,
                use:['style-loader', 'css-loader']
            }
        ]
    },

```
index.html 文件新增
```html
    <div>
        <h1>webpack</h1>
    </div>
```

修改 style.css 内容

```css
    h1{
        color: red;
        font-size: 12px;
    }

```


**执行 npm run build**

![An image](./img/175ef97e31a47be38be8809ebf2d27d.png)
编译成功~

**浏览器运行dist文件下的index.html**
css 样成功显示！
![An image](./img/6a2ea495ac14542b741c1eff1790108.png)


## 图片资源打包

安装图片相关loader 
url-loader
file-loader
```
npm install url-loader --save-dev
```

webpack.config.js 配置
在 module rules 中新增以下配置信息：


```
     // 打包图片 用到 url-loader
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: "url-loader",
                    options: {
                        esModule: false,
                        name: "images/[name].[hash:5].[ext]",
                        limit: 1024,
                        publicpath: "../img/"
                    }
                }
            },

```