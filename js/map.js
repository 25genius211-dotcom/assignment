// =============================
// 우리시골 지도
// OpenStreetMap + Leaflet
// =============================

// 대한민국 중심 좌표
const koreaCenter = [36.5, 127.8];

// 지도 생성
const map = L.map("map").setView(koreaCenter, 7);

// 지도 타일 추가
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    maxZoom:19,
    attribution:"© OpenStreetMap"
}).addTo(map);


// =============================
// 데이터
// (나중에는 JSON으로 변경)
// =============================

const places=[

{
name:"안동 하회마을",
type:"관광",
lat:36.5386,
lng:128.5187,
description:"유네스코 세계문화유산"
},

{
name:"담양 죽녹원",
type:"관광",
lat:35.3216,
lng:126.9875,
description:"대나무 숲 산책"
},

{
name:"평창 대관령",
type:"관광",
lat:37.6645,
lng:128.6992,
description:"자연 힐링 명소"
},

{
name:"강릉 중앙시장",
type:"맛집",
lat:37.7519,
lng:128.8761,
description:"먹거리 천국"
},

{
name:"순천만 국가정원",
type:"관광",
lat:34.9304,
lng:127.5093,
description:"국가정원"
},

{
name:"전주 한옥마을",
type:"관광",
lat:35.8152,
lng:127.1530,
description:"전통문화 체험"
}

];


// =============================
// 아이콘 색상
// =============================

function getColor(type){

switch(type){

case "맛집":
return "red";

case "관광":
return "green";

case "학교":
return "blue";

case "주거":
return "orange";

case "일자리":
return "purple";

default:
return "gray";

}

}


// =============================
// 마커 생성
// =============================

places.forEach(place=>{

const marker=L.circleMarker(

[place.lat,place.lng],

{

radius:10,

color:getColor(place.type),

fillColor:getColor(place.type),

fillOpacity:0.9

}

).addTo(map);

marker.bindPopup(

`
<h3>${place.name}</h3>

<p>${place.description}</p>

<b>${place.type}</b>

`

);

});


// =============================
// 지도 이동 함수
// =============================

function moveTo(lat,lng){

map.setView([lat,lng],12);

}


// =============================
// 검색 함수
// =============================

function searchPlace(keyword){

const result=places.find(place=>

place.name.includes(keyword)

);

if(result){

moveTo(result.lat,result.lng);

}else{

alert("검색 결과가 없습니다.");

}

}


// =============================
// 검색 버튼
// =============================

const btn=document.getElementById("searchBtn");

btn.addEventListener("click",()=>{

const keyword=document
.getElementById("searchInput")
.value;

searchPlace(keyword);

});


// 엔터키 검색
document
.getElementById("searchInput")
.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

searchPlace(e.target.value);

}

});