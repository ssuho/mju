// JS 완전 초보라서 코드가 무척 지저분한 점 양해부탁드립니다 (_ _)

//gsap
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .2,
    opacity: 1
  })
});

const fadeEls2 = document.querySelectorAll('.visual2 .fade-in');
fadeEls2.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 2, {
    delay: (index + 2) * .7,
    opacity: 1
  })
});

var mapContainer = document.getElementById(`map`), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

function check_class(){
  n=document.form1.classnumber.value;

  if (!n) {
    alert(`강의실 번호를 입력해주세요`);
    document.form1.classnumber.focus();
    return;
  }

  // [자캠] 제1공학관 (4번 건물)
  if(199 > n && n >= 100){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y1.jpg" width="80%" alt="[자캠] 제1공"></img><br><br>[자캠] 제1공학관 (4번 건물)<br><br><span style="font-size: 24px;">1층</span><br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661908509687" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
      new daum.roughmap.Lander({
        "timestamp" : "1661908509687",
        "key" : "2bjgc",
        "mapWidth" : "360",
        "mapHeight" : "300"
      }).render();
  } 
  else if(299 > n && n >= 200){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y1.jpg" width="80%" alt="[자캠] 제1공"></img><br><br>[자캠] 제1공학관 (4번 건물)<br><br><span style="font-size: 24px;">2층</span><br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661908509687" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
      new daum.roughmap.Lander({
        "timestamp" : "1661908509687",
        "key" : "2bjgc",
        "mapWidth" : "360",
        "mapHeight" : "300"
      }).render();;
  }
  else if(399 > n && n >= 300){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y1.jpg" width="80%" alt="[자캠] 제1공"></img><br><br>[자캠] 제1공학관 (4번 건물)<br><br><span style="font-size: 24px;">3층</span><br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661908509687" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
      new daum.roughmap.Lander({
        "timestamp" : "1661908509687",
        "key" : "2bjgc",
        "mapWidth" : "360",
        "mapHeight" : "300"
      }).render();;
  }
  else if(499 > n && n >= 400){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y1.jpg" width="80%" alt="[자캠] 제1공"></img><br><br>[자캠] 제1공학관 (4번 건물)<br><br><span style="font-size: 24px;">4층</span><br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661908509687" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
      new daum.roughmap.Lander({
        "timestamp" : "1661908509687",
        "key" : "2bjgc",
        "mapWidth" : "360",
        "mapHeight" : "300"
      }).render();;
  }
  else if(599 > n && n >= 500){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y1.jpg" width="80%" alt="[자캠] 제1공"></img><br><br>[자캠] 제1공학관 (4번 건물)<br><br><span style="font-size: 24px;">5층</span><br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661908509687" class="root_daum_roughmap root_daum_roughmap_landing"></div>`;
      new daum.roughmap.Lander({
        "timestamp" : "1661908509687",
        "key" : "2bjgc",
        "mapWidth" : "360",
        "mapHeight" : "300"
      }).render();;
  }

  // [인캠]본관
    else if(1200 > n && n >= 1100){
    document.getElementById(`result`).innerHTML=`<img src="./image/S1.JPG" width="80%" alt="[인캠] 종합관"></img><br><br>[인캠] 종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">1층</span><br><br><div class ="tip"><p>💡TIP : 종합관 2층 ↔ 학관 4층<br>종합관 4층 ↔ 기숙사</p></div><link rel ="stylesheet" href="/style2.css">
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661949607860" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661949607860",
		"key" : "2bjwu",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  } else if(1300 > n && n >= 1200){
    document.getElementById(`result`).innerHTML=`<img src="./image/S1.JPG" width="80%" alt="[인캠] 종합관"></img><br><br>[인캠] 종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">2층 교양, 영어 강의실</span><br><br><div class ="tip"><p>💡TIP : 종합관 2층 ↔ 학관 4층<br>종합관 4층 ↔ 기숙사</p></div>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661949607860" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661949607860",
		"key" : "2bjwu",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  } else if(1400 > n && n >=1300){
    document.getElementById(`result`).innerHTML=`<img src="./image/S1.JPG" width="80%" alt="[인캠] 종합관"></img><br><br>[인캠] 종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">3층 교양, ICT 강의실</span><br><br><div class ="tip"><p>💡TIP : 종합관 2층 ↔ 학관 4층<br>종합관 4층 ↔ 기숙사</p></div>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661949607860" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661949607860",
		"key" : "2bjwu",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  } else if(1500 > n && n >=1400){
    document.getElementById(`result`).innerHTML=`<img src="./image/S1.JPG" width="80%" alt="[인캠] 종합관"></img><br><br>[인캠] 종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">4층 경제, 청지, 아동 강의실</span><br><br><div class ="tip"><p>💡TIP : 종합관 2층 ↔ 학관 4층<br>종합관 4층 ↔ 기숙사</p></div>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661949607860" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661949607860",
		"key" : "2bjwu",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  } else if(1600 > n && n >=1500){
    document.getElementById(`result`).innerHTML=`<img src="./image/S1.JPG" width="80%" alt="[인캠] 종합관"></img><br><br>[인캠] 종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">5층 법대 강의실</span><br><br><div class ="tip"><p>💡TIP : 종합관 2층 ↔ 학관 4층<br>종합관 4층 ↔ 기숙사</p></div>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661949607860" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661949607860",
		"key" : "2bjwu",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  } else if(1700 > n && n >=1600){
    document.getElementById(`result`).innerHTML=`<img src="./image/S1.JPG" width="80%" alt="[인캠] 종합관"></img><br><br>[인캠] 종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">6층 사과대, 법대 강의실</span><br><br><div class ="tip"><p>💡TIP : 종합관 2층 ↔ 학관 4층<br>종합관 4층 ↔ 기숙사</p></div>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661949607860" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661949607860",
		"key" : "2bjwu",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  } else if(1800 > n && n >=1700){
    document.getElementById(`result`).innerHTML=`<img src="./image/S1.JPG" width="80%" alt="[인캠] 종합관"></img><br><br>[인캠] 종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">7층 인문 강의실</span><br><br><div class ="tip"><p>💡TIP : 종합관 2층 ↔ 학관 4층<br>종합관 4층 ↔ 기숙사</p></div>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661949607860" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661949607860",
		"key" : "2bjwu",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  } else if(1900 > n && n >=1800){
    document.getElementById(`result`).innerHTML=`<img src="./image/S1.JPG" width="80%" alt="[인캠] 종합관"></img><br><br>[인캠] 종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">8층 인문 강의실</span><br><br><div class ="tip"><p>💡TIP : 종합관 2층 ↔ 학관 4층<br>종합관 4층 ↔ 기숙사</p></div>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661949607860" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661949607860",
		"key" : "2bjwu",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  } else if(2000 > n && n >=1900){
    document.getElementById(`result`).innerHTML=`<img src="./image/S1.JPG" width="80%" alt="[인캠] 종합관"></img><br><br>[인캠] 종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">9층 인문 강의실</span><br><br><div class ="tip"><p>💡TIP : 종합관 2층 ↔ 학관 4층<br>종합관 4층 ↔ 기숙사</p></div>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661949607860" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661949607860",
		"key" : "2bjwu",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  } else if(12000 > n && n >=11000){
    document.getElementById(`result`).innerHTML=`<img src="./image/S1.JPG" width="80%" alt="[인캠] 종합관"></img><br><br>[인캠] 종합관 (구 본관, 1번 건물)<br><br><span style="font-size: 24px;">10층 대강당, 대학원</span><br><br><div class ="tip"><p>💡TIP : 종합관 2층 ↔ 학관 4층<br>종합관 4층 ↔ 기숙사</p></div>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661949607860" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661949607860",
		"key" : "2bjwu",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }

  
  //[자캠] 창조예술관
  else if(2199 > n && n >= 2100){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y2.jpg" width="80%" alt="[자캠] 창조예술"></img><br><br>[자캠] 창조예술관<br><br><span style="font-size: 24px;">1층</span>
      <br><br><br>
      <div id="map">
      <div id="daumRoughmapContainer1661941276792" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
      new daum.roughmap.Lander({
        "timestamp" : "1661941276792",
        "key" : "2bjvo",
        "mapWidth" : "360",
        "mapHeight" : "300"
      }).render();
    ;
  }
  else if(2299 > n && n >= 2200){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y2.jpg" width="80%" alt="[자캠] 창조예술"></img><br><br>[자캠] 창조예술관<br><br><span style="font-size: 24px;">2층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661941276792" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
    new daum.roughmap.Lander({
      "timestamp" : "1661941276792",
      "key" : "2bjvo",
      "mapWidth" : "360",
      "mapHeight" : "300"
    }).render();
  ;;
  }
  else if(2399 > n && n >= 2300){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y2.jpg" width="80%" alt="[자캠] 창조예술"></img><br><br>[자캠] 창조예술관<br><br><span style="font-size: 24px;">3층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661941276792" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
    new daum.roughmap.Lander({
      "timestamp" : "1661941276792",
      "key" : "2bjvo",
      "mapWidth" : "360",
      "mapHeight" : "300"
    }).render();
  ;
  }
  else if(2499 > n && n >= 2400){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y2.jpg" width="80%" alt="[자캠] 창조예술"></img><br><br>[자캠] 창조예술관<br><br><span style="font-size: 24px;">4층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661941276792" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
    new daum.roughmap.Lander({
      "timestamp" : "1661941276792",
      "key" : "2bjvo",
      "mapWidth" : "360",
      "mapHeight" : "300"
    }).render();
  ;
  }
  else if(2599 > n && n >= 2500){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y2.jpg" width="80%" alt="[자캠] 창조예술"></img><br><br>[자캠] 창조예술관<br><br><span style="font-size: 24px;">5층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661941276792" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
    new daum.roughmap.Lander({
      "timestamp" : "1661941276792",
      "key" : "2bjvo",
      "mapWidth" : "360",
      "mapHeight" : "300"
    }).render();
  }

  //[자캠] 명진당
  else if(3199 > n && n >= 3100){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y3.jpg" width="80%" alt="[자캠] 명진당"></img><br><br>[자캠] 명진당<br><br><span style="font-size: 24px;">1층</span>    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661941667234" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661941667234",
		"key" : "2bjvq",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();
  }

  // [인캠]경상관
    else if(4100 > n && n >=4000){
    document.getElementById(`result`).innerHTML=`<img src="./image/S4.JPG" width="80%" alt="[인캠] 국제관"></img><br><br>[인캠] 국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">지하 1층</span><br><br><div class ="tip"><p>💡TIP : 국제관 4층 중앙 ↔ 기숙사<br>국제관 4층 ↔ 도서관 3층</p></div></p></div>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661949494121" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661949494121",
		"key" : "2bjwt",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  } else if(4200 > n && n >=4100){
    document.getElementById(`result`).innerHTML=`<img src="./image/S4.JPG" width="80%" alt="[인캠] 국제관"></img><br><br>[인캠] 국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">1층</span><br><br><div class ="tip"><p>💡TIP : 국제관 4층 중앙 ↔ 기숙사<br>국제관 4층 ↔ 도서관 3층</p></div></p></div>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661949494121" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661949494121",
		"key" : "2bjwt",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  } else if(4300 > n && n >=4200){
    document.getElementById(`result`).innerHTML=`<img src="./image/S4.JPG" width="80%" alt="[인캠] 국제관"></img><br><br>[인캠] 국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">2층</span><br><br><div class ="tip"><p>💡TIP : 국제관 4층 중앙 ↔ 기숙사<br>국제관 4층 ↔ 도서관 3층</p></div></p></div>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661949494121" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661949494121",
		"key" : "2bjwt",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  } else if(4400 > n && n >=4300){
    document.getElementById(`result`).innerHTML=`<img src="./image/S4.JPG" width="80%" alt="[인캠] 국제관"></img><br><br>[인캠] 국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">3층</span><br><br><div class ="tip"><p>💡TIP : 국제관 4층 중앙 ↔ 기숙사<br>국제관 4층 ↔ 도서관 3층</p></div></p></div>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661949494121" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661949494121",
		"key" : "2bjwt",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  } else if(4500 > n && n >=4400){
    document.getElementById(`result`).innerHTML=`<img src="./image/S4.JPG" width="80%" alt="[인캠] 국제관"></img><br><br>[인캠] 국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">4층</span><br><br><div class ="tip"><p>💡TIP : 국제관 4층 중앙 ↔ 기숙사<br>국제관 4층 ↔ 도서관 3층</p></div></p></div>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661949494121" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661949494121",
		"key" : "2bjwt",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  } else if(4600 > n && n >=4500){
    document.getElementById(`result`).innerHTML=`<img src="./image/S4.JPG" width="80%" alt="[인캠] 국제관"></img><br><br>[인캠] 국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">5층</span><br><br><div class ="tip"><p>💡TIP : 국제관 4층 중앙 ↔ 기숙사<br>국제관 4층 ↔ 도서관 3층</p></div></p></div>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661949494121" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661949494121",
		"key" : "2bjwt",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  } else if(4700 > n && n >=4600){
    document.getElementById(`result`).innerHTML=`<img src="./image/S4.JPG" width="80%" alt="[인캠] 국제관"></img><br><br>[인캠] 국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">6층</span><br><br><div class ="tip"><p>💡TIP : 국제관 4층 중앙 ↔ 기숙사<br>국제관 4층 ↔ 도서관 3층</p></div></p></div>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661949494121" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661949494121",
		"key" : "2bjwt",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  } else if(4800 > n && n >=4700){
    document.getElementById(`result`).innerHTML=`<img src="./image/S4.JPG" width="80%" alt="[인캠] 국제관"></img><br><br>[인캠] 국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">7층</span><br><br><div class ="tip"><p>💡TIP : 국제관 4층 중앙 ↔ 기숙사<br>국제관 4층 ↔ 도서관 3층</p></div></p></div>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661949494121" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661949494121",
		"key" : "2bjwt",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  } else if(4900 > n && n >=4800){
    document.getElementById(`result`).innerHTML=`<img src="./image/S4.JPG" width="80%" alt="[인캠] 국제관"></img><br><br>[인캠] 국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">8층</span><br><br><div class ="tip"><p>💡TIP : 국제관 4층 중앙 ↔ 기숙사<br>국제관 4층 ↔ 도서관 3층</p></div></p></div>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661949494121" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661949494121",
		"key" : "2bjwt",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  } else if(4999 > n && n >=4900){
    document.getElementById(`result`).innerHTML=`<img src="./image/S4.JPG" width="80%" alt="[인캠] 국제관"></img><br><br>[인캠] 국제관 (구 경상관, 4번 건물)<br><br><span style="font-size: 24px;">9층</span><br><br><div class ="tip"><p>💡TIP : 국제관 4층 중앙 ↔ 기숙사<br>국제관 4층 ↔ 도서관 3층</p></div></p></div>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661949494121" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661949494121",
		"key" : "2bjwt",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }

  //[자캠] 제5공학관 (1)
  else if(5199 > n && n >= 5100){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y5.jpg" width="80%" alt="[자캠] 제5공"></img><br><br>[자캠] 제5공학관<br><br><span style="font-size: 24px;">1층</span>    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661941831565" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661941831565",
		"key" : "2bjvr",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();
;
  }
  else if(5299 > n && n >= 5200){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y5.jpg" width="80%" alt="[자캠] 제5공"></img><br><br>[자캠] 제5공학관<br><br><span style="font-size: 24px;">2층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661941831565" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661941831565",
		"key" : "2bjvr",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(5399 > n && n >= 5300){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y5.jpg" width="80%" alt="[자캠] 제5공"></img><br><br>[자캠] 제5공학관<br><br><span style="font-size: 24px;">3층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661941831565" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661941831565",
		"key" : "2bjvr",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(5499 > n && n >= 5400){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y5.jpg" width="80%" alt="[자캠] 제5공"></img><br><br>[자캠] 제5공학관<br><br><span style="font-size: 24px;">4층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661941831565" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661941831565",
		"key" : "2bjvr",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  
  // [인캠] 행정동
  else if(5520 > n && n >= 5510){
    document.getElementById(`result`).innerHTML=`<img src="./image/S5.JPG" width="80%" alt="행정동"></img><br><br>[인캠] 행정동 (5번 건물)<br><br><span style="font-size: 24px;">5층 강당</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661949956663" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661949956663",
		"key" : "2bjxz",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }

  //[자캠] 제5공학관 (2)
  else if(5599 > n && n >= 5530){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y5.jpg" width="80%" alt="[자캠] 제5공"></img><br><br>[자캠] 제5공학관<br><br><span style="font-size: 24px;">5층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661941831565" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661941831565",
		"key" : "2bjvr",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(5699 > n && n >= 5600){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y5.jpg" width="80%" alt="[자캠] 제5공"></img><br><br>[자캠] 제5공학관<br><br><span style="font-size: 24px;">6층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661941831565" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661941831565",
		"key" : "2bjvr",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(5799 > n && n >= 5700){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y5.jpg" width="80%" alt="[자캠] 제5공"></img><br><br>[자캠] 제5공학관<br><br><span style="font-size: 24px;">7층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661941831565" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661941831565",
		"key" : "2bjvr",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }

  //[자캠] 예체능관
  else if(7999 > n && n >= 6000){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y6.jpg" width="80%" alt="체육관"></img><br><br>[자캠] 예체능관<br><br><span style="font-size: 24px;"></span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942005442" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942005442",
		"key" : "2bjvt",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }

  //[자캠] 제2공학관
  else if(8099 > n && n >= 8000){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y8.jpg" width="80%" alt="[자캠] 제2공"></img><br><br>[자캠] 제2공학관<br><br><span style="font-size: 24px;">지하 1층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942070143" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942070143",
		"key" : "2bjvu",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(8199 > n && n >= 8100){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y8.jpg" width="80%" alt="[자캠] 제2공"></img><br><br>[자캠] 제2공학관<br><br><span style="font-size: 24px;">1층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942070143" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942070143",
		"key" : "2bjvu",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(8299 > n && n >= 8200){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y8.jpg" width="80%" alt="[자캠] 제2공"></img><br><br>[자캠] 제2공학관<br><br><span style="font-size: 24px;">2층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942070143" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942070143",
		"key" : "2bjvu",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(8399 > n && n >= 8300){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y8.jpg" width="80%" alt="[자캠] 제2공"></img><br><br>[자캠] 제2공학관<br><br><span style="font-size: 24px;">3층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942070143" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942070143",
		"key" : "2bjvu",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(8499 > n && n >= 8400){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y8.jpg" width="80%" alt="[자캠] 제2공"></img><br><br>[자캠] 제2공학관<br><br><span style="font-size: 24px;">4층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942070143" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942070143",
		"key" : "2bjvu",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(8599 > n && n >= 8500){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y8.jpg" width="80%" alt="[자캠] 제2공"></img><br><br>[자캠] 제2공학관<br><br><span style="font-size: 24px;">5층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942070143" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942070143",
		"key" : "2bjvu",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(8699 > n && n >= 8600){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y8.jpg" width="80%" alt="[자캠] 제2공"></img><br><br>[자캠] 제2공학관<br><br><span style="font-size: 24px;">6층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942070143" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942070143",
		"key" : "2bjvu",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(8799 > n && n >= 8700){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y8.jpg" width="80%" alt="[자캠] 제2공"></img><br><br>[자캠] 제2공학관<br><br><span style="font-size: 24px;">7층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942070143" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942070143",
		"key" : "2bjvu",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(8899 > n && n >= 8800){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y8.jpg" width="80%" alt="[자캠] 제2공"></img><br><br>[자캠] 제2공학관<br><br><span style="font-size: 24px;">8층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942070143" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942070143",
		"key" : "2bjvu",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }

  //[자캠] 함박관 지하 1층
  else if(9099 > n && n >= 9000){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y9.jpg" width="80%" alt="[자캠] 함박"></img><br><br>[자캠] 함박관<br><br><span style="font-size: 24px;">지하 1층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942184144" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942184144",
		"key" : "2bjvv",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }

  // [인캠] 방목학술정보관
  else if(n == 9114){
    document.getElementById(`result`).innerHTML=`<img src="./image/S9.JPG" width="80%" alt="방목학술정보관"></img><br><br>[인캠] 방목학술정보관 (도서관, 9번 건물)<br><br><span style="font-size: 24px;">1층 국제회의장</span><br><br><div class ="tip"><p>💡TIP : 학술관 3층 ↔ 국제관 4층</p></div>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661949748310" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661949748310",
		"key" : "2bjww",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }

  //[자캠] 함박관
  else if(9199 > n && n >= 9100){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y9.jpg" width="80%" alt="[자캠] 함박"></img><br><br>[자캠] 함박관<br><br><span style="font-size: 24px;">1층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942184144" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942184144",
		"key" : "2bjvv",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(9299 > n && n >= 9200){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y9.jpg" width="80%" alt="[자캠] 함박"></img><br><br>[자캠] 함박관<br><br><span style="font-size: 24px;">2층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942184144" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942184144",
		"key" : "2bjvv",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(9399 > n && n >= 9300){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y9.jpg" width="80%" alt="[자캠] 함박"></img><br><br>[자캠] 함박관<br><br><span style="font-size: 24px;">3층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942184144" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942184144",
		"key" : "2bjvv",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(9499 > n && n >= 9400){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y9.jpg" width="80%" alt="[자캠] 함박"></img><br><br>[자캠] 함박관<br><br><span style="font-size: 24px;">4층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942184144" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942184144",
		"key" : "2bjvv",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(9599 > n && n >= 9500){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y9.jpg" width="80%" alt="[자캠] 함박"></img><br><br>[자캠] 함박관<br><br><span style="font-size: 24px;">5층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942184144" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942184144",
		"key" : "2bjvv",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }

  // [인캠] MCC
    else if(10200 > n && n >=10100){
    document.getElementById(`result`).innerHTML=`<img src="./image/S10.JPG" width="80%" alt="[인캠] MCC"></img><br><br>[인캠] MCC (10번 건물)<br><br><span style="font-size: 24px;">베리타스홀 1층</span><br><br><div class ="tip"><p>💡TIP : 운동장과 연결된 MCC 3층 입구는<br>학생증 없이 출입 가능해요</p></div>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661949414554" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661949414554",
		"key" : "2bjwr",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  } else if(10300 > n && n >=10200){
    document.getElementById(`result`).innerHTML=`<img src="./image/S10.JPG" width="80%" alt="[인캠] MCC"></img><br><br>[인캠] MCC (10번 건물)<br><br><span style="font-size: 24px;">베리타스홀 2층</span><br><br><div class ="tip"><p>💡TIP : 운동장과 연결된 MCC 3층 입구는<br>학생증 없이 출입 가능해요</p></div>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661949414554" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661949414554",
		"key" : "2bjwr",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  } else if(10400 > n && n >=10300){
    document.getElementById(`result`).innerHTML=`<img src="./image/S10.JPG" width="80%" alt="[인캠] MCC"></img><br><br>[인캠] MCC (10번 건물)<br><br><span style="font-size: 24px;">베리타스홀 3층</span><br><br><div class ="tip"><p>💡TIP : 운동장과 연결된 MCC 3층 입구는<br>학생증 없이 출입 가능해요</p></div>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661949414554" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661949414554",
		"key" : "2bjwr",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  } else if(10500 > n && n >=10400){
    document.getElementById(`result`).innerHTML=`<img src="./image/S10.JPG" width="80%" alt="[인캠] MCC"></img><br><br>[인캠] MCC (10번 건물)<br><br><span style="font-size: 24px;">베리타스홀 4층</span><br><br><div class ="tip"><p>💡TIP : 운동장과 연결된 MCC 3층 입구는<br>학생증 없이 출입 가능해요</p></div>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661949414554" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661949414554",
		"key" : "2bjwr",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  
  //[자캠] 디자인조형센터
  else if(12199 > n && n >= 12100){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y12.jpg" width="80%" alt="디조"></img><br><br>[자캠] 디자인조형센터<br><br><span style="font-size: 24px;">1층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942266862" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942266862",
		"key" : "2bjvw",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(12299 > n && n >= 12200){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y12.jpg" width="80%" alt="디조"></img><br><br>[자캠] 디자인조형센터<br><br><span style="font-size: 24px;">2층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942266862" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942266862",
		"key" : "2bjvw",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(12399 > n && n >= 12300){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y12.jpg" width="80%" alt="디조"></img><br><br>[자캠] 디자인조형센터<br><br><span style="font-size: 24px;">3층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942266862" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942266862",
		"key" : "2bjvw",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }

  //[자캠] 제4공학관
  else if(13199 > n && n >= 13100){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y13.jpg" width="80%" alt="[자캠] 제4공"></img><br><br>[자캠] 제4공학관<br><br><span style="font-size: 24px;">1층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942336670" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942336670",
		"key" : "2bjvy",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(13299 > n && n >= 13200){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y13.jpg" width="80%" alt="[자캠] 제4공"></img><br><br>[자캠] 제4공학관<br><br><span style="font-size: 24px;">2층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942336670" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942336670",
		"key" : "2bjvy",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(13399 > n && n >= 13300){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y13.jpg" width="80%" alt="[자캠] 제4공"></img><br><br>[자캠] 제4공학관<br><br><span style="font-size: 24px;">3층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942336670" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942336670",
		"key" : "2bjvy",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }

  //[자캠] 재료구조시험동
  else if(14199 > n && n >= 14100){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y14.jpg" width="80%" alt="시험동"></img><br><br>[자캠] 재료구조시험동<br><br><span style="font-size: 24px;">1층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942421731" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942421731",
		"key" : "2bjwz",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(14299 > n && n >= 14200){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y14.jpg" width="80%" alt="시험동"></img><br><br>[자캠] 재료구조시험동<br><br><span style="font-size: 294px;">2층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942421731" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942421731",
		"key" : "2bjwz",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }

  //[자캠] 수리모형실습동
  else if(15199 > n && n >= 15100){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y15.jpg" width="80%" alt="실습동"></img><br><br>[자캠] 수리모형실습동<br><br><span style="font-size: 24px;">1층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942472920" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942472920",
		"key" : "2bjw2",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(15299 > n && n >= 15200){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y15.jpg" width="80%" alt="실습동"></img><br><br>[자캠] 수리모형실습동<br><br><span style="font-size: 24px;">2층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942472920" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942472920",
		"key" : "2bjw2",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }

  //[자캠] 공동실험동
  else if(18199 > n && n >= 18100){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y18.jpg" width="80%" alt="실험동"></img><br><br>[자캠] 공동실험동<br><br><span style="font-size: 24px;">1층</span>`;
  }

  //[자캠] 제3공학관
  else if(19199 > n && n >= 19100){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y19.jpg" width="80%" alt="[자캠] 제3공"></img><br><br>[자캠] 제3공학관<br><br><span style="font-size: 24px;">1층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942549626" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942549626",
		"key" : "2bjw4",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(19299 > n && n >= 19200){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y19.jpg" width="80%" alt="[자캠] 제3공"></img><br><br>[자캠] 제3공학관<br><br><span style="font-size: 24px;">2층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942549626" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942549626",
		"key" : "2bjw4",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(19399 > n && n >= 19300){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y19.jpg" width="80%" alt="[자캠] 제3공"></img><br><br>[자캠] 제3공학관<br><br><span style="font-size: 24px;">3층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942549626" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942549626",
		"key" : "2bjw4",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(19499 > n && n >= 19400){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y19.jpg" width="80%" alt="[자캠] 제3공"></img><br><br>[자캠] 제3공학관<br><br><span style="font-size: 24px;">4층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942549626" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942549626",
		"key" : "2bjw4",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(19599 > n && n >= 19500){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y19.jpg" width="80%" alt="[자캠] 제3공"></img><br><br>[자캠] 제3공학관<br><br><span style="font-size: 24px;">5층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942549626" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942549626",
		"key" : "2bjw4",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(19699 > n && n >= 19600){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y19.jpg" width="80%" alt="[자캠] 제3공"></img><br><br>[자캠] 제3공학관<br><br><span style="font-size: 24px;">6층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942549626" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942549626",
		"key" : "2bjw4",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }

  //[자캠] 건축도시설계원
  else if(20199 > n && n >= 20100){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y20.jpg" width="80%" alt="설계원"></img><br><br>[자캠] 건축도시설계원<br><br><span style="font-size: 24px;">1층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942639211" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942639211",
		"key" : "2bjw5",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(20299 > n && n >= 20200){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y20.jpg" width="80%" alt="설계원"></img><br><br>[자캠] 건축도시설계원<br><br><span style="font-size: 24px;">2층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942639211" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942639211",
		"key" : "2bjw5",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(20399 > n && n >= 20300){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y20.jpg" width="80%" alt="설계원"></img><br><br>[자캠] 건축도시설계원<br><br><span style="font-size: 24px;">3층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942639211" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942639211",
		"key" : "2bjw5",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(20499 > n && n >= 20400){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y20.jpg" width="80%" alt="설계원"></img><br><br>[자캠] 건축도시설계원<br><br><span style="font-size: 24px;">4층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942639211" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942639211",
		"key" : "2bjw5",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(20599 > n && n >= 20500){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y20.jpg" width="80%" alt="설계원"></img><br><br>[자캠] 건축도시설계원<br><br><span style="font-size: 24px;">5층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942639211" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942639211",
		"key" : "2bjw5",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }

  //[자캠] 60주년 채플관
  else if(22999 > n && n >= 22000){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y22.jpg" width="80%" alt="채플관"></img><br><br>[자캠] 60주년 채플관<br><br><span style="font-size: 24px;"></span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942698433" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942698433",
		"key" : "2bjw6",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }

  //[자캠] 차세대과학관 (23번 건물)
  else if(23199 > n && n >= 23100){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y23.jpg" width="80%" alt="과학관"></img><br><br>[자캠] 차세대과학관 (23번 건물)<br><br><span style="font-size: 24px;">1층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942773433" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942773433",
		"key" : "2bjw7",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(23299 > n && n >= 23200){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y23.jpg" width="80%" alt="과학관"></img><br><br>[자캠] 차세대과학관 (23번 건물)<br><br><span style="font-size: 24px;">2층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942773433" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942773433",
		"key" : "2bjw7",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(23399 > n && n >= 23300){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y23.jpg" width="80%" alt="과학관"></img><br><br>[자캠] 차세대과학관 (23번 건물)<br><br><span style="font-size: 24px;">3층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942773433" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942773433",
		"key" : "2bjw7",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(23499 > n && n >= 23400){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y23.jpg" width="80%" alt="과학관"></img><br><br>[자캠] 차세대과학관 (23번 건물)<br><br><span style="font-size: 24px;">4층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942773433" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942773433",
		"key" : "2bjw7",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(23599 > n && n >= 23500){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y23.jpg" width="80%" alt="과학관"></img><br><br>[자캠] 차세대과학관 (23번 건물)<br><br><span style="font-size: 24px;">5층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942773433" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942773433",
		"key" : "2bjw7",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(23699 > n && n >= 23600){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y23.jpg" width="80%" alt="과학관"></img><br><br>[자캠] 차세대과학관 (23번 건물)<br><br><span style="font-size: 24px;">6층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942773433" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942773433",
		"key" : "2bjw7",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(23799 > n && n >= 23700){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y23.jpg" width="80%" alt="과학관"></img><br><br>[자캠] 차세대과학관 (23번 건물)<br><br><span style="font-size: 24px;">7층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942773433" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942773433",
		"key" : "2bjw7",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }

  //[자캠] 하이브리드구조실험센터 (24번 건물)
  else if(24199 > n && n >= 24100){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y24.jpg" width="80%" alt="실험센터"></img><br><br>[자캠] 하이브리드구조실험센터 (24번 건물)<br><br><span style="font-size: 24px;">1층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942982698" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942982698",
		"key" : "2bjw9",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(24299 > n && n >= 24200){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y24.jpg" width="80%" alt="실험센터"></img><br><br>[자캠] 하이브리드구조실험센터 (24번 건물)<br><br><span style="font-size: 24px;">2층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942982698" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942982698",
		"key" : "2bjw9",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }
  else if(24399 > n && n >= 24300){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y24.jpg" width="80%" alt="실험센터"></img><br><br>[자캠] 하이브리드구조실험센터 (24번 건물)<br><br><span style="font-size: 24px;">3층</span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661942982698" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661942982698",
		"key" : "2bjw9",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }

  //[자캠] 온실
  else if(82999 > n && n >= 82000){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y82.jpg" width="80%" alt="실험센터"></img><br><br>[자캠] 온실<br><br><span style="font-size: 24px;"></span>
    <br><br><br>
    <div id="map">
    <div id="daumRoughmapContainer1661943069761" class="root_daum_roughmap root_daum_roughmap_landing"></div></div>`;
                         new daum.roughmap.Lander({
		"timestamp" : "1661943069761",
		"key" : "2bjwa",
		"mapWidth" : "360",
		"mapHeight" : "300"
	}).render();

  }

  //[자캠] 모형실험동
  else if(n == 83101){
    document.getElementById(`result`).innerHTML=`<img src="./image/Y14.jpg" width="80%" alt="[자캠] 모형실험동"></img><br><br>[자캠] 모형실험동<br><br><span style="font-size: 24px;">모형실습실</span>`;
  }
  
  // 그 외
    else {
    alert(`강의실 번호를 다시 확인해주세요!`);
    document.form1.classnumber.value=``;
    document.form1.classnumber.focus();
    return;
  }
}

function re(){
  document.getElementById(`result`).innerHTML=``;
}