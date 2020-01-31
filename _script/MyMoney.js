/*
[rewrite_local]
^https?:\/\/api\.feidee\.net\/v1\/pay\/vip url script-response-body https://raw.githubusercontent.com/eegod/Scripts/master/_scripts/MyMoney.js

hostname = api.feidee.net,
*/

var obj = JSON.parse($response.body);
obj = {
  "vip_type": [
    2
  ],
  "out_of_trial": 1,
  "device": 0,
  "auto_renew_status": 0,
  "is_show_coupon": false,
  "expire_date": 3787031138000
},
$done({body: JSON.stringify(obj)});
