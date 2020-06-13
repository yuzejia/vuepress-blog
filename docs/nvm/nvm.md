---
title: nvm
date: 2017-12-28
categories: 
 - 前端
tags:
 - nvm
---
## nvm是什么 ##
nvm是让你在同一台机器上安装和切换不同版本的node的工具，通过它可以安装和切换不同版本的nodejs。

在项目开发过程中，经常会遇到有些老的项目需要维护却只能在较低的node版本上运行。而我们的电脑上只存在一个node版本。这时候 nvm 就完美解决了我们的问题；
## nvm安装 ##
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash

wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash

## 命令 ##
nvm ls-remote：列出所有可以安装的node版本号

nvm install v***：安装指定版本号的node

nvm use v***：切换node的版本，这个是全局的

nvm current：当前node版本

nvm ls：列出所有已经安装的node版本

