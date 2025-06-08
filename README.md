# iPhone （免拔卡）解锁 TikTok + 换区 + 发布视频 + 直播 + 点赞评论

> 目录

* [TikTok](#TikTok)
* [準備工作](#準備工作)
* [Quantumult X](#Quantumult-X)
* [Loon](#Loon)
* [Surge](#Surge)
* [Shadowrocket](#Shadowrocket)
* [抓包降级](#抓包降级)
* [抖音無法觀看](#抖音)
* [抖音IP代理](#抖音IP代理)

---

### <a id="TikTok"> TikTok </a>

* iOS系统版本：18.5 Beta （支持向下兼容）
* TikTok Version : 39.7.0（前置操作：从 [iTunes for Windows V 12.6.5.3](https://secure-appldnld.apple.com/itunes12/091-87820-20180912-69177170-B085-11E8-B6AB-C1D03409AD2A5/iTunesSetup.exe) 抓包 TikTok Version 21.1.0 安装，登陆后观看视频、直播、评论、点赞、发布视频等模块都正常使用后，再从 App Store 升级至最新版方可使用！）
* iTunes 歷史版本: [下載鏈接直達蘋果官網](https://www.theiphonewiki.com/wiki/ITunes)
* TikTok TestFlight
* 下载方式：在 美区/日区/台区 App Store 搜索 TikTok 并下载 （港区已停止运营）
  
  * 支持功能：
  
  - [x] 换区
  - [x] 看视频
  - [x] 发布视频
  - [x] 点赞
  - [x] 评论
  - [x] TikTok直播

### <a id="準備工作"> 準備工作 </a>

- App Store 下载 TikTok
  
  * 美区/日区/台区/韩区等 Apple ID、密码 自备
- 自备 Quantumult X｜Loon｜Surge｜Shadowrocket
  
  * 可在美区/日区等 App Store 获取
- 自备代理，ss/ssr/vmess等

---

**特别说明**

1. 为什么要先卸载 TikTok，TikTok 会在第一次使用时触发限制，并导致之后无法通过 MiMt 解密。
2. 所以先配置好规则之后，然后在下载 TikTok，减少重定向的请求次数，降低风险，延长规则的寿命。
3. 为什么配置好之后还是无法使用，请检查软件的证书有没有安装，信任。
4. 或者是 Https 解密（MiMt）与重写（Rewrite）有没有开启。
5. 或者是软件是不是盗版，比如用共享 ID 下载的，有设备限制，是无法使用重写脚本功能的。

<span style="color:red">**如安装商店最新版本，则直接使用规则分流即可访使用TikTok。**</span>

---

### <a id="Quantumult-X"> Quantumult X </a>

**关于换区**

* 解锁并换区：将`CN`改为想看的国家/地区的2位`大写`英文简写，
  
  * 在`HTTP复写`中，将`CN`的替换值改为`SG`、`MO`、`TW`等即可换区

**操作步骤**

1、打开`Quantumult X`

2、开启**MitM**并**信任**Quantumult X证书：

* `设置` → `MitM` → 开启`MitM` → `生成密钥及证书` → 右上角点`保存` → `允许`安装描述文件 → `关闭` → 前往手机的`设置`，不在Quantumult X了 → 看到`已下载描述文件` → `安装` → 输入手机的解锁密码 → `安装` → `安装` → 前往手机的`设置` → `通用` → `关于本机` → `证书信任设置` → 找到`Quantumult X Custom Root Certificate…`点绿它以信任该根证书 → `继续`

**方法一：**

3、配置文件点击`编辑`找到`[rewrite_remote]`添加下面对应国家的复写

**日本**

```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Quantumult-X/TikTok-JP.conf, tag=TikTok, update-interval=86400, opt-parser=false, enabled=true
```

**台湾**

```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Quantumult-X/TikTok-TW.conf, tag=TikTok, update-interval=86400, opt-parser=false, enabled=true
```

**韩国**

```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Quantumult-X/TikTok-KR.conf, tag=TikTok, update-interval=86400, opt-parser=false, enabled=true
```

**美国**

```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Quantumult-X/TikTok-US.conf, tag=TikTok, update-interval=86400, opt-parser=false, enabled=true
```

**方法二：**

3、在`[rewrite_local]`中添加以下重写

```
(?<=_region=)CN(?=&) url 307 KR
(?<=&mcc_mnc=)4 url 307 2
^(https?:\/\/(tnc|dm)[\w-]+\.\w+\.com\/.+)(\?)(.+) url 302  $1$3
(?<=\d\/\?\w{7}_\w{4}=)1[6-9]..(?=.?.?&) url 307 17
```

3.1、在`[mitm]`中添加

```
hostname = *.tiktokv.com, *.byteoversea.com, *.tik-tokapi.com
```

4、找到`[filter_remote]`添加下句分流(无论使用方法一或是方法二，此分流都需要添加！)

```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Quantumult-X/TikTok.list, tag=TikTok, force-policy=TikTok, update-interval=86400, opt-parser=false, enabled=true
```

5、换区：在[rewrite_local]中添加下句重写，并将`CN`改为想看的国家/地区的2位`大写`英文简写 JP（日本）｜KR（韩国）｜UK（英国）｜US（美国）｜TW（台湾）

```
(?<=_region=)CN(?=&) url 307 CN
```

6、开启Quantumult X：前往Quantumult X的主页 → 找到`TikTok`策略 → 长按添加`节点` → TikTok愉快

---

### <a id="Loon"> Loon </a>

**操作步骤**

[一鍵安裝](https://www.nsloon.com/openloon/import?plugin=https://raw.githubusercontent.com/Semporia/TikTok-Unlock/refs/heads/master/Loon/TikTok.plugin)

1、打开`Loon`

2、点击`插件`在右上角找到`➕`进去在URL添加想看的对应国家链接,tag处自定义；PROXY 选择TikTok分流策略即可。

**日本**

```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Loon/TikTok-JP.plugin
```

**台湾**

```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Loon/TikTok-TW.plugin
```

**韩国**

```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Loon/TikTok-KR.plugin
```

**美国**

```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Loon/TikTok-US.plugin
```

3、在`[Remote Rule]`下面添加TikTok分流规则，示例如下：

```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Loon/TikTok.list, tag=TikTok, policy=TikTok, update-interval=86400, enabled=true
```

---

### <a id="Surge"> Surge </a>

**操作步骤**

1、打开`Surge`

2、点击`模块`进去添加想看国家的对应模块。

**日本**

```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Surge/TiKTok-JP.sgmodule
```

**台湾**

```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Surge/TiKTok-TW.sgmodule
```

**韩国**

```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Surge/TiKTok-KR.sgmodule
```

**美国**

```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Surge/TiKTok-US.sgmodule
```

3、添加以下`分流`

```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Surge/TikTok.list
```

---

### <a id="Shadowrocket"> Shadowrocket </a>

**操作步骤**

1、打开`Shadowrocket`

2、开启**HTTPS解密**并**安装、信任**Shadowrocket证书：

* `配置` → 你使用的配置文件后的`i` → `HTTPS解密` → 开启`HTTPS解密` → `生成新的CA证书` → 允许 → 返回点击`安装证书`，并点击`允许` → 前往手机的`设置`，不是Shadowrocket的 → 看到`已下载描述文件` → `安装` → 输入手机的解锁密码 → `安装` → `安装` → 前往手机的`设置` → `通用` → `关于本机` → `证书信任设置` → 找到`Shadowrocket…`点绿它以信任该根证书 → `继续`

3、点击`配置` → `模块` → 右上角加号，添加想看国家的对应模块。

**日本**

```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Shadowrocket/TiKTok-JP.conf
```

**台湾**

```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Shadowrocket/TiKTok-TW.conf
```

**韩国**

```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Shadowrocket/TiKTok-KR.conf
```

**美国**

```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Shadowrocket/TiKTok-US.conf
```

4、添加以下`分流`，点击`配置` → 你使用的配置后的`i` → `规则` → 右上角加号 → `类型` → 选择`RULE-SET` → 策略 → 选择`PROXY`或者其他你想使用的策略（一般是对应地区的代理服务器节点） → 规则集URL文本框内填写

```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Shadowrocket/TikTok.list
```

---

### <a id="抓包降级"> 抓包降级 TikTok 21.1.0 </a>

* [教程](https://semporia.github.io/iTunes.html)
* [备用地址](https://semporia.blogspot.com/2022/06/tiktok-2110.html)

---

### <a id="抖音"> 抖音無法觀看 </a>

在hostname中加上以下兩條

```
-*snssdk.com, -*amemv.com
```

---

### <a id="抖音IP代理"> 抖音IP代理 </a>

订阅分流

```
https://raw.githubusercontent.com/Semporia/Quantumult-X/master/Filter/DouYin.list
```


