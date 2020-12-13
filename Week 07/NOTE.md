###一、拆箱(Topremitive)
#####1.定义
	将一个对象类型转成普通的类型，基本类型 
#####2.对象的哪些方法影响Topremitive
	let obj = {
		toString(){},
		valueOf(){},
		[symbol.primitive]()
	}
#####3.调用规则
1. 若定义了symbol.primitive则会优先调用它，忽略 toString和valueOf；
2.	否则就会调用两个方法，加法优先·调用valueOf
3.	属性名调用Obj[o],优先调用toString()
###二、装箱
	将一个基本类型、普通类型转成对象的类型（Object为每一个类型提供一个包装的类） 
	undefined和null没有类型。symbol没有对象，如果想给symbol包装，需要包装成New Object(Symbol(a))可以得到，但会报错
###三、预处理
	所有的声明都有预处理机制
	var 作用域在变量所在的函数体，
	const 作用域在所在的花括号
###四、JavaScript执行粒度 运行时
	1. 宏任务
	1. 微任务（promise）
	1. 函数调用（execution context）
	1. 语句声明（completion record）
	1. 表达式（reference）
	1. 直接量/变量/this
###五、事件循环
	是一个使用JavaScript引擎的一个过程
	get code => execute => wait => get code
###六、Realm（不同iframe 创建的对象是不同的）（蚂蚁前端G6 对象可视化）
#####1.定义
	规定在一个JavaScript实例里面，它所有的对象会放在Realm里面去。不同的realm实例之间完全实例。
	有了Realm可以描述行为，不同的Realm可以传递对象，与prototype不一致