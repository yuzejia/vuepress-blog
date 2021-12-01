


https://segmentfault.com/a/1190000009645391?utm_source=tag-newest

@Injectable() 是必须的么？
如果所创建的服务不依赖于其他对象，是可以不用使用 Injectable 类装饰器。但当该服务需要在构造函数中注入依赖对象，就需要使用 Injectable 装饰器。不过比较推荐的做法不管是否有依赖对象，在创建服务时都使用 Injectable 类装饰器。