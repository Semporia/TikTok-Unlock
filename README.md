# iPhone （免拔卡）解锁 TikTok + 换区 + 发布视频 + 直播 + 点赞评论

> 目录

* [TikTok](#TikTok)
* [准备工作](#准备工作)
* [Quantumult X](#Quantumult%20X)
* [Loon](#Loon)
* [Surge](#Surge)
* [Shadowrocket](#Shadowrocket)
* [抓包降级](#抓包降级)
* [抖音無法觀看](#抖音)

---

### <a id="TikTok"> TikTok </a>

* iOS系统版本：15.4 （支持向下兼容）
* TikTok版本：v23.4.0（需要从抓包的21.1.0升级方可使用）
* TikTok TestFlight (支持)
* 下载方式：在 美区/日区/台区 App Store搜索 TikTok 并下载 （港区已停止运营）
    * 支持功能：

     - [x] 换区
     - [x] 看视频
     - [x] 发布视频
     - [x] 点赞
     - [x] 评论
     - [x] TikTok直播


### <a id="准备工作"> 准备工作 </a>


- 亚洲区 Appstore 下载 TikTok

    * 美区/日区/台区/韩区等 Apple ID、密码 自备


- 自备 Quantumult X｜Loon｜Surge｜Shadowrocket
 
     * 可在美区/日区等 App Store 获取

- 自备代理，ss/ssr/vmess等  

---

### <a id="Quantumult X"> Quantumult X </a>

**关于换区**



* 解锁并换区：将`CN`改为想看的国家/地区的2位`大写`英文简写，

    * 在`HTTP复写`中，将`CN`的替换值改为`SG`、`MO`、`TW`等即可换区


**操作步骤**

1、打开`Quantumult X`  

2、开启**MitM**并**信任**Quantumult X证书，iOS 14、iOS 13和iOS 12操作略有不同：
    * `设置`--)`MitM`--)开启`MitM`--)`生成密钥及证书`--)右上角点`保存`--)`允许`安装描述文件--)`关闭`--)前往手机的`设置`，不在Quantumult X了--)看到`已下载描述文件`--)`安装`--)输入手机的解锁密码--)`安装`--)`安装`--)前往手机的`设置`--)`通用`--)`关于本机`--)`证书信任设置`--)找到`Quantumult X Custom Root Certificate…`点绿它以信任该根证书--)`继续`  

**方法一：**

3、配置文件点击`编辑`找到`[rewrite_remote]`添加下面对应国家的复写


**日本**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Quantumult%20X/TikTok-JP.conf, tag=TikTok, update-interval=86400, opt-parser=false, enabled=true
```

**台湾**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Quantumult%20X/TikTok-TW.conf, tag=TikTok, update-interval=86400, opt-parser=false, enabled=true
```

**韩国**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Quantumult%20X/TikTok-KR.conf, tag=TikTok, update-interval=86400, opt-parser=false, enabled=true
```

**美国**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Quantumult%20X/TikTok-US.conf, tag=TikTok, update-interval=86400, opt-parser=false, enabled=true
```


**方法二：**

3、在`[rewrite_local]`中添加以下重写

```
(?<=_region=)CN(?=&) url 307 JP
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
https://raw.githubusercontent.com/Semporia/Quantumult-X/master/Filter/TikTok.list, tag=TikTok, force-policy=TikTok, update-interval=86400, opt-parser=false, enabled=true
```

5、换区：在[rewrite_local]中添加下句重写，并将`CN`改为想看的国家/地区的2位`大写`英文简写 JP（日本）｜KR（韩国）｜UK（英国）｜US（美国）｜TW（台湾）


```
(?<=_region=)CN(?=&) url 307 CN
```

6、开启Quantumult X：前往Quantumult X的主页--）找到`TikTok`策略--）长按添加`节点`--)TikTok愉快

**特别说明**

1、为什么要先卸载TikTok，TikTok会在第一次使用时触发限制，并导致之后无法通过MiMt解密  
2、所以先配置好规则之后，然后在下载TikTok，减少重定向的请求次数，降低风险，延长规则的寿命  
3、为什么配置好之后还是无法使用，请检查软件的证书有没有安装，信任，  
4、或者是Https解密（MiMt）与重写（Rewrite）有没有开启  
5、或者是软件是不是盗版，比如用共享ID下载的Quantumult X，有设备限制，是无法使用重写脚本功能的  

---

### <a id="Loon"> Loon </a>


**操作步骤**

1、打开`Loon`  

2、点击`插件`在右上角找到`➕`进去在URL添加想看的对应国家链接,tag处自定义；PROXY 选择TikTok分流策略即可。

**日本**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Loon/TikTokJP.plugin
```

**台湾**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Loon/TikTokTW.plugin
```

**韩国**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Loon/TikTokKR.plugin
```

**美国**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Loon/TikTokUS.plugin
```

