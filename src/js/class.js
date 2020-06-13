
// es5 实现
var Basketball = function () {
    this.intro = '篮球盛行于美国'
}

Basketball.prototype = {
    getMember: () =>{
        console.log('每个队伍需要五名队员', this)
    }
}

var b = new Basketball();
b.getMember();
console.log(b)

// es6 实现

let BasketballEs6 = class {
    initOf = '我是es6 class';
    constructor() { }

    getMember(info){
        console.log('es6 每个队伍需要五名队员', info)
    }
}

// 实例 class
bEs6 = new BasketballEs6();
bEs6.getMember()

// class 继承
class BasketballEs6Ext extends BasketballEs6 {
    constructor() {
        // super 继承父亲的 this 不写 下面 调用 this.initOf 将会报错
        super()
    }

    getExt() {
        this.initOf = '修改父亲this 数据';
        console.log(this.initOf)
    }

}

let bEs6Ext = new BasketballEs6Ext();
bEs6Ext.getExt();
bEs6Ext.getMember('我是继承实现的')


// 安全工厂

var Factory = function(type, content) {
    if(this instanceof Factory) {
        var s = new this[type] (content);
        return s;
    } else {
        return new Factory(type, content)
    }
}

Factory.prototype = {
    java: function(content) {
        console.log('我是java')
    },
    javaScript: function(content){
        console.log('我是javaScript')
    },
    ui: function(content){
        this.content = content;
        (function(content){
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.border = '1px solid red';
            document.body.appendChild(div);
        })(content)
    }
}

var uiArray = [{

}]

let f = Factory('ui', '我是ui类测试');
 Factory('ui', '我是ui类测试333');
console.log(f)

// es6 class 实现 安全 工厂模式

class FactoryEs6 {
    constructor(type, content) {
        console.log(this)
        if(this instanceof FactoryEs6) {
            let s = this[type] (content);
            return s;
        } else {
            return new FactoryEs6(type, content);
        }
    }

    java(content) {
        console.log('我是java')
    }
    javaScript(content){
        console.log('我是javaScript')
    }
    ui(content){
        this.content = content;
        (function(content){
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.border = '1px solid red';
            document.body.appendChild(div);
        })(content)
    }
}
new FactoryEs6('ui', '我是ui类测试');
// reactive.how