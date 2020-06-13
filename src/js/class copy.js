
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

