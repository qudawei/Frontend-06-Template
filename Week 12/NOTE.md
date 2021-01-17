### 学习笔记

#### CSS总结

##### 一、元素 标签 盒

- HTML代码中可以书写开始__标签__，结束__标签__ ，和自封闭__标签__ 。

- 一对起止__标签__ ，表示一个__元素__ 。

- DOM树中存储的是__元素__和其它类型的节点（Node）。

- CSS选择器选中的是__元素|伪元素__ 。

- CSS选择器选中的__元素__ ，在排版时可能产生多个__盒__ 。

- 排版和渲染的基本单位是__盒__ 。
##### 二、排版（布局）

###### 1、写字规则
- 从左到右
- 同一行所写的文字都是对齐的
- 一行写满，换行

###### 2、layout 排版（布局）：盒、文字

2.1 正常流排版
- 收集盒进行
- 计算盒子在行中的排布
- 计算行的排布
2.1.1 具体排布规则 分为：IFC、BFC

- **IFC**:行内级格式化上下文
- 默认盒子和文字的基线对齐，若盒子里面加了文字，则盒子文字与外部文字基线对齐，因而建议使用vertical-align来排布。amazing！！！
- 从上到下分为：
		text-top、text-bottom:文字的顶源头、底源。一般大小不变，若多种字体混排，由字体最大的来决定的。
		base-line:一般作为英文字母的基线
		line-top、line-bottom：若文字行高超过文字高度，还会有line-top、line-bottom，盒的先后顺序影响line-top-bottom   
- **BFC**:块级格式化上下文
- Block:Block Container 能容纳正常流的盒子，里面就是BFC
		所有盒子里不是设置成特殊display都是正常流：如block、inline-block、table-cell、flex item、grid cell、table cation
		
- Block-level Box:外面有BFC的 
		一般都分为inline 和block 两种类型
- Block Box：里外都有BFC的
	
	
- margin重叠产生条件：
		1、发生在正常流中
		2、正常流中只发生在BFC中，不会发生在grid、flex、IFC等
		
- float：
		1、float元素影响其他元素排版，高度会影响其他行内元素的宽度
		2、float元素影响其他float排版，float堆叠（clear：right left清除浮动），后面行盒子受两个float影响
		3、float：加在最后一个文字后面，原文字效果改变，发生重拍，消耗性能，不建议此操作
	

###### 设置BCF的方法，下面这些元素都会产生一个新的BFC：
1. 根元素；
2. float属性不为none；
3. position为absolute或fixed；
4. display为inline-block,
5. overflow不为visible；
## 动画(三次贝塞尔曲线：https://cubic-bezier.com/#.17,.67,.83,.67)

动画有两种属性可以控制，使用 transition 来定义简单的过渡动画，而 animation + @keyframe 的方式可以分段定义复杂动画。

### Animation

- animation-name            动画名称
- animation-duration        动画时长
- animation-timing-function 动画的时间取消
- animation-delay           动画开始时的延迟
- animation-iteration-count 动画的播放次数
- animation-direction       动画的方向

### Transition

- transition-property           要变换的属性
- transition-duration           变化的时长
- transition-timing-function    时间曲线
- transition-delay              延迟



##### 绘制（绘制图形一般使用功能svg）

绘制是一类与布局无关的控制属性，常用的如下：

- 几何图形
    - border
    - box-shadow
    - border-radius
- 文字
    - font
    - text-decoration
- 位图
    - background-image
