react fiber 源码学习

vscode打断点

# hooks的useState回调

之前是setState

```javascript
setState(updater, callback)
```
hook 的状态改为useState

状态更新是useEffect

在 list 状态改变后调用事件

```javascript
useEffect(() => {
    setList(list);
    if (list.length > 0) {
    handleList(0);
    }
}, [list]);

```






