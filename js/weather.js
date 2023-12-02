// html에서 id가 weather인 태그의 첫번째 span을 weather변수에 담음
const weather = document.querySelector("#weather span:first-child");
// html에서 id가 weather인 태그의 두번째 span을 city변수에 담음
const city = document.querySelector("#weather span:last-child");
// https://openweathermap.org/에 가입되어있는 개발자의 API_KEY
const API_KEY = "474d712ace2a5afb8120f30e74a3f3d9";


// 위치를 성공적으로 받았을때 실행되는 함수
function onGeoOk(position){
    // 위도정보를 변수 lat에 담기
    const lat = position.coords.latitude;
    // 경도정보를 변수 lon에 담기
    const lon = position.coords.longitude;
    // url정보를 변수 url에 담기
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    // 사용자의 위치정보 출력
    //console.log("You live in", lat, lng);
    // 원격API url를 호출
    fetch(url)
        // response의 json을 받는다(내용추출)
        .then((response) => response.json())
        // 내용추출되었다면, data를 얻는다.
        .then((data) => {
            // 사용자의 위치명을 text로 
            city.innerText = data.name;
            // 사용자의 날씨정보배열의 첫번째의 메인날씨/ 온도
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

// 위치를 받는데 에러가 발생행했을떄 실행되는 함수
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

// 브라우저에관한정보제공.사용자의현재위치가져오는API.위치얻는메소드()
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)