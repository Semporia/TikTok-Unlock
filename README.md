# 解锁TikTok+换区+发视频+无水印下载+直播(iPhone)

### 目录

* [支持的TikTok功能](#支持的TikTok功能)
* [准备工作](#准备工作)
* [关于换区](#关于换区)
* [操作步骤](#操作步骤)

### 支持的TikTok功能

***
* 美区TikTok
    * 下载方式：在美区App Store搜索 tiktok 并下载
    * 支持功能：
    * - [ ] 换区不太灵
    * - [x] 看视频
    * - [ ] 能否发视频，不确定（我发视频，提示视频在审核中）
    * - [x] 点赞
    * - [x] 评论
    * - [x] 部分账号能看TikTok直播
    * TikTok版本：v16.2.0
    * iOS系统版本：13.5.5，其他版本请自行测试是否可行

### 准备工作

***

* - [x] 美区Appstore下载TikTok
           
        * 美区Apple ID、密码 自备
            

* - [x] 自备[Quantumult x]
           
        * 可在美区App Store获取
    

* - [x] 自备代理，ss/ssr/vmess等

### 关于换区

***

* 解锁并换区：将`CN`改为想看的国家/地区的2位`大写`英文简写，

    * 在`HTTP复写`中，将`CN`的替换值改为`SG`、`MO`、`TW`等即可换区


### 操作步骤



1. 打开`Quantumult X`


2. 开启**MitM**并**信任**Quantumult X证书，iOS13和iOS12操作略有不同：
    * `设置`--)`MitM`--)开启`MitM`--)`生成密钥及证书`--)右上角点`保存`--)`允许`安装描述文件--)`关闭`--)前往手机的`设置`，不在Quantumult X了--)看到`已下载描述文件`--)`安装`--)输入手机的解锁密码--)`安装`--)`安装`--)前往手机的`设置`--)`通用`--)`关于本机`--)`证书信任设置`--)找到`Quantumult Custom Root Certificate…`点绿它以信任该根证书--)`继续`  

3. 配置文件点击`编辑`找到`[rewrite_remote]`添加下句重写

        https://raw.githubusercontent.com/Semporia/Quantumult-X/master/Rewrite/Rewrite.conf, tag=DivineEngine Rewrite, update-interval=86400, opt-parser=false, enabled=true

4. 找到`[filter_remote]`添加下句重写

        https://raw.githubusercontent.com/Semporia/Quantumult-X/master/Filter/TikTok.list, tag=TikTok, force-policy=TikTok, update-interval=86400, opt-parser=false, enabled=true


5. 找到`[rewrite_local]`添加以下代码

        (?<=(carrier|sys)_region=)CN url 307 JP
           
        (?<=version_code=)\d{1,}.\d{1}\.\d{1} url 307 14.0.0


6. 找到`hostname`添加

        hostname = *.musical.ly, *.tiktokv.com,*.tiktokcdn.com, api*.amemv.com, aweme*.snssdk.com 
   
7. 开启Quantumult X：前往Quantumult X的主页--）找到`TikTok`策略--）长按添加`节点`--)TikTok愉快
