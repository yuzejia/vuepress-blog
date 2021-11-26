<!-- ---
title: 监听localStorage 变化
date: 2017-12-28
categories: 
 - 前端
tags:
 - javaScript
--- -->
 
 ```
 var orignalSetItem = localStorage.setItem;

    localStorage.setItem = function(key,newValue){

        var setItemEvent = new Event("setItemEvent");
        setItemEvent.key=key;
        setItemEvent.newValue = newValue;
        window.dispatchEvent(setItemEvent);
        orignalSetItem.apply(this,arguments);
    }
```
