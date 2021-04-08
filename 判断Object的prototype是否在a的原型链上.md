```javascript
function myInstanceOf(target,origin){
  let proto = target.__proto__;
  if(proto){
    if(proto === origin.prototype){
      return true
    }else{
      return myInstanceOf(proto,origin)
    }
  }else{
    return false
  }
}
```
