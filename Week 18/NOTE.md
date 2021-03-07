### 学习笔记

#### Mocha 基础
* `Mocha` 是一个功能丰富的JavaScript测试框架，可在Node.js和浏览器中运行，从而使异步测试变得简单而有趣。Mocha测试按顺序运行，从而可以灵活，准确地报告，同时将未捕获的异常映射到正确的测试用例。

##### 全局安装npm：

`$ npm install --global mocha`
* 或作为项目的开发依赖项：

`$ npm install --save-dev mocha`
* 从v8.0.0开始，Mocha需要Node.js v10.12.0或更高版本。

```
$ npm install mocha
$ mkdir test
$ $EDITOR test/test.js # or open with your favorite editor
```

```
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
```
#### npm link的使用
* 本地开发npm模块的时候，我们可以使用npm link命令，将npm 模块链接到对应的运行项目中去，方便地对模块进行调试和测试