3、在`[Remote Rule]`下面添加TikTok分流规则，示例如下：

```
https://raw.githubusercontent.com/Semporia/Loon/master/Rule/TikTok.list, tag=TikTok, policy=TikTok, update-interval=86400, enabled=true
```

---

### <a id="Surge"> Surge </a>


**操作步骤**

1、打开`Surge`  

2、点击`模块`进去添加想看国家的对应模块。

**日本**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Surge/TiKok-JP.sgmodule
```

**台湾**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Surge/TiKok-TW.sgmodule
```

**韩国**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Surge/TiKok-KR.sgmodule
```

**美国**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Surge/TiKok-US.sgmodule
```

3、添加以下`分流`

```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Surge/TikTok.list
```

---

### <a id="Shadowrocket"> Shadowrocket </a>


**操作步骤**

1、打开`Shadowrocket`  

2、点击`配置`进去添加想看国家的对应模块。

**日本**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Shadowrocket/TiKok-JP.conf
```

**台湾**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Shadowrocket/TiKok-TW.conf
```

**韩国**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Shadowrocket/TiKok-KR.conf
```

**美国**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Shadowrocket/TiKok-US.conf
```

3、添加以下`分流`

```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Shadowrocket/TikTok.list
```

---
### <a id="抓包降级"> 抓包降级 TikTok 21.1.0 </a>
**支持系统**  
* windows 11/windows 10/windows 8/windows 7（由于使用了 Fiddler 库，所以需要.Net 环境）

**使用方法**  

**一、直接搜索方式**
* 搜索 APP，双击选择。  
* 双击选择要下载的版本。  
* 在 iTunes 中下载即可。  
![Image text](https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/iOS抓包/1.png)
![Image text](https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/iOS抓包/2.png)
![Image text](https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/iOS抓包/3.png)

**二、复制 APP 链接方式**
* 在 iTunes 下载按钮右侧下拉菜单中，选择【复制链接】。  
* 双击选择要下载的版本。  
* 在 iTunes 中下载即可。  

**常见问题**

**问：iTunes 账号无法登录成功**
* 请先关闭本工具，再进行 iTunes 登录操作。  
* 登录成功后，再打开本工具即可。  

**问：iTunes 对电脑进行授权时，授权不了，反复授权**
* 关闭本工具，再进行授权即可。  

**问：搜不到 APP 历史版本号？（以下方法 100%可解决）**
* 先不要拦截，在 iTunes 商店中下载此软件，等待下载完成。  
* 在本工具中【安装管理】下找到对应 IPA 安装包，右键选择【查找版本 ID】。  
* 即可列出软件所有历史版本 ID，版本号按新版到旧版排序。  
* PS：暂时没有通过版本 ID，查版本号的接口，所以抓下来，看吧。  

**问：iTunes 一直显示正在下载...**
* iTunes 先取消下载。  
* 抓包工具【停止拦截】，再点击 iTunes【继续下载】。  

**问：下载完 APP，安装到手机，打开闪退。**
* 先在手机中卸载该 APP。  
* 使用下载此 App 的账号，登录 App Store，在 App Store 中随便下载一个应用，不要卸载。  
* 使用同步助手，重新安装。（如果仍闪退，尝试覆盖安装）  

**问：导入伪旧版 App 后，iTunes 未检测到更新。**
* iTunes 更新列表页面下，按 F5 即可。  
* 如上述方法未解决，删除当列表所有文件，保留文件，再点击右下角检测更新按钮。  

**问：“已停止供货”的 APP 怎么抓取？（已失效）**
* 取消拦截，下载该软件最新版。  
* 本助手里切换到【安装管理】，右键 APP，选择【伪装旧版 APP】。  
* 双击【\*\_伪装版.ipa】（或右键，在文件夹中打开），将 APP 拖动到 iTunes 资料库，替换，检查更新，该软件变为更新状态。  
* 【开始拦截】，iTunes 中更新该软件，即可正常下载该版本。  

**下载地址**  
* [iOS任意版本号APP下载v5.1](https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/iOS抓包/iOS旧版应用下载v5.1.exe)

**iTunes v12.6.5.3（最后一个带 AppStore 的版本）**
* 官方直链：  
* [64 位下载](https://secure-appldnld.apple.com/itunes12/091-87819-20180912-69177170-B085-11E8-B6AB-C1D03409AD2A6/iTunes64Setup.exe)  
* [32 位下载](https://secure-appldnld.apple.com/itunes12/091-87820-20180912-69177170-B085-11E8-B6AB-C1D03409AD2A5/iTunesSetup.exe)

**[视频教程](https://www.bilibili.com/video/BV1VQ4y1M77t)**

---
### <a id="抖音"> 抖音無法觀看 </a>

在hostname中加上以下兩條
```
-*snssdk.com, -*amemv.com
```
