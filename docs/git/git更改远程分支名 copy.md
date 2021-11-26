---
title: git更改本地分支名称和远程分支名
date: 2019-12-28
categories: 
 - 前端
tags:
 - git
---
1. **获取远程分支**

```
git checkout old_branch
```

2. **更改本地分支名称**

```
git branch -m old_branch new_branch
```

3. **删除远程分支名**

```
git branch --deletel origin old_branch
```

4. **本地分支推送远程**

```
git push origin new_branch
```

5. **建立本地分支和远程分支联系**

```
git branch --set-upstream-to origin/new_branch
```

**ok~**