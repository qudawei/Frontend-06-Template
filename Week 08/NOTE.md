学习笔记

### 一、浏览器工作原理

url =**http**=>html=**parse**=>dom=**css computing**=>dom with css=**lay out**=>dom with position=**render**=>bitmap(图像显示)

### 二、有限状态机器
#### 1 在有限状态机器里，每一个状态都是一个机器
	 a 在有限状态机器里，每一个机器里，可以做计算、存储、输出
	 b 在有限状态机器里，所有的这些机器接收的输入是一致的
	 c 状态机的每一个机器本身没有状态，如果用函数表示，应该是纯函数（无副作用）
#### 2 每一个机器都知道下一个状态
	 a 每一个机器都有确定的下一个状态（moore）
	 b 每一个机器根据输入决定下一个状态（mealy）

### 三HTTP请求

#### 1. 第一步HTTP请求总结：
   	 a 设计一个HTTP请求的类
   	 b content type是一个必要的字段，要有默认值
   	 c body是kv格式
   	 d 不同的content-type影响body的格式
#### 2. 第二步send函数总结
	 a 在Request的构造器中收集必要的信息
	 b 设计一个send函数，把请求真实的发送到服务器
	 b send函数应该是异步的，所以返回Promise
#### 3. 第三步发送请求
	 a 设计支持已有的connection或者自己新建的connection
	 b 收到数据传给parser
	 c 根据parser的状态resolve Promise
#### 4. 第四步responseparser总结
	 a response必须分段构造，所以要用一个responseparser来装配
	 b responseparser分段处理responsetext，用状态机分析文本的结构
#### 5. 第五步responsebody解析
	 a response的body可能根据Content-Type有不同的结构，因此会采用子Parser的结构来解决问题
	 b 以TrunkedBodyParser为例，用状态机来处理body的格式