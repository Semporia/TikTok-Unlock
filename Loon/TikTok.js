let keyus={日本: "JP", 韓國: "KR", 英國:"UK", 美國:"US", 台灣:"TW", 香港:"HK", 新加坡:"SG", 法國:"FR", 馬來西亞:"MY", 菲律賓:"PH", 泰國:"TH", 自行錄入:"inkey"},url = $request.url,lk = "",loc = "";
if (typeof $argument !== 'undefined' && $argument !== "") {loc = this.$argument ?? "KR";} else {lk = $persistentStore.read("TikTok 解鎖區域");loc = keyus[lk] || "KR";if(loc == "inkey"){inkeys = $persistentStore.read("自行錄入區域代碼[可選]");loc = inkeys;}};
if (/(tnc|dm).+\.[^\/]+\.com\/\w+\/v\d\/\?/.test(url)) {
  url = url.replace(/\/\?/g,'');
  const response = {
    status: 302,
    headers: {Location: url},
  };
  $done({response});
} else if (/_region=CN&|&mcc_mnc=4/.test(url)) {
  url = url.replace(/_region=CN&/g,`_region=${loc}&`).replace(/&mcc_mnc=4/g,"&mcc_mnc=2");
  const response = {
    status: 307,
    headers: {Location: url},
  };
  $done({response});
} else {$done({})};