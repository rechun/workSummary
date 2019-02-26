'js并没有继承这一机制'

'3.1   子类型的原型对象————类式继承'
//类式继承


//声明父类
function superClass(){
      this.superValue = true;
}
//为父类添加公有方法'js并没有继承这一机制'

'2.3.1   子类型的原型对象————类式继承'
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


'2.3.2   创建即继承————构造函数继承'
//构造函数式继承
//声明父类
function superClass(id){
      //引用类型共有属性
      this.books = ['javascript','html','css'];
      //值类型共有属性
      this.id = id;
}
//父类声明原型方法
superClass.prototype.showBooks = function(){
      console.log(this.books);
}
//声明子类
function SubClass(id){
      //继承父类
      superClass.call(this,id)
}
var instance1 = new SubClass(10);
var instance2 = new SubClass(11);

instance1.books.push('设计模式');
console.log(instance1.books);//['javascript','html','css','设计模式']
console.log(instance1.id);//10
console.log(instance2.books);//['javascript','html','css']
console.log(instance2.id);//11
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


