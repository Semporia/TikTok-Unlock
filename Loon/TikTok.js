
let keyus={台灣: "TW", 日本: "JP", 韓國: "KR", 泰國: "TH", 越南: "VN", 英國: "UK", 法國: "FR", 德國: "DE", 美國: "US", 巴西: "BR", 俄羅斯: "RU", 墨西哥: "MX", 土耳其: "TR", 西班牙: "ES", 阿根廷: "AR", 新加坡: "SG", 菲律賓: "PH", 馬來西亞: "MY"},
lk = $persistentStore.read("解鎖區域"),loc = keyus[lk] || "KR",url = $request.url;
// if(loc == "inkey"){
//   inkeys = $persistentStore.read("手動錄入[可選]");
//   loc = inkeys
// }
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
} else {
  $done({})
}
