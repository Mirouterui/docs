#  程序部署

## 获取路由器key

通常情况下，key是恒定的，但我依然推荐你检查一番

> 可以使用[自动程序](/tools/mikvivator)获取

在路由器登录页面按下右键，选择查看源代码，搜索`Encrypt`，提取下面`key`字段的内容

![gif](https://onep.hzchu.top/mount/pic/myself/2024/07/669b68a8b244f.gif)

## 安装/运行

### Docker 部署

> 对于一些支持docker的小米路由器，也可以尝试使用docker运行

推荐使用 Docker 部署，执行命令创建容器：

```
docker run -d \
    --name mirouter-ui
	-p 6789:6789
    -v $(pwd):/app/data
    --restart=always
    thun888/mirouter-ui
```

::: tip

Docker的端口映射命令参数为`-p 外部端口:内部端口`。若需修改端口，仅需要修改外部端口即可，且在配置文件中无需修改端口配置。

如果无法拉取镜像，请尝试更改镜像源

 :::

该命令会在当前目录下创建容器，配置文件及数据库一并储存在该目录下。

修改配置文件即可

### 普通方式部署

MRUI采用`Golang`编写，仅需下载二进制文件即可执行。你可以访问[Release](https://github.com/Mirouterui/mirouter-ui/releases/)来获取最新版本，但鉴于GitHub在国内的访问情况，你还可以从[镜像站](https://mrui-api.hzchu.top/down/)下载。

1. 下载对应架构的程序（在早期测试中观察到部分路由器与upx存在兼容性问题，如无法运行可尝试`_noupx`版本）
2. 运行，在程序导出配置后会自动关闭
3. 修改配置
4. 再次运行，若未开启`tiny`模式会在下载完静态资源再后开启web服务
5. 尝试访问`http://ip:port`吧

## 配置文件

在看到配置文件后，来看一下配置项的含义吧

```json
{
    "dev": [{
        "password": "",
        "key": "a2ffa5c9be07488bbb04a3a47d3c5f6a",
        "ip": "192.168.31.1",
        "routerunit": false
    }],
    "history": {
        "enable": false,
        "sampletime": 300,
        "maxsaved": 8640
    },
    "netdata_routerid": 0,
    "flushTokenTime": 1800,
    "tiny": false,
    "port": 6789,
    "debug": true
}
```

**配置项：**

| 配置名           | 默认值 | 解释                                                         |
| ---------------- | ------ | ------------------------------------------------------------ |
| dev              | []     | 路由器信息，参阅`dev项`                                      |
| history          | []     | 历史记录相关功能，参阅`history项`                            |
| tiny             | false  | 启用后，不再下载静态文件，需搭配[在线前端](http://mrui-web.hzchu.top/)使用 |
| netdata_routerid | 0      | 调用netdata api时返回的路由器（对应dev项中第n个）            |
| flushTokenTime   | 1800   | 刷新token时间间隔(s)                                         |
| port             | 6789   | 网页页面端口号                                               |
| debug            | true   | debug模式，建议在测试正常后关闭                              |

**dev**字段是一个数组，内含的每个元素包含单个设备的配置信息。数组中的每个对象描述如下：

| 配置名     | 默认值                           | 解释                                                  |
| ---------- | -------------------------------- | ----------------------------------------------------- |
| password   |                                  | 路由器密码                                            |
| key        | a2ffa5c9be07488bbb04a3a47d3c5f6a | 路由器key（如果和前文获取的不同，请更改为自己获取的） |
| ip         | 192.168.31.1                     | 路由器IP                                              |
| routerunit | false                            | 启用后，程序通过`gopsutil`库获取CPU占用               |

> 配置多个对象以使用多路由模式，但要注意，如果使用有线/无线组网，数据统计由主路由负责，子路由无法获取信息属于正常情况

**history**项：

| 配置名     | 默认值 | 解释                 |
| ---------- | ------ | -------------------- |
| enable     | false  | 是否启用历史数据统计 |
| sampletime | 300    | 采样时间间隔(s)      |
| maxsaved   | 8640   | 最多记录条数         |

::: tip

保存数据条数过多可能会造成前端页面卡顿。同时，为了减小历史数据拟合时产生的误差，sampletime应不超过600

 :::
