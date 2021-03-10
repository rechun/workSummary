# HTTPS和HTTP有什么区别

Frequently used commands. This is a helpful page to [add to your Favorites](https://www.notion.so/notion/Navigate-Notion-left-sidebar-7ef7287cee00464d9a813073b02ce24a#cb2f704bec9b420d94babc8685ea358b).

# 🚚 区别

- https需要到ca申请证书（收费）
- http是超文本传输协议、
    - 信息是明文传输
- https是ssl加密传输协议
- 连接方式不同
    - http是80
    - http是443
- http的链接简单、无状态
- https协议是由ssl和http协议构建的
    - 可以进行 加密传输、身份认证

# 🚢 HTTPS的特点

安全、保护用户隐私，防止流量劫持

- 内容加密
    - 浏览器到服务器的内容都是加密形式传输、中间无法查看原始内容
- 身份认证
    - 保证访问的服务，即使被DNS劫持到了第三方站点，也会提醒用户没有访问服务，有可能被劫持
- 数据完整性

# 🔍HTTPS网络访问过程

1. 三次握手建立TCP链接
2. 使用http发起get请求
3. 三次握手重新建立tcp链接
4. tls完全握手阶段一
5. 解析ca站点的dns
6. 三次握手简历ca站点的tcp链接
7. 发起ocsp请求，获取响应
8. 完全握手阶段二
9. 完全握手结束后，浏览器和服务器之间进行应用层数据传输

### TCP/IP 的分层管理

层次化后，把各层之间的接口部分规划好，只需要把变动的替换到即可。

- 应用层
    - 决定了向用户提供应用服务时通信的活动。
    - 预存了  FTP，DNS
    - HTTP协议属于该层
- 传输层
    - 对上应用层，提供处于网络连接中的两台计算机之间的数据传输。
    - 协议：TCP  和UDP
- 网络层
    - 用来处理在网络上流动的数据包。
    - 数据包是网络传输的最小数据单位。
- 数据链路层
    - 用了处理连接网络的硬件部分。
    - 包括控制操作系统、硬件的设备驱动、NIC及光纤等物理可见部分。