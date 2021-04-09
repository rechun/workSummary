bind会创建一个新函数

当新函数被调用时，bind的第一个参数会作为他运行时的this；


```javascript
Function.prototype.mybind = function(content){
  const self = this;
  let args =[...arguments];
  let arg = args.slice(1);
  return function (){
    let newArg= [...arguments];
    return self.apply(content,arg.concat(newArg));
  }
```
}
