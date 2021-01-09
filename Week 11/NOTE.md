### 学习笔记

##### CSS总结

###### css总体结构

- @charset
- @import
- rules
  - @media
  - @page
  - rule

###### css规则研究

- at-rules（下列比较重要的）
  - @charset
  - @import
  - **@media**
  - @page
  - @counter-style
  - **@keyframes**
  - **@fontface**
  - @support
  - @namespace
- rule
  - Selector
    - Selector_group
    - selector—— > / <sp> / + / ~
    - Simple_selector——type / * / .  / # / [] / : / :: / :not()
  - Declaration
    - key——variables/properties
    - value——calc/number/length/......

###### css规则的结构

- 选择器（**level3** / level4）
- 声明
  - key（属性/变量）
  - value（值/函数类型的值）

###### css收集标准

```javascript
Array.prototype.slice.call(document.querySelector('#container').children).filter(e => e.getAttribute('data-tag').match(
			/css/)).map(e => ({
			name: e.children[1].innerText,
			url: e.children[1].children[0].href
		}));
```



##### CSS选择器

###### 选择器语法

- 简单选择器
  - *(相当于没有选择器)
  - Div  svg|a
  - .cls
  - #id
  - [attr=value]
  - :hover
  - :before
- 复合选择器compound
  - <简单选择器><简单选择器><简单选择器>（**与关系**）
  - *或者div必须写在最前面，伪类或者伪元素写在最后面
- 复杂选择器
  - <复合选择器><sp><复合选择器>（子孙选择器）
  - <复合选择器>">"<复合选择器>（父子选择器）
  - <复合选择器>"~"<复合选择器>（邻居选择器）
  - <复合选择器>"+"<复合选择器>（兄弟选择器）
  - <复合选择器>"||"<复合选择器>（level4，选中table里的某列）

###### 选择器的优先级

- 对选择器里包含的所有选择器进行**计数**，采用n进制方法计数，可看作十进制的计数。

###### 伪类（不建议写的太复杂）

- **链接/行为**
  - <u>:any-link</u>
  - <u>:link（未访问过）   :visited（已访问过）</u>（触发二者后只能修改颜色与文字）
  - :hover
  - :active
  - :focus
  - :target
- **树结构**
  - :first-child
  - :nth-child()
  - :nth-last-child()
  - :empty （是否有子元素）   :last-child   :only-child（破坏浏览器回溯原则，影响不大，不建议使用）
- **逻辑型**
  - :not伪类
  - :where   :has

###### 伪元素：通过选择器向界面上添加一个不存在的元素

- ::before（在元素的内容前插入伪元素）
- ::after（在元素的内容后插入伪元素）
- ::first-line（选中第一行）
  - 可用属性：font/color/background/word-spacing/letter-spacing/text-decoration/text-transform/line-height
- ::first-letter（选中第一个字母，用一个不存在的元素把一部分文本括起来进行处理）
  - 可用属性：font/color/background/text-decoration/text-transform/letter-spacing/word-spacing/line-height/float/vertical-align/盒模型系列：margin, padding,border



##### 思考题：为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？

- first-letter：伪元素向文本的第一个字符添加特殊样式；在 CSS2.1 之前，:first-letter 只能与块级元素关联。CSS2.1 扩大了这个范围，可以与任何元素关联。但可以应用到首字母的属性是有限的。
- first-line：伪元素向文本的首行添加特殊样式，用于设置元素中的第一行文本的样式，且只能与块级元素关联。可以应用到首字母的属性是有限的。