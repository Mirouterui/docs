# Q&A

## CPU占用为0

由于新版小米路由器的api不返回cpu数据（为0），因此本程序同样无法显示。但如果你能在路由器上运行的话可以在配置文件里打开对应路由器的`routerunit`模式，此时程序将直接读取所部署机器的cpu占用

## 温度显示无法使用

只有R1D,R2D支持通过api方式获取，对于AX6额外提供命令模式的支持

## 设备显示不全

当设备过多时（>9）只能获取到网络活动频繁的设备的网络信息，可以在设备列表查看其它设备的基础信息

## 在线前端无法使用

![image-20240721093220144](https://onep.hzchu.top/mount/pic/myself/2024/07/669c6526623d7.png?fmt=webp)

## Alpine上无法运行

报错：

```bash
alpine:~/mrui# ./mirouterui_linux_amd64_noupx_v1.3.6 
-ash: ./mirouterui_linux_amd64_noupx_v1.3.6: not found
```

使用`ldd`查看依赖库，缺少部分运行库

```bash
alpine:~/mrui# ldd mirouterui_linux_amd64_noupx_v1.3.6
        /lib64/ld-linux-x86-64.so.2 (0x7c5e6eaa8000)
Error loading shared library libresolv.so.2: No such file or directory (needed by mirouterui_linux_amd64_noupx_v1.3.6)
        libpthread.so.0 => /lib64/ld-linux-x86-64.so.2 (0x7c5e6eaa8000)
        libc.so.6 => /lib64/ld-linux-x86-64.so.2 (0x7c5e6eaa8000)
Error relocating mirouterui_linux_amd64_noupx_v1.3.6: __vfprintf_chk: symbol not found
Error relocating mirouterui_linux_amd64_noupx_v1.3.6: __fprintf_chk: symbol not found
```

安装：

```bash
apk update
apk add libc6-compat libgcc libstdc++
```

再次检查：

```bash
alpine:~/mrui# ldd mirouterui_linux_amd64_noupx_v1.3.6
        /lib64/ld-linux-x86-64.so.2 (0x7c99a7c96000)
        libresolv.so.2 => /lib/libresolv.so.2 (0x7c99a7c84000)
        libpthread.so.0 => /lib64/ld-linux-x86-64.so.2 (0x7c99a7c96000)
        libc.so.6 => /lib64/ld-linux-x86-64.so.2 (0x7c99a7c96000)
        libucontext.so.1 => /lib/libucontext.so.1 (0x7c99a7c7f000)
        libobstack.so.1 => /usr/lib/libobstack.so.1 (0x7c99a7c7a000)
```

并没有缺少的运行库了，运行即可
