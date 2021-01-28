# iPhone 解锁 TikTok + 换区 + 发布视频 + 直播 + 点赞评论

> 目录

* [TikTok](#TikTok)
* [准备工作](#准备工作)
* [Quantumult X](#Quantumult)
* [𝐒𝐡𝐚𝐝𝐨𝐰𝐫𝐨𝐜𝐤𝐞𝐭](#𝐒𝐡𝐚𝐝𝐨𝐰𝐫𝐨𝐜𝐤𝐞𝐭)

---
### <a id="TikTok"> TikTok </a>

* iOS系统版本：14.4 （18D52）
* TikTok版本：v18.4.5（1845090）
* 下载方式：在 日区/港区/台区 App Store搜索 tiktok 并下载
	* 支持功能：

     - [x] 换区
     - [x] 看视频
     - [x] 发布视频
     - [x] 点赞
     - [x] 评论
     - [x] TikTok直播


### <a id="准备工作"> 准备工作 </a>


- 日区/港区/台区 Appstore 下载 TikTok

    * 日区/港区/台区 Apple ID、密码 自备


- 自备 Quantumult X｜Loon｜Surge｜𝐒𝐡𝐚𝐝𝐨𝐰𝐫𝐨𝐜𝐤𝐞𝐭
 
     * 可在美区 App Store 获取

- 自备代理，ss/ssr/vmess等  

---
### <a id="Quantumult X"> Quantumult X </a>

**关于换区**



* 解锁并换区：将`CN`改为想看的国家/地区的2位`大写`英文简写，

    * 在`HTTP复写`中，将`CN`的替换值改为`SG`、`MO`、`TW`等即可换区


**操作步骤**

1. 打开`Quantumult X`  

2. 开启**MitM**并**信任**Quantumult X证书，iOS 14、iOS 13和iOS 12操作略有不同：
    * `设置`--)`MitM`--)开启`MitM`--)`生成密钥及证书`--)右上角点`保存`--)`允许`安装描述文件--)`关闭`--)前往手机的`设置`，不在Quantumult X了--)看到`已下载描述文件`--)`安装`--)输入手机的解锁密码--)`安装`--)`安装`--)前往手机的`设置`--)`通用`--)`关于本机`--)`证书信任设置`--)找到`Quantumult X Custom Root Certificate…`点绿它以信任该根证书--)`继续`  

3. 配置文件点击`编辑`找到`[rewrite_remote]`添加下面的两条重写

```
https://raw.githubusercontent.com/Semporia/Quantumult-X/master/Rewrite/Rewrite.conf, tag=DivineEngine Rewrite, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/Semporia/Quantumult-X/master/Rewrite/TikTok.conf, tag=TikTok, update-interval=86400, opt-parser=false, enabled=true
```

4. 找到`[filter_remote]`添加下句分流规则

```
https://raw.githubusercontent.com/Semporia/Quantumult-X/master/Filter/TikTok.list, tag=TikTok, force-policy=TikTok, update-interval=86400, opt-parser=false, enabled=true
```

5. 开启Quantumult X：前往Quantumult X的主页--）找到`TikTok`策略--）长按添加`节点`--)TikTok愉快

---

### <a id="𝐒𝐡𝐚𝐝𝐨𝐰𝐫𝐨𝐜𝐤𝐞𝐭"> 𝐒𝐡𝐚𝐝𝐨𝐰𝐫𝐨𝐜𝐤𝐞𝐭 </a>

**操作步骤**

1. 生成证书-安装证书-信任证书  
2. 配置-编辑纯文本  
3. 配置文件点击`编辑`找到`[URL Rewrite]`添加下句重写

```
(?<=_region=)CN(?=&) US 307
(?<=&mcc_mnc=)4 2 307
^(https?:\/\/dm[\w-]+\.\w+\.com\/.+)(\?)(.+) $1$3 302
(^https?:\/\/*\.\w{4}okv.com\/.+&.+)(\d{2}\.3\.\d)(.+) $118.0$3 302

ctier=[A-Z] ctier=A 302
^https:\/\/[\s\S]*\.googlevideo\.com/.*&(oad|ctier) _ REJECT
```

4. 找到 `[MITM]`添加
 
```
hostname = *.tiktokv.com, *.byteoversea.com, *.tik-tokapi.com, *.googlevideo.com
```

提示：
有需要换区的，将[URL Rewrite]中的US换成JP/UK/TW/KR即可。
