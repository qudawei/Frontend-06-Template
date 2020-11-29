## proxy

		此对象不可被监听 js底层的机制
        let obj = {
            a:1,
            b:2
        }
		外面包裹一层proxy即可被监听
		let po = new Poxy(obj,{
			set(obj, prop, val){
				console.log(obj, prop, val);
			}
		})
## reactivity
	核心：通过函数reactive()给对象新增一个Proxy对象监听内部的属性来实现数据监听。
## range createRange
	了解cssdom的边界，对cssdom和操作dom的一些方法的了解不熟。