import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as e,a}from"./app-BQL5tJ3Z.js";const n={},t=a(`<h1 id="守护进程" tabindex="-1"><a class="header-anchor" href="#守护进程"><span>守护进程</span></a></h1><p>若使用二进制文件部署，那么保持它在后台运行就需要你额外考虑了</p><h2 id="systemd" tabindex="-1"><a class="header-anchor" href="#systemd"><span>Systemd</span></a></h2><p><strong>前提条件</strong>：你所使用的系统具有该管理器</p><p>注册为系统服务：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/systemd/system/mrui.service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>填入：</p><div class="language-ini line-numbers-mode" data-highlighter="shiki" data-ext="ini" data-title="ini" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">[Unit]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">Description</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">mrui</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">After</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">network.target network-online.target</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">Requires</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">network-online.target</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">[Service]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">ExecStart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">/path/to/mrui</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">[Install]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">WantedBy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">multi-user.target</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置开机自启：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mrui</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>管理：</p><ul><li>查看状态：<code>systemctl status mrui</code></li><li>启动：<code>sudo systemctl start mrui</code></li><li>停止：<code>sudo systemctl stop mrui</code></li><li>重启：<code>sudo systemctl restart mrui</code></li></ul><h2 id="rc-common" tabindex="-1"><a class="header-anchor" href="#rc-common"><span>rc.common</span></a></h2><p><strong>前提条件</strong>：为<code>OpenWRT</code>系统，如小米路由器</p><p>注册为系统服务：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/init.d/mrui</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>填入：</p><div class="language-ini line-numbers-mode" data-highlighter="shiki" data-ext="ini" data-title="ini" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#!/bin/sh /etc/rc.common</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">START</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">80</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">STOP</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">90</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">start() {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">        service_start /path/to/mrui &amp;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">stop() {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">        service_stop /path/to/mrui</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>给该文件可执行权限</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/init.d/mrui</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>设置开机自启：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/etc/init.d/mrui</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>管理：</p><ul><li>启动：<code>/etc/init.d/mrui start</code></li><li>停止：<code>/etc/init.d/mrui stop</code></li><li>重启：<code>/etc/init.d/mrui restart</code></li></ul><h2 id="rc-service" tabindex="-1"><a class="header-anchor" href="#rc-service"><span>rc-service</span></a></h2><p><strong>前提条件</strong>：你所使用的系统具有该管理器，通常为<code>Alpine</code>系统</p><p>注册为系统服务：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/init.d/mrui</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>填入：</p><div class="language-ini line-numbers-mode" data-highlighter="shiki" data-ext="ini" data-title="ini" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#!/sbin/openrc-run</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">command</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/path/to/mrui&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">command_background</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">pidfile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/run/\${RC_SVCNAME}.pid&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>给该文件可执行权限</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/init.d/mrui</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>设置开机自启：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rc-update</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mrui</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> default</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>管理：</p><ul><li>查看状态：<code>sudo rc-service mrui status</code></li><li>启动：<code>sudo rc-service mrui start</code></li><li>停止：<code>sudo rc-service mrui stop</code></li><li>重启：<code>sudo rc-service mrui restart</code></li></ul><h2 id="nssm" tabindex="-1"><a class="header-anchor" href="#nssm"><span>Nssm</span></a></h2><p><strong>前提条件</strong>：<code>Windows</code>系统</p><ol><li><p>下载nssm：https://nssm.cc/download</p></li><li><p>解压压缩包，根据系统位数选择64或32位程序</p></li><li><p>打开命令行，运行<code>nssm install mrui</code>，打开程序配置界面</p></li><li><p>配置完成后关闭</p><p><img src="https://onep.hzchu.top/mount/pic/myself/2024/07/669c684114b41.png?fmt=webp" alt="image-20240721094534903" loading="lazy"></p><blockquote><p>Path是程序路径，在选中程序后会自动填写运行目录。Arguments里可以添加命令行参数</p></blockquote></li><li><p>执行<code>nssm start mrui</code>启动服务</p></li></ol><p>管理：</p><ul><li>启动：<code>nssm start mrui</code></li><li>停止：<code>nssm stop mrui</code></li><li>重启：<code>nssm restart mrui</code></li><li>删除服务：<code>nssm remove mrui</code></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Windows具有图形化的服务面板，也可以在“服务”里操作启停</p></div><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h2><p>在安装命令中添加<code>--restart=always</code>参数（在给出的命令中已经包括了）</p>`,44),l=[t];function h(r,d){return e(),s("div",null,l)}const k=i(n,[["render",h],["__file","guard.html.vue"]]),o=JSON.parse('{"path":"/more/guard.html","title":"守护进程","lang":"zh-CN","frontmatter":{"description":"守护进程 若使用二进制文件部署，那么保持它在后台运行就需要你额外考虑了 Systemd 前提条件：你所使用的系统具有该管理器 注册为系统服务： 填入： 设置开机自启： 管理： 查看状态：systemctl status mrui 启动：sudo systemctl start mrui 停止：sudo systemctl stop mrui 重启：su...","head":[["meta",{"property":"og:url","content":"https://mrui.hzchu.top/more/guard.html"}],["meta",{"property":"og:site_name","content":"Mirouter-UI"}],["meta",{"property":"og:title","content":"守护进程"}],["meta",{"property":"og:description","content":"守护进程 若使用二进制文件部署，那么保持它在后台运行就需要你额外考虑了 Systemd 前提条件：你所使用的系统具有该管理器 注册为系统服务： 填入： 设置开机自启： 管理： 查看状态：systemctl status mrui 启动：sudo systemctl start mrui 停止：sudo systemctl stop mrui 重启：su..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://onep.hzchu.top/mount/pic/myself/2024/07/669c684114b41.png?fmt=webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-26T07:39:31.000Z"}],["meta",{"property":"article:author","content":"thun888"}],["meta",{"property":"article:modified_time","content":"2024-07-26T07:39:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"守护进程\\",\\"image\\":[\\"https://onep.hzchu.top/mount/pic/myself/2024/07/669c684114b41.png?fmt=webp\\"],\\"dateModified\\":\\"2024-07-26T07:39:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"thun888\\",\\"url\\":\\"https://www.hzchu.top\\"}]}"]]},"headers":[{"level":2,"title":"Systemd","slug":"systemd","link":"#systemd","children":[]},{"level":2,"title":"rc.common","slug":"rc-common","link":"#rc-common","children":[]},{"level":2,"title":"rc-service","slug":"rc-service","link":"#rc-service","children":[]},{"level":2,"title":"Nssm","slug":"nssm","link":"#nssm","children":[]},{"level":2,"title":"Docker","slug":"docker","link":"#docker","children":[]}],"git":{"createdTime":1721537160000,"updatedTime":1721979571000,"contributors":[{"name":"thun888","email":"thun888@qq.com","commits":2}]},"readingTime":{"minutes":1.61,"words":484},"filePathRelative":"more/guard.md","localizedDate":"2024年7月21日","autoDesc":true}');export{k as comp,o as data};