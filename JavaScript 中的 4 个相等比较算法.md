JavaScript 运算中，一共包含 4 个相等比较算法：

* 抽象相等比较
* 严格相等比较
* SameValueZero
* SameValue




|算法|使用了此算法的地方|发生类型转换|
|:----|:----|:----|
|抽象相等比较|== 运算符|是|
|严格相等比较|=== 、Array.prototype.indexOf()方法|否|
|SaveValueZero|String.prototype.includes()、<br>Array.prototye.includes() 方法|否|
|SaveValue|Object.is()方法|否|


**规范中对抽象相等比较算法搞了一个 “小怪癖”：定义 null 和 undefined 的比较结果为 true**

**SameValueZero 算法不能区分 +0 和 -0**

