function check_class(){
  n=document.form1.classnumber.value;

  if (!n) {
    alert('강의실 번호를 입력해주세요');
    document.form1.classnumber.focus();
    return;
  }
  if(1200 > n && n >= 1100){
    document.getElementById('result').innerHTML='<img src="https://github.com/ssuho/mju/blob/main/image/1.JPG?raw=true" width="80%" alt="종합관"></img><br><br>종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">1층</span>';
  } else if(1300 > n && n >= 1200){
    document.getElementById('result').innerHTML='<img src="https://github.com/ssuho/mju/blob/main/image/1.JPG?raw=true" width="80%" alt="종합관"></img><br><br>종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">2층 교양, 영어 강의실</span>';
  } else if(1400 > n && n >=1300){
    document.getElementById('result').innerHTML='<img src="https://github.com/ssuho/mju/blob/main/image/1.JPG?raw=true" width="80%" alt="종합관"></img><br><br>종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">3층 교양, ICT 강의실</span>';
  } else if(1500 > n && n >=1400){
    document.getElementById('result').innerHTML='<img src="https://github.com/ssuho/mju/blob/main/image/1.JPG?raw=true" width="80%" alt="종합관"></img><br><br>종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">4층 경제, 청지, 아동 강의실</span>';
  } else if(1600 > n && n >=1500){
    document.getElementById('result').innerHTML='<img src="https://github.com/ssuho/mju/blob/main/image/1.JPG?raw=true" width="80%" alt="종합관"></img><br><br>종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">5층 법대 강의실</span>';
  } else if(1700 > n && n >=1600){
    document.getElementById('result').innerHTML='<img src="https://github.com/ssuho/mju/blob/main/image/1.JPG?raw=true" width="80%" alt="종합관"></img><br><br>종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">6층 사과대, 법대 강의실</span>';
  } else if(1800 > n && n >=1700){
    document.getElementById('result').innerHTML='<img src="https://github.com/ssuho/mju/blob/main/image/1.JPG?raw=true" width="80%" alt="종합관"></img><br><br>종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">7층 인문 강의실</span>';
  } else if(1900 > n && n >=1800){
    document.getElementById('result').innerHTML='<img src="https://github.com/ssuho/mju/blob/main/image/1.JPG?raw=true" width="80%" alt="종합관"></img><br><br>종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">8층 인문 강의실</span>';
  } else if(2000 > n && n >=1900){
    document.getElementById('result').innerHTML='<img src="https://github.com/ssuho/mju/blob/main/image/1.JPG?raw=true" width="80%" alt="종합관"></img><br><br>종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">9층 인문 강의실</span>';
  } else if(12000 > n && n >=11000){
    document.getElementById('result').innerHTML='<img src="https://github.com/ssuho/mju/blob/main/image/1.JPG?raw=true" width="80%" alt="종합관"></img><br><br>종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">10층 대강당, 대학원</span>';
  }
  // 경상관
    else if(4100 > n && n >=4000){
    document.getElementById('result').innerHTML='<img src="https://github.com/ssuho/mju/blob/main/image/4.JPG?raw=true" width="80%" alt="국제관"></img><br><br>국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">지하 1층</span>';
  } else if(4200 > n && n >=4100){
    document.getElementById('result').innerHTML='<img src="https://github.com/ssuho/mju/blob/main/image/4.JPG?raw=true" width="80%" alt="국제관"></img><br><br>국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">1층</span>';
  } else if(4300 > n && n >=4200){
    document.getElementById('result').innerHTML='<img src="https://github.com/ssuho/mju/blob/main/image/4.JPG?raw=true" width="80%" alt="국제관"></img><br><br>국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">2층</span>';
  } else if(4400 > n && n >=4300){
    document.getElementById('result').innerHTML='<img src="https://github.com/ssuho/mju/blob/main/image/4.JPG?raw=true" width="80%" alt="국제관"></img><br><br>국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">3층</span>';
  } else if(4500 > n && n >=4400){
    document.getElementById('result').innerHTML='<img src="https://github.com/ssuho/mju/blob/main/image/4.JPG?raw=true" width="80%" alt="국제관"></img><br><br>국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">4층</span>';
  } else if(4600 > n && n >=4500){
    document.getElementById('result').innerHTML='<img src="https://github.com/ssuho/mju/blob/main/image/4.JPG?raw=true" width="80%" alt="국제관"></img><br><br>국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">5층</span>';
  } else if(4700 > n && n >=4600){
    document.getElementById('result').innerHTML='<img src="https://github.com/ssuho/mju/blob/main/image/4.JPG?raw=true" width="80%" alt="국제관"></img><br><br>국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">6층</span>';
  } else if(4800 > n && n >=4700){
    document.getElementById('result').innerHTML='<img src="https://github.com/ssuho/mju/blob/main/image/4.JPG?raw=true" width="80%" alt="국제관"></img><br><br>국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">7층</span>';
  } else if(4900 > n && n >=4800){
    document.getElementById('result').innerHTML='<img src="https://github.com/ssuho/mju/blob/main/image/4.JPG?raw=true" width="80%" alt="국제관"></img><br><br>국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">8층</span>';
  } else if(4999 > n && n >=4900){
    document.getElementById('result').innerHTML='<img src="https://github.com/ssuho/mju/blob/main/image/4.JPG?raw=true" width="80%" alt="국제관"></img><br><br>국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">9층</span>';
  }
  // 행정동
    else if(5520 > n && n >= 5510){
    document.getElementById('result').innerHTML='<img src="https://github.com/ssuho/mju/blob/main/image/5.JPG?raw=true" width="80%" alt="MCC"></img><br><br>행정동 (5번 건물)<br><br><span style="font-size: 24px;">5층 강당</span>';
  }
  // 방목학술정보관
    else if(n == 9114){
    document.getElementById('result').innerHTML='<img src="https://github.com/ssuho/mju/blob/main/image/9.JPG?raw=true" width="80%" alt="MCC"></img><br><br>방목학술정보관 (도서관, 9번 건물)<br><br><span style="font-size: 24px;">1층 국제회의장</span>';
  }
  // MCC
    else if(10200 > n && n >=10100){
    document.getElementById('result').innerHTML='<img src="https://github.com/ssuho/mju/blob/main/image/10.JPG?raw=true" width="80%" alt="MCC"></img><br><br>MCC (10번 건물)<br><br><span style="font-size: 24px;">베리타스홀 1층</span>';
  } else if(10300 > n && n >=10200){
    document.getElementById('result').innerHTML='<img src="https://github.com/ssuho/mju/blob/main/image/10.JPG?raw=true" width="80%" alt="MCC"></img><br><br>MCC (10번 건물)<br><br><span style="font-size: 24px;">베리타스홀 2층</span>';
  } else if(10400 > n && n >=10300){
    document.getElementById('result').innerHTML='<img src="https://github.com/ssuho/mju/blob/main/image/10.JPG?raw=true" width="80%" alt="MCC"></img><br><br>MCC (10번 건물)<br><br><span style="font-size: 24px;">베리타스홀 3층</span>';
  } else if(10500 > n && n >=10400){
    document.getElementById('result').innerHTML='<img src="https://github.com/ssuho/mju/blob/main/image/10.JPG?raw=true" width="80%" alt="MCC"></img><br><br>MCC (10번 건물)<br><br><span style="font-size: 24px;">베리타스홀 4층</span>';
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
