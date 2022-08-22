function check_class(){
  n=document.form1.classnumber.value;

  if (!n) {
    alert('강의실 번호를 입력해주세요');
    document.form1.classnumber.focus();
    return;
  }
  if(1200 > n && n >= 1100){
    document.getElementById('result').innerHTML='<img src="https://w.namu.la/s/ef36bbd816a8a40c756c950052460b6c6e7922aa149103213e778d13f0adf694a6c33c8592479891917ab417fba4de89ba462a80771bfb1aa83d856a3958917b7533d3014a9cf580d17d25bfde2bb81669f8e920cf41e4dea724d705efbc52431087eb851c488aa6376057d2047eaa28" width="80%" alt="종합관"></img><br><br>종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">1층</span>';
  } else if(1300 > n && n >= 1200){
    document.getElementById('result').innerHTML='<img src="https://w.namu.la/s/ef36bbd816a8a40c756c950052460b6c6e7922aa149103213e778d13f0adf694a6c33c8592479891917ab417fba4de89ba462a80771bfb1aa83d856a3958917b7533d3014a9cf580d17d25bfde2bb81669f8e920cf41e4dea724d705efbc52431087eb851c488aa6376057d2047eaa28" width="80%" alt="종합관"></img><br><br>종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">2층 교양, 영어 강의실</span>';
  } else if(1400 > n && n >=1300){
    document.getElementById('result').innerHTML='<img src="https://w.namu.la/s/ef36bbd816a8a40c756c950052460b6c6e7922aa149103213e778d13f0adf694a6c33c8592479891917ab417fba4de89ba462a80771bfb1aa83d856a3958917b7533d3014a9cf580d17d25bfde2bb81669f8e920cf41e4dea724d705efbc52431087eb851c488aa6376057d2047eaa28" width="80%" alt="종합관"></img><br><br>종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">3층 교양, ICT 강의실</span>';
  } else if(1500 > n && n >=1400){
    document.getElementById('result').innerHTML='<img src="https://w.namu.la/s/ef36bbd816a8a40c756c950052460b6c6e7922aa149103213e778d13f0adf694a6c33c8592479891917ab417fba4de89ba462a80771bfb1aa83d856a3958917b7533d3014a9cf580d17d25bfde2bb81669f8e920cf41e4dea724d705efbc52431087eb851c488aa6376057d2047eaa28" width="80%" alt="종합관"></img><br><br>종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">4층 경제, 청지, 아동 강의실</span>';
  } else if(1600 > n && n >=1500){
    document.getElementById('result').innerHTML='<img src="https://w.namu.la/s/ef36bbd816a8a40c756c950052460b6c6e7922aa149103213e778d13f0adf694a6c33c8592479891917ab417fba4de89ba462a80771bfb1aa83d856a3958917b7533d3014a9cf580d17d25bfde2bb81669f8e920cf41e4dea724d705efbc52431087eb851c488aa6376057d2047eaa28" width="80%" alt="종합관"></img><br><br>종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">5층 법대 강의실</span>';
  } else if(1700 > n && n >=1600){
    document.getElementById('result').innerHTML='<img src="https://w.namu.la/s/ef36bbd816a8a40c756c950052460b6c6e7922aa149103213e778d13f0adf694a6c33c8592479891917ab417fba4de89ba462a80771bfb1aa83d856a3958917b7533d3014a9cf580d17d25bfde2bb81669f8e920cf41e4dea724d705efbc52431087eb851c488aa6376057d2047eaa28" width="80%" alt="종합관"></img><br><br>종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">6층 사과대, 법대 강의실</span>';
  } else if(1800 > n && n >=1700){
    document.getElementById('result').innerHTML='<img src="https://w.namu.la/s/ef36bbd816a8a40c756c950052460b6c6e7922aa149103213e778d13f0adf694a6c33c8592479891917ab417fba4de89ba462a80771bfb1aa83d856a3958917b7533d3014a9cf580d17d25bfde2bb81669f8e920cf41e4dea724d705efbc52431087eb851c488aa6376057d2047eaa28" width="80%" alt="종합관"></img><br><br>종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">7층 인문 강의실</span>';
  } else if(1900 > n && n >=1800){
    document.getElementById('result').innerHTML='<img src="https://w.namu.la/s/ef36bbd816a8a40c756c950052460b6c6e7922aa149103213e778d13f0adf694a6c33c8592479891917ab417fba4de89ba462a80771bfb1aa83d856a3958917b7533d3014a9cf580d17d25bfde2bb81669f8e920cf41e4dea724d705efbc52431087eb851c488aa6376057d2047eaa28" width="80%" alt="종합관"></img><br><br>종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">8층 인문 강의실</span>';
  } else if(2000 > n && n >=1900){
    document.getElementById('result').innerHTML='<img src="https://w.namu.la/s/ef36bbd816a8a40c756c950052460b6c6e7922aa149103213e778d13f0adf694a6c33c8592479891917ab417fba4de89ba462a80771bfb1aa83d856a3958917b7533d3014a9cf580d17d25bfde2bb81669f8e920cf41e4dea724d705efbc52431087eb851c488aa6376057d2047eaa28" width="80%" alt="종합관"></img><br><br>종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">9층 인문 강의실</span>';
  } else if(12000 > n && n >=11000){
    document.getElementById('result').innerHTML='<img src="https://w.namu.la/s/ef36bbd816a8a40c756c950052460b6c6e7922aa149103213e778d13f0adf694a6c33c8592479891917ab417fba4de89ba462a80771bfb1aa83d856a3958917b7533d3014a9cf580d17d25bfde2bb81669f8e920cf41e4dea724d705efbc52431087eb851c488aa6376057d2047eaa28" width="80%" alt="종합관"></img><br><br>종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">10층 대강당, 대학원</span>';
  }
  // 경상관
    else if(4100 > n && n >=4000){
    document.getElementById('result').innerHTML='<img src="https://w.namu.la/s/181d41588a4610ecf1b71ce738afb774dac1910f28c1a660d432e43d11c3ffec76ef750fcc7b22ccc41c791d551d9a5801ff2ea50011c3663b82a7979c28334b66319b5c621ad7794007fa7ccdd27b075692b3e6f021a98232b100d8aa79f17effd648308e76970a1a5b7ccae9eafb88" width="80%" alt="국제관"></img><br><br>국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">지하 1층</span>';
  } else if(4200 > n && n >=4100){
    document.getElementById('result').innerHTML='<img src="https://w.namu.la/s/181d41588a4610ecf1b71ce738afb774dac1910f28c1a660d432e43d11c3ffec76ef750fcc7b22ccc41c791d551d9a5801ff2ea50011c3663b82a7979c28334b66319b5c621ad7794007fa7ccdd27b075692b3e6f021a98232b100d8aa79f17effd648308e76970a1a5b7ccae9eafb88" width="80%" alt="국제관"></img><br><br>국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">1층</span>';
  } else if(4300 > n && n >=4200){
    document.getElementById('result').innerHTML='<img src="https://w.namu.la/s/181d41588a4610ecf1b71ce738afb774dac1910f28c1a660d432e43d11c3ffec76ef750fcc7b22ccc41c791d551d9a5801ff2ea50011c3663b82a7979c28334b66319b5c621ad7794007fa7ccdd27b075692b3e6f021a98232b100d8aa79f17effd648308e76970a1a5b7ccae9eafb88" width="80%" alt="국제관"></img><br><br>국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">2층</span>';
  } else if(4400 > n && n >=4300){
    document.getElementById('result').innerHTML='<img src="https://w.namu.la/s/181d41588a4610ecf1b71ce738afb774dac1910f28c1a660d432e43d11c3ffec76ef750fcc7b22ccc41c791d551d9a5801ff2ea50011c3663b82a7979c28334b66319b5c621ad7794007fa7ccdd27b075692b3e6f021a98232b100d8aa79f17effd648308e76970a1a5b7ccae9eafb88" width="80%" alt="국제관"></img><br><br>국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">3층</span>';
  } else if(4500 > n && n >=4400){
    document.getElementById('result').innerHTML='<img src="https://w.namu.la/s/181d41588a4610ecf1b71ce738afb774dac1910f28c1a660d432e43d11c3ffec76ef750fcc7b22ccc41c791d551d9a5801ff2ea50011c3663b82a7979c28334b66319b5c621ad7794007fa7ccdd27b075692b3e6f021a98232b100d8aa79f17effd648308e76970a1a5b7ccae9eafb88" width="80%" alt="국제관"></img><br><br>국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">4층</span>';
  } else if(4600 > n && n >=4500){
    document.getElementById('result').innerHTML='<img src="https://w.namu.la/s/181d41588a4610ecf1b71ce738afb774dac1910f28c1a660d432e43d11c3ffec76ef750fcc7b22ccc41c791d551d9a5801ff2ea50011c3663b82a7979c28334b66319b5c621ad7794007fa7ccdd27b075692b3e6f021a98232b100d8aa79f17effd648308e76970a1a5b7ccae9eafb88" width="80%" alt="국제관"></img><br><br>국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">5층</span>';
  } else if(4700 > n && n >=4600){
    document.getElementById('result').innerHTML='<img src="https://w.namu.la/s/181d41588a4610ecf1b71ce738afb774dac1910f28c1a660d432e43d11c3ffec76ef750fcc7b22ccc41c791d551d9a5801ff2ea50011c3663b82a7979c28334b66319b5c621ad7794007fa7ccdd27b075692b3e6f021a98232b100d8aa79f17effd648308e76970a1a5b7ccae9eafb88" width="80%" alt="국제관"></img><br><br>국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">6층</span>';
  } else if(4800 > n && n >=4700){
    document.getElementById('result').innerHTML='<img src="https://w.namu.la/s/181d41588a4610ecf1b71ce738afb774dac1910f28c1a660d432e43d11c3ffec76ef750fcc7b22ccc41c791d551d9a5801ff2ea50011c3663b82a7979c28334b66319b5c621ad7794007fa7ccdd27b075692b3e6f021a98232b100d8aa79f17effd648308e76970a1a5b7ccae9eafb88" width="80%" alt="국제관"></img><br><br>국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">7층</span>';
  } else if(4900 > n && n >=4800){
    document.getElementById('result').innerHTML='<img src="https://w.namu.la/s/181d41588a4610ecf1b71ce738afb774dac1910f28c1a660d432e43d11c3ffec76ef750fcc7b22ccc41c791d551d9a5801ff2ea50011c3663b82a7979c28334b66319b5c621ad7794007fa7ccdd27b075692b3e6f021a98232b100d8aa79f17effd648308e76970a1a5b7ccae9eafb88" width="80%" alt="국제관"></img><br><br>국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">8층</span>';
  } else if(4999 > n && n >=4900){
    document.getElementById('result').innerHTML='<img src="https://w.namu.la/s/181d41588a4610ecf1b71ce738afb774dac1910f28c1a660d432e43d11c3ffec76ef750fcc7b22ccc41c791d551d9a5801ff2ea50011c3663b82a7979c28334b66319b5c621ad7794007fa7ccdd27b075692b3e6f021a98232b100d8aa79f17effd648308e76970a1a5b7ccae9eafb88" width="80%" alt="국제관"></img><br><br>국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">9층</span>';
  }
  // 행정동
    else if(5520 > n && n >= 5510){
    document.getElementById('result').innerHTML='<img src="https://w.namu.la/s/5273d7261d090f094f0dd656cf96854345d0c75ec2c477132baec46eba82b5d8c6159e75a31287f9df3d7f6d61c4ea1d2f87436b91cbf8636e9822752f7fb9e9b9faac100806fc745dd667e7f4edaf0f1587b375229b2f190fab4d135bb289deed4a67d62f0295763868fa014da8234d" width="80%" alt="MCC"></img><br><br>행정동 (5번 건물)<br><br><span style="font-size: 24px;">5층 강당</span>';
  }
  // 방목학술정보관
    else if(n == 9114){
    document.getElementById('result').innerHTML='<img src="https://w.namu.la/s/1913e382dcab9b742b6e8b8bca59f31f5a3c968de37e7f053e3bbe6ab9b263f1524369ab78cfb27b99feb7b19c5cef582b593d399070dd64c2468e8b493cbcf41d05de7e3317372197bf6620e07a94cb1d990a3db240d9c809865d9f08881f2f04a7722ff13ccd9e36217c16a1e1c441" width="80%" alt="MCC"></img><br><br>방목학술정보관 (도서관, 9번 건물)<br><br><span style="font-size: 24px;">1층 국제회의장</span>';
  }
  // MCC
    else if(10200 > n && n >=10100){
    document.getElementById('result').innerHTML='<img src="https://w.namu.la/s/c78f7544e4fbe09725f053bd0a68fb4306fffbb282c79b90ea25ef22c7a4f4806ce6c2713ecbf0fe49a272176f1dfe918cf9e29af11b097aae34c4438e28e04362622144eb174ba436e6210cbe5b341dcb8e49c8131d629c0922c14d36b8d43bb166fea3aab6bd4718eb83faeca3ca3a" width="80%" alt="MCC"></img><br><br>MCC (10번 건물)<br><br><span style="font-size: 24px;">베리타스홀 1층</span>';
  } else if(10300 > n && n >=10200){
    document.getElementById('result').innerHTML='<img src="https://w.namu.la/s/c78f7544e4fbe09725f053bd0a68fb4306fffbb282c79b90ea25ef22c7a4f4806ce6c2713ecbf0fe49a272176f1dfe918cf9e29af11b097aae34c4438e28e04362622144eb174ba436e6210cbe5b341dcb8e49c8131d629c0922c14d36b8d43bb166fea3aab6bd4718eb83faeca3ca3a" width="80%" alt="MCC"></img><br><br>MCC (10번 건물)<br><br><span style="font-size: 24px;">베리타스홀 2층</span>';
  } else if(10400 > n && n >=10300){
    document.getElementById('result').innerHTML='<img src="https://w.namu.la/s/c78f7544e4fbe09725f053bd0a68fb4306fffbb282c79b90ea25ef22c7a4f4806ce6c2713ecbf0fe49a272176f1dfe918cf9e29af11b097aae34c4438e28e04362622144eb174ba436e6210cbe5b341dcb8e49c8131d629c0922c14d36b8d43bb166fea3aab6bd4718eb83faeca3ca3a" width="80%" alt="MCC"></img><br><br>MCC (10번 건물)<br><br><span style="font-size: 24px;">베리타스홀 3층</span>';
  } else if(10500 > n && n >=10400){
    document.getElementById('result').innerHTML='<img src="https://w.namu.la/s/c78f7544e4fbe09725f053bd0a68fb4306fffbb282c79b90ea25ef22c7a4f4806ce6c2713ecbf0fe49a272176f1dfe918cf9e29af11b097aae34c4438e28e04362622144eb174ba436e6210cbe5b341dcb8e49c8131d629c0922c14d36b8d43bb166fea3aab6bd4718eb83faeca3ca3a" width="80%" alt="MCC"></img><br><br>MCC (10번 건물)<br><br><span style="font-size: 24px;">베리타스홀 4층</span>';
  } else {
    alert('강의실 번호를 다시 확인해주세요!');
    document.form1.classnumber.value='';
    document.form1.classnumber.focus();
    return;
  }
}

function re(){
  document.getElementById('result').innerHTML='';
}
