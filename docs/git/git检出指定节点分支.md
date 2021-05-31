<!-- ---
title: git从指定节点检出分支
date: 2019-02-28
categories: 
 - 前端
tags:
 - git
--- -->
1. **获取需检出的节点commit id**

```
git checkout old_branch
```

2. **从该节点检出新的分支**

```
git checkout commitId -b  新分支名
```

3. **推送远程分支**

```
git push
```

4. **建立远程分支连接**

```
git push --set-upstream-to origin/new_branch
```

**ok~**