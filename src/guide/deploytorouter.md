

# 部署到路由器

::: note

尽管我不推荐折磨路由器，但如果你想在路由器上运行最好选用[简化版（whr）](/more/lite.md)

 :::

## 部署

从[Release](https://github.com/Mirouterui/mirouter-ui/releases)复制对应的架构的发行版的下载链接

> 使用`uname –a`查看架构（如果为`armv7l`，考虑使用`armv5`版本）

![R1D](https://onep.hzchu.top/mount/pic/2023/08/29/64ed9b78dbe91.webp)

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

![](https://onep.hzchu.top/mount/pic/2023/08/29/64eda04788f04.webp)

2. 无法运行&无法找到配置文件

   可使用“不使用upx压缩”版本（即带`_noupx`后缀的版本）