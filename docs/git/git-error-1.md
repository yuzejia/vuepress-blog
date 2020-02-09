---
title: If you wish to set tracking information for this branch you can do so with：git branch --set-upstream-to=origin/<branch>
date: 2018-12-28
categories: 
 - 前端
tags:
 - git
---


```
If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> doctor-front
```

上面意思：如果要设置此分支的跟踪信息，可以使用：

git pull时出现以上错误，提示已经很明显了说明你本地没有和远程建立联系。
按照提示 执行就可以解决

```
git branch --set-upstream-to=origin/<branch> doctor-front
```

**但是为什么会出现这种问题？**

检查了下发现，我从远程创建本地新分支的时候执行了命令：

```
git checkout -d xxxx
```
git checkout -d 创建并切换分支

这种操作只是在本地建立了分支 xxxx  

然后我把本地分支push 到了远程  

```
git push origin xxxx
```

远程存在了该分支，但是本地和远程并没有保持联系。我们就需要执行提示的操作进行关联就可以了。