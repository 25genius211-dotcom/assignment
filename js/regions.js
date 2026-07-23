const regions = {

    "강원도": [
        "강릉시",
        "평창군",
        "속초시",
        "춘천시",
        "원주시"
    ],

    "경상북도": [
        "안동시",
        "포항시",
        "경주시",
        "문경시"
    ],

    "전라남도": [
        "담양군",
        "순천시",
        "여수시"
    ],

    "전라북도": [
        "전주시",
        "남원시"
    ],

    "충청북도": [
        "제천시",
        "단양군"
    ],

    "충청남도": [
        "공주시",
        "보령시"
    ]

};
const province = document.getElementById("province");
const city = document.getElementById("city");
const category = document.getElementById("category");

// 시·도 목록 생성
Object.keys(regions).forEach(name=>{

    province.innerHTML += `
        <option value="${name}">
            ${name}
        </option>
    `;

});

// 시·군·구 변경
province.addEventListener("change",()=>{

    city.innerHTML =
    "<option>시·군·구를 선택하세요</option>";

    regions[province.value].forEach(area=>{

        city.innerHTML += `
        <option value="${area}">
            ${area}
        </option>
        `;

    });

});