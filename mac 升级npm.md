npm安装某插件后提示我![图片](https://uploader.shimo.im/f/GZNwJ1v0FBKNjrPD.png!thumbnail?fileGuid=gWh9rgQ9dPPtjTcc)




全局更新

![图片](https://uploader.shimo.im/f/AvOteN8eHog6Vq51.png!thumbnail?fileGuid=gWh9rgQ9dPPtjTcc)


打开log文件

一堆有的没的log

路径❌

我又打开了我的node_modules文件安装路径。

继续尝试

![图片](https://uploader.shimo.im/f/t0zt1ZC6awaxX8s7.png!thumbnail?fileGuid=gWh9rgQ9dPPtjTcc)




checkPermissions 是因为没有权限

呜呜呜

终于知道为什么了

![图片](https://uploader.shimo.im/f/k4Nsdb1nuXSJDfKk.png!thumbnail?fileGuid=gWh9rgQ9dPPtjTcc)

✅好啦




node升级 到稳定版本

1. 清除npm缓存：npm cache clean -f
2. 安装n模块：npm install -g n
3. 升级node.js到最新稳定版：n stable


脚本发送邮件



