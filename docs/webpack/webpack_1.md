---
title: wepack搭建
date: 2021-08-02
categories: 
 - 前端
tags:
 - webpack
---
## 初始化 package.json
```cmd
npm init -y

``` 
![An image](./img/b9d7a8eb34e6267a2f0e1a09ff1699c.png)


## 安装 webpack 依赖
```
npm install  webpack webpack-cli --save-dev
```

![An image](./img/c36f9b6116af2736cb16c2fb1e3fa29.png)


### webpack-y 目录
![An image](./img/4977515e65bbc49406a4723ecac817e.png)


## 打包js文件
### 修改了目录结构

+ 我们新建src目录,同时在src 目录下新建 index.html 文件
+ 然后在 src中新建 js目录同时新建 index.js 

#### 目录结构
![An image](./img/efdd0e5eaf74d1188cddbf2fe6c9a17.png)

#### 修改index.js内容

```javaScript
const init  = ()=> {
    console.log(' webpack init ----');
}

init()
```


## webpack.config.js 配置
新建webpack.config.js 配置文件 配置一下内容 （稍后详细说明）

```javaScript
const path  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  /**
　　* 打包模式，不配置会警告，但底层还是会去配置默认的，就是production
　　* production: 压缩模式，被压缩的代码
　　* development: 开发模式，不压缩的代码
　　*
　　*/
　　mode: 'development',

    entry: './src/js/index.js', // 入口文件 要打包的文件
    output: {
        filename: 'main.js',  // 打包后的文件名
        path: path.resolve(__dirname, 'dist') // 输出目录
    },

    plugins: [

        // 打包html 模板
        new HtmlWebpackPlugin({

            /* 打包时 html 的 title (注意：仅设置这里输出的html 并不会发生改变， 
             *需要在html  模板中 使用 <title> <%= htmlWebpackPlugin.options.title %> </title>)
            */ 
            title:'webpack 打包',    
                   
            filename: 'index.html',        // 输出文件
            template: './src/index.html'   // 源模板文件 
        })
    ],

}
```

修改 package.js 文件中的 script 增加

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"  // 新增 打包命令
  },
```
## 执行打包命令 

### 在命令行输入 **npm run build**

![An image](./img/60022e3bb866feaa979b84b799cbade.png)
 
### webpack 已经把文件给打包完了 我们去dist 目录看下

 ![An image](./img/333b255acf644799e9bf1e055ee7f06.png)

 这时候我们通过浏览器运行 index.html。在控制台就能看到index.js 中的输出

 ![An image](./img/98917588f0a4fa3e1e27621a0536ffa.png)

 最基本的js 打包已经实现了~