---
title: shell 学习 （一）
date: 2019-02-01
categories: 
 - shell
tags:
 - shell
---


## 变量


### 命名
```shell
# 命名一个变量
    name='我是一个变量'
```
+ 命名只能使用英文字母，数字和下划线，首个字符不能以数字开头。
+ 中间不能有空格，可以使用下划线（_）。
+ 不能使用标点符号。
+ 不能使用bash里的关键字（可用help命令查看保留关键字）。

### 读取变量

```shell
# 读取变量值
# 在变量名前面加上美元符号 $ 即可。或者 ${}。
name='shell'
echo $name
echo ${name}

echo '读取变量 啦 ${name}html'

# 推荐使用${} 进行读取，只是用$就会出现$namehtml  这样就无法解析 ${name}html 就不会影响
```

### 只读变量
使用 readonly 设置变量为只读。设置了只读 就不能再进行修改了

```
readonly myName
myName='我是一个只读变量'

myName='我不可以修改奥'

```
### 删除变量
unset 删除对应变量

```shell
unName='请删除我'

unset unName

echo unName
# 不会有任何输出啦~

```
