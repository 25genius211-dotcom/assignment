function showPlaces(){

    const result=document.getElementById("resultList");

    result.innerHTML="";

    let list=places.filter(place=>{

        let ok=true;

        if(province.value!="시·도를 선택하세요")
            ok &= place.province===province.value;

        if(city.value!="시·군·구를 선택하세요")
            ok &= place.city===city.value;

        if(category.value!="")
            ok &= place.category===category.value;

        return ok;

    });

    list.forEach(place=>{

        result.innerHTML += `

        <div class="place-card">

            <h2>${place.name}</h2>

            <p>${place.description}</p>

            <button onclick="
            moveTo(${place.lat},
            ${place.lng})
            ">

            지도 보기

            </button>

        </div>

        `;

    });

}

province.onchange=showPlaces;
city.onchange=showPlaces;
category.onchange=showPlaces;