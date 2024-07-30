# 守护进程

若使用二进制文件部署，那么保持它在后台运行就需要你额外考虑了
## Systemd

**前提条件**：你所使用的系统具有该管理器

注册为系统服务：

```bash
sudo vim /etc/systemd/system/mrui.service
```

填入：

```ini
[Unit]
Description=mrui
After=network.target network-online.target
Requires=network-online.target

[Service]
ExecStart=/path/to/mrui

[Install]
WantedBy=multi-user.target
```

设置开机自启：

```bash
sudo systemctl enable mrui
```

管理：

- 查看状态：`systemctl status mrui`
- 启动：`sudo systemctl start mrui`
- 停止：`sudo systemctl stop mrui`
- 重启：`sudo systemctl restart mrui`

## rc.common

**前提条件**：为`OpenWRT`系统，如小米路由器

注册为系统服务：

```bash
vim /etc/init.d/mrui
```

填入：

```ini
#!/bin/sh /etc/rc.common
START=80
STOP=90

start() {
        service_start /path/to/mrui &
}

stop() {
        service_stop /path/to/mrui
}

```

给该文件可执行权限

```bash
chmod +x /etc/init.d/mrui
```

设置开机自启：

```bash
/etc/init.d/mrui enable
```

管理：

- 启动：`/etc/init.d/mrui start`
- 停止：`/etc/init.d/mrui stop`
- 重启：`/etc/init.d/mrui restart`

## rc-service

**前提条件**：你所使用的系统具有该管理器，通常为`Alpine`系统

注册为系统服务：

```bash
sudo vim /etc/init.d/mrui
```

填入：

```ini
#!/sbin/openrc-run

command="/path/to/mrui"
command_background=true
pidfile="/run/${RC_SVCNAME}.pid"

```

给该文件可执行权限

```bash
chmod +x /etc/init.d/mrui
```

设置开机自启：

```bash
sudo rc-update add mrui default
```

管理：

- 查看状态：`sudo rc-service mrui status`
- 启动：`sudo rc-service mrui start`
- 停止：`sudo rc-service mrui stop`
- 重启：`sudo rc-service mrui restart`

## Nssm

**前提条件**：`Windows`系统

1. 下载nssm：https://nssm.cc/download

2. 解压压缩包，根据系统位数选择64或32位程序

3. 打开命令行，运行`nssm install mrui`，打开程序配置界面

4. 配置完成后关闭

   ![image-20240721094534903](https://onep.hzchu.top/mount/pic/myself/2024/07/669c684114b41.png?fmt=webp)

   > Path是程序路径，在选中程序后会自动填写运行目录。Arguments里可以添加命令行参数

5. 执行`nssm start mrui`启动服务

管理：

- 启动：`nssm start mrui`
- 停止：`nssm stop mrui`
- 重启：`nssm restart mrui`
- 删除服务：`nssm remove mrui`

::: tip

Windows具有图形化的服务面板，也可以在“服务”里操作启停

 :::

## Docker

在安装命令中添加`--restart=always`参数（在给出的命令中已经包括了）
