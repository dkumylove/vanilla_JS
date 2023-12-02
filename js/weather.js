// 위치를 성공적으로 받았을때 실행되는 함수
function onGeoOk(position){
    // 위도
    const lat = position.coords.latitude;
    // 경도
    const lng = position.coords.longitude;
    // 사용자의 위치정보 출력
    console.log("You live in", lat, lng);
}

// 위치를 받는데 에러가 발생행했을떄 실행되는 함수
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

// 브라우저에관한정보제공.사용자의현재위치가져오는API.위치얻는메소드()
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)