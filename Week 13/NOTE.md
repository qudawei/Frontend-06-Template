## DTD与XML namespace
### XML与SGML
- http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd
- http://www.w3.org/1999/xhtml   
任何人不得在访问网页的时候访问DTD（虽然是个url，但是禁止访问。不然网站要瘫痪了）   
&nbsp; 不建议使用，破坏了语义。若两个单词中间加上&nbsp;会产生分词的问题。
如果有空格的需求，通过CSS的white-space属性控制   

重要转义符：
- quot 是双引号
- amp 是&符
- lt 是小于号
- gt 是大于号

重要标签：
- strong 表示字或词很重要
- em 表示强调重点是什么，重音 一个苹果（中的一个） 
- hr 表示将上下两部分分割 
- figure 图表下文字说明
- nav 导航性质
- dfn 词的定义

## 合法元素
- Elemenet: <tagname>...</tagname>
- Text: text
- Comment: <!-- comments -->
- DocumentType: <!Doctype html
- ProcessingInstruction: <?a 1?>
- CDATA: <![CDATA[]]

## 浏览器API
### DOM API
- traversal系列，不建议用
- 节点
    Document：文档根节点   
    DocumentFragment：文档片段   
    DocumentType:文档类型   
    Element：元素型节点    
    CharacterData：字符    
- 导航类操作   
    parentNode , parentElement,  childNodes , children   
    firstChild ,firstElementChild ,  lastChild, lastElementChild   
    nextSibling ,nextElementSibling,  previousSibling, previousElementSibling   
- 操作   
    appendChild,  insertBefore,  removeChild（只能在parent进行）, replaceChild   
- 高级操作   
    compareDocumentPosition: 比较两个节点中关系的函数   
    contains: 检查一个节点是否包含另一个节点的函数   
    isEqualNode: 检查两个节点是否完全相同   
    isSameNode :检查两个节点是否是同一个节点，实际上在JavaScript 中可以用“===”   
    cloneNode: 复制一个节点，如果传入参数true，则会连同子元素做深拷贝   
- Event：冒泡与捕获   
  - 捕获：浏览器不能判断当前鼠标点击在浏览器哪个位置，需要浏览器计算，浏览器计算的过程就是捕获（从外到内）
  - 冒泡：冒泡就是已经知道点击在那个元素，层层向外触发，让元素响应的过程。addeventlistener不传递第三个参数，默认是冒泡的事件监听
### Range API： (frament range 很重要)
    - 创建方法一： var range = new Range()
	- 创建方法二： getSelection()
### CSSOM： css一切属性都需要通过document.styleSheets 访问
	操作css规则
	- document.styleSheets[0].insertRule();
	- document.styleSheets[0].removeRule();
	* window
	  - outerHeight属性设置或返回一个窗口的外部高度，包括所有界面元素（如工具栏/滚动条）。

      - outerWidth属性设置或返回窗口的外部宽度，包括所有的界面元素（如工具栏/滚动）。
	  - innerheight 返回窗口的文档显示区的高度。

      - innerwidth 返回窗口的文档显示区的宽度。
	  - devicePixelRatio 电脑物理像素与代码逻辑像素的比值 正常1:1
### CSSOM view：
  		- getClientRects() 拖拽常用
		- getBoundingClientRect() 最顶层盒子，求两个元素差值 
### 整理api：见work 13文件