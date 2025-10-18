# 部署到路由器

::: note

尽管我不推荐折磨路由器，但如果你想在路由器上运行最好选用[简化版（whr）](/more/lite.md)

 :::

## 部署

从[Release](https://github.com/Mirouterui/mirouter-ui/releases)复制对应的架构的发行版的下载链接

> 使用`uname –a`查看架构（如果为`armv7l`，在无法使用时考虑使用`armv5`版本）

![R1D](https://onep.hzchu.top/mount/pic/2023/08/29/64ed9b78dbe91.webp?fmt=webp)

运行：

> curl –L yourlink –o mrui
>
> chmod 755 mrui
>
> ./mrui

程序会自动导出配置文件，在其中填上密码即可。配置文件中其它条目参考前文

再次运行，等待下载页面静态文件

若能支持获取token即为成功

## 常见问题

1. 无法下载静态文件

从[Mirouterui/static: 前端静态文件 (github.com)](https://github.com/Mirouterui/static)下载，并解压到`static`目录

![](https://onep.hzchu.top/mount/pic/2023/08/29/64eda04788f04.webp?fmt=webp)

2. 无法运行&无法找到配置文件

   可使用“不使用upx压缩”版本（即带`_noupx`后缀的版本）



## 实例

部署在`CR8809`上。参考以下文章开启ssh

- [CR8809 无需拆机无需任何工具打开 Telnet/SSH 的办法分享-小米无线路由器及小米网络设备-恩山无线论坛 (right.com.cn)](https://www.right.com.cn/forum/thread-8364521-1-1.html)
- [cr880X原厂固件开启telnet/ssh教程-小米无线路由器及小米网络设备-恩山无线论坛 (right.com.cn)](https://www.right.com.cn/FORUM/thread-8281028-1-1.html)

![image-20240725101009765](https://onep.hzchu.top/mount/pic/myself/2024/07/66a1b40864c30.png?fmt=webp)

通过`df -h`可见有20MB左右空间，使用`uname -a`查询为armv7l架构，可以部署完整版

![image-20240725101342793](https://onep.hzchu.top/mount/pic/myself/2024/07/66a1b4dd12b80.png?fmt=webp)

```bash
root@XiaoQiang:~# uname -a
Linux XiaoQiang 4.4.60 #0 SMP PREEMPT Wed Jun 1 09:55:13 2022 armv7l GNU/Linux
```

下载并运行

![image-20240725102024817](https://onep.hzchu.top/mount/pic/myself/2024/07/66a1b66f54106.png?fmt=webp)

![image-20240725103424681](https://onep.hzchu.top/mount/pic/myself/2024/07/66a1b9b73b1fb.png?fmt=webp)

测试正常后，按照[这里](/more/guard.md#rc-common)来配置守护进程