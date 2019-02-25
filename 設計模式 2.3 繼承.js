'js并没有继承这一机制'

'3.1   子类型的原型对象————类式继承'
//类式继承


//声明父类
function superClass(){
      this.superValue = true;
}
//为父类添加公有方法
superClass.prototype.getSuperValue = function(){
      return this.superValue
}
//声明子类
function subClass(){
      this.subValue = false
}
//继承父类
subClass.prototype = new superClass();
//为子类添加共有方法
subClass.prototype.getSuperValue = function(){
      return this.subValue
}
'类的原型对象的作用就是为类的原型添加共有方法，但类不能直接访问这些属性和方法'
'必须通过原型prototype来访问'


