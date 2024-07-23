# 反馈须知

我想，“怎么提问”这个问题也是老生常谈了，我也不多说，参阅[提问的智慧](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md)。

在提出问题之前，尝试自己解决问题，如简单的重启。再在[Issues](https://github.com/Mirouterui/mirouter-ui/issues)里查看是否有类似情况，无法解决再提问

## 联系我们

你可以在[Issues](https://github.com/Mirouterui/mirouter-ui/issues)处提出功能建议，发现Bug等，

若是针对某些功能/操作有疑问，需进一步讨论，请移步至[Discussions](https://github.com/orgs/Mirouterui/discussions)。

## 准备工作

1. 将debug模式打开以收集更多日志

2. 尝试复现该bug，由于不同路由器存在差异，在复现时最好全程录像

3. 保存所有的网络请求以便本地调试

   ![image-20240720195718242](https://onep.hzchu.top/mount/pic/myself/2024/07/669ba61f19198.png?fmt=webp)

   ![1721476665893.png](https://onep.hzchu.top/mount/pic/myself/2024/07/669ba63a8caf0.png?fmt=webp)

   ::: note

   所有接口返回的数据均不会泄露重要个人信息，当然为了安全起见你也可以替换掉敏感信息（如mac地址

    :::

4. 提交给开发者以下信息：

   - MRUI前后端版本

   - 运行环境

   - 配置文件（注意不要泄露密码）

   - 路由器型号及版本号

   - 前文记录的复现方法

   - 前文获取的前后端日志

     ::: tip

     docker部署使用`docker logs -f -t {name}`获取后端日志

      :::
   
   - 前文获取的网络日志

