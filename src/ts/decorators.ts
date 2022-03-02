// 装饰器

@testDecor
class test {
  constructor() {
    console.log(22222222);
  }
}

// 定义装饰器

function testDecor(target: any) {
  console.log("我是装饰器");
}

new test();
