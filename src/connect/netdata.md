# Netdata

::: tip

v2版本中已移除该功能支持

 :::



程序内建了部分netdata的api，可以结合HA和SD2小电视实现性能监控

## Home Assistant

同时兼容HA的netdata集成

![](https://onep.hzchu.top/mount/pic/2024/01/01/659222d20746e.webp)

![](https://onep.hzchu.top/mount/pic/2024/01/01/659223056c85c.webp)


示例配置：

![](https://onep.hzchu.top/mount/pic/2024/01/01/6592231bdd188.webp)

## SD2小电视

### 修改部分程序代码

由于默认获取一次信息间隔太短，会对路由器造成不小的负担，最好改为5s获取一次

![](https://onep.hzchu.top/mount/pic/2024/01/12/65a10d998d683.webp)

同时程序不支持http0.1,要把发送请求处代码修改为http1.1

![](https://onep.hzchu.top/mount/pic/2023/12/31/6590caaa36915.webp)

###  展示

![](https://onep.hzchu.top/mount/pic/2023/12/31/6590c9dc1e6f1.webp)

![](https://onep.hzchu.top/mount/pic/2023/12/31/6590cbaed9f8a.webp)

![](https://onep.hzchu.top/mount/pic/2023/12/31/6590cb5e87c0b.webp)