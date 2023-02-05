# iPhone (no need to pull out SIM) unlock TikTok + change areas + post videos + live streaming + comments

> Catalog

* [TikTok](#TikTok)
* [Preparation](#Preparation)
* [Quantumult X](#Quantumult-X)
* [Loon](#Loon)
* [Surge](#Surge)
* [Shadowrocket](#Shadowrocket)
* [How to install specific TikTok version](#How-to-install-specific-TikTok-version)
* [Can't watch Douyin](#Douyin)
* [Douyin IP Rules](#Douyin-IP)

---

### <a id="TikTok"> TikTok </a>

* iOS system version: 16.3 (supports backward compatibility)
* TikTok Version : 27.9.0 (pre-condition: get a TikTok Version 21.1.0 from [iTunes for Windows V 12.6.5.3](https://pan.baidu.com/s/1gLKF-W_GFhYgEYRP8yMA8g?pwd=Code) Install, log in, watch some videos and then upgrade to the latest version from the App Store.)
* TikTok TestFlight
* Download method: Search for TikTok in the US/Japan/Taiwan App Store and download it (Hong Kong area has ceased operation)
     * Support functions:
      
     - [x] Change region
     - [x] Watch video
     - [x] Post video
     - [x] Likes
     - [x] Comments
     - [x] TikTok Live

### <a id="Preparation"> Preparation </a>


- App Store Download TikTok

    * U.S./Japanese/Taiwanese/Korean etc.

- Install Quantumult X｜Loon｜Surge｜Shadowrocket
 
    * Available in App Stores such as US/JP

- Start ss/ssr/vmess proxy 

---

**Special Note**

1. You must uninstall TikTok before setup proxy, otherwise TikTok will trigger the restriction on the first use and cause the inability to decrypt by MiMt afterwards.  
2. So first configure the rules, then download TikTok, reduce the number of redirect requests, reduce the risk and extend the life of the rules.  
3. If  after configuration TikTok is still not available, please check whether the software certificate is installed and trusted.
4. Check whether Https decryption (MiMt) and rewriting (Rewrite) is turned on.   

---

### <a id="Quantumult X"> Quantumult-X </a>

**How to change viewing area**


*  Unlock and change regions: change `CN` to the 2-digit `capital` English abbreviation of the country/region you want to see,

* In `HTTP Replication`, change the replacement value of `CN` to `SG`, `MO`, `TW`, etc. to change the area


**Steps**

1. Open`Quantumult X`  

2. Enable **MitM** and **trust** the Quantumult X certificate:
      `Settings` → `MitM` → Open `MitM` → `Generate key and certificate` → Click `Save` in the upper right corner → `Allow` to install the description file → `Close` → Go to `Settings` of the phone, not in Quantumult X Yes → see `Downloaded description file` → `Install` → enter the unlock password of the phone → `Install` → `Install` → go to `Settings` of the phone → `General` → `About this machine` → `Certificate trust settings ` → Find `Quantumult X Custom Root Certificate...` click green to trust the root certificate → `Continue`  

**First method：**

3. Click `Edit` on the configuration file to find `[rewrite_remote]` and add the copy corresponding to the country below


**Japan**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Quantumult-X/TikTok-JP.conf, tag=TikTok, update-interval=86400, opt-parser=false, enabled=true
```

**Taiwan**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Quantumult-X/TikTok-TW.conf, tag=TikTok, update-interval=86400, opt-parser=false, enabled=true
```

**South Korea**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Quantumult-X/TikTok-KR.conf, tag=TikTok, update-interval=86400, opt-parser=false, enabled=true
```

**U.S.**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Quantumult-X/TikTok-US.conf, tag=TikTok, update-interval=86400, opt-parser=false, enabled=true
```


**Method 2：**

3. Add the following rewrites in `[rewrite_local]`

```
(?<=_region=)CN(?=&) url 307 KR
(?<=&mcc_mnc=)4 url 307 2
^(https?:\/\/(tnc|dm)[\w-]+\.\w+\.com\/.+)(\?)(.+) url 302  $1$3
(?<=\d\/\?\w{7}_\w{4}=)1[6-9]..(?=.?.?&) url 307 17
```

3.1. Add in `[mitm]`

```
hostname = *.tiktokv.com, *.byteoversea.com, *.tik-tokapi.com
```

4. Find `[filter_remote]` and add the following rules (regardless of using method 1 or method 2, this rules needs to be added!)

```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Quantumult-X/TikTok.list, tag=TikTok, force-policy=TikTok, update-interval=86400, opt-parser=false, enabled=true
```

5. Change region: Add the following sentence to rewrite in [rewrite_local], and change `CN` to the 2-digit `capital` English abbreviation JP (Japan)｜KR (Korea)｜UK (United Kingdom) of the country/region you want to see )｜US (United States)｜TW (Taiwan)


```
(?<=_region=)CN(?=&) url 307 CN
```

6. Open Quantumult X: Go to the homepage of Quantumult X → find the `TikTok` rules → long press to add `node` → Happy TikTok



---

### <a id="Loon"> Loon </a>


**Steps**

1. Open`Loon`  

2. Click `Plugins`, find `➕` in the upper right corner, add the corresponding country link you want to see in the URL, customize the tag; select the TikTok diversion strategy for PROXY.

**Japan**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Loon/TikTok-JP.plugin
```

**Taiwan**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Loon/TikTok-TW.plugin
```

**South Korea**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Loon/TikTok-KR.plugin
```

**U.S.**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Loon/TikTok-US.plugin
```

3. Add rules in the`[Remote Rule]` menu：

```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Loon/TikTok.list, tag=TikTok, policy=TikTok, update-interval=86400, enabled=true
```

---

### <a id="Surge"> Surge </a>


**Steps**

1. Open`Surge`  

2. Click `Module` to enter and add the corresponding module of the country you want to see.


**Japan**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Surge/TiKTok-JP.sgmodule
```

**Taiwan**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Surge/TiKTok-TW.sgmodule
```

**South Korea**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Surge/TiKTok-KR.sgmodule
```

**U.S.**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Surge/TiKTok-US.sgmodule
```

3. Add the following `Rule`

```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Surge/TikTok.list
```

---

### <a id="Shadowrocket"> Shadowrocket </a>


**Steps**

1. Open`Shadowrocket`  

2. Enable **HTTPS decryption** and **install and trust** the Shadowrocket certificate:
    `Config` → `i` after the configuration file you use → `HTTPS Decryption` → Enable `HTTPS Decryption` → `Generate a new CA certificate` → Allow → Go back and click `Install Certificate`, and click `Allow` → Go to `Settings` of the phone, not Shadowrocket → see `Downloaded description file` → `Install` → enter the unlock code of the phone → `Install` → `Install` → go to `Settings` of the phone → `General` → ` About This Device` → `Certificate Trust Settings` → Find `Shadowrocket...` click green to trust the root certificate → `Continue`  

3. Click `Config` → `Modules` → the plus sign in the upper right corner, and add the corresponding module of the country you want to see.

**Japan**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Shadowrocket/TiKTok-JP.conf
```

**Taiwan**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Shadowrocket/TiKTok-TW.conf
```

**South Korea**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Shadowrocket/TiKTok-KR.conf
```

**U.S.**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Shadowrocket/TiKTok-US.conf
```

4. Add the following `Rule`, click `configuration` → `i` after the configuration you use → `rule` → plus sign in the upper right corner → `type` → select `RULE-SET` → strategy → select `PROXY` or Other strategies you want to use (usually the proxy server node in the corresponding region) → fill in the rule set URL text box

```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Shadowrocket/TikTok.list
```

---
### <a id="How-to-install-specific-TikTok-version"> How to install TikTok 21.1.0 </a>

* [tutorial](https://semporia.github.io/iTunes.html)
* [alternative link](https://semporia.blogspot.com/2022/06/tiktok-2110.html)

---
### <a id="Douyin"> Can't watch Douyin </a>

Add the following two lines to hostname
```
-*snssdk.com, -*amemv.com
```

---
### <a id="Douyin-IP"> Douyin IP Rules </a>

Subscription streaming
```
https://raw.githubusercontent.com/Semporia/Quantumult-X/master/Filter/DouYin.list
```
