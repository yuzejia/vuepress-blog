---
title: angular 装饰器
date: 2018-04-01
categories: 
 - 前端
tags:
 - Angular
---
# Angular 装饰器
Angular 有那些装饰器？简单介绍Angular 都有那些装饰器

## 类装饰器
+ **@NgModule**	
    + 模块装饰器(帮把相关的一些代码逻辑组织在一起)	
    + NgModule 可以将其组件和一组相关代码(如服务)关联起来，形成功能单元。每个Angular应用都有一个根模块，通常命名为AppModule
+ **@Component**
	+ 组件装饰器	
    + 组件可以认为是屏幕上的一个视图． 组件定义视图。每个Angular应用都至少有一个组件，也就是根组件
+ **@Injectable**
	+ 依赖装饰器(把一个类定义为服务)	
    + 组件使用服务。对于与特定视图无关并希望跨组件共享的数据或逻辑，可以创建服务类。
+ **@Pipe**
	+ 管道装饰器	
    + 管道的作用就是传输。并且不同的管道具有不同的作用。(其实就是处理数据)
+ **@Directive**
	+ 指令装饰器	
    + 用来控制组件的某些行为

### @NgModule

把一个类标记为 NgModule，并提供配置元数据。

| 选项                                                         | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [`providers?`](https://www.angular.cn/api/core/NgModule#providers) | 在当前模块的注入器中可用的一组可注入对象。                   |
| [`declarations?`](https://www.angular.cn/api/core/NgModule#declarations) | 属于该模块的一组组件、指令和管道（统称[可声明对象](https://www.angular.cn/guide/glossary#declarable)）。 |
| [`imports?`](https://www.angular.cn/api/core/NgModule#imports) | 这里列出的 NgModule 所导出的[可声明对象](https://www.angular.cn/guide/glossary#declarable)可用在当前模块内的模板中。 |
| [`exports?`](https://www.angular.cn/api/core/NgModule#exports) | 此 NgModule 中声明的一组组件、指令和管道可以在导入了本模块的模块下任何组件的模板中使用。 导出的这些可声明对象就是该模块的公共 API。 |
| [`entryComponents?`](https://www.angular.cn/api/core/NgModule#entryComponents) | 定义此 NgModule 中要编译的组件集，这样它们才可以动态加载到视图中。 |
| [`bootstrap?`](https://www.angular.cn/api/core/NgModule#bootstrap) | 当该模块引导时需要进行引导的组件。列在这里的所有组件都会自动添加到 `entryComponents` 中。 |
| [`schemas?`](https://www.angular.cn/api/core/NgModule#schemas) | 该 NgModule 中允许使用的声明元素的 schema（HTML 架构）。 元素和属性（无论是 Angular 组件还是指令）都必须声明在 schema 中。 |
| [`id?`](https://www.angular.cn/api/core/NgModule#id)         | 当前 NgModule 在 `getModuleFactory` 中的名字或唯一标识符。 如果为 `undefined`，则该模块不会被注册进 `getModuleFactory` 中。 |
| [`jit?`](https://www.angular.cn/api/core/NgModule#jit)       | 如果存在，则该指令/组件将被 AOT 编译器忽略。它会保留在发布代码中，并且 JIT 编译器会尝试在运行时在浏览器中对其进行编译。为了确保其行为正确，该应用程序必须导入 `@angular/compiler` 。 |

### @component
[Api: https://www.angular.cn/api/core/Component](https://www.angular.cn/api/core/Component)

一个装饰器，用于把某个类标记为 Angular 组件，并为它配置一些元数据，以决定该组件在运行期间该如何处理、实例化和使用。     
``` typeScript
@Component({
  selector: 'app-component-overview',
  templateUrl: './component-overview.component.html',
  styleUrls: ['./component-overview.component.css']
})
```

### @Injectable()

```typeScript
    import { Injectable } from '@angular/core';

    @Injectable({
    providedIn: 'root',
    })
    export class HeroService {
    constructor() { }
    }
```

#### 参数 providedIn
``` typeScript
    providedIn?: Type<any> | 'root' | 'platform' | 'any' | null

```
+ root：在大多数应用程序中是指应用程序级注入器。
+ platform ：页面上所有应用程序共享的平台注入器的特殊单例。
+ any：在每个惰性加载的模块中提供一个唯一的实例，而所有急性加载的模块共享一个实例。
#### 是必须的么？
如果所创建的服务不依赖于其他对象，是可以不用使用 Injectable 类装饰器。但当该服务需要在构造函数中注入依赖对象，就需要使用 Injectable 装饰器。不过比较推荐的做法不管是否有依赖对象，在创建服务时都使用 Injectable 类装饰器。

### @Pipe
管道装饰器
#### 参数
+ name	
在模板中绑定时使用的管道名。 通常使用 lowerCamelCase 拼写方式，因为名字中不允许包含减号（-）。

+ pure?	
为 true 时，该管道是纯管道，也就是说 transform() 方法只有在其输入参数变化时才会被调用。管道默认都是纯管道。

#### 管道命名
管道类名应该使用 UpperCamelCase（类名的通用约定），而相应的 name 字符串应该使用 lowerCamelCase。 name 字符串中不应该使用中线（“中线格式”或“烤串格式”）。

```typeScript
    @Pipe({ name: 'ellipsis' })
    export class EllipsisPipe implements PipeTransform { }
```

### @Directive 指令装饰器

```typeScript
    import {Directive} from '@angular/core';

    @Directive({
    selector: 'my-directive',
    })
    export class MyDirective {
    ...
    }

```