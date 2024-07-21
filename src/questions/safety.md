# 关于安全性

程序外部只开放以下接口的调用：

- `/api/xqsystem/router_name`：用于获取路由器名称
- `/api/misystem/status`：用于获取路由器基本状态以及网络信息
- `/api/misystem/devicelist`：用于获取设备列表及设备基础信息
- `/api/xqsystem/internet_connect`：检查是否连接互联网
- `/api/xqsystem/fac_info`：获取工厂信息
- `/api/misystem/messages`：未知用途
- `/api/xqsystem/upnp`：获取upnp信息

返回的内容只包括基本的网络信息，通常来讲无需过于在意。

当然如果您希望进一步提升安全性，可以使用如nginx进行反向代理并设置密码
