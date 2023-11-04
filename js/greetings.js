const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    // 브라우저의 기본동작을 막아줌
    event.preventDefault();
    // form에 hidden이라는 class를 추가
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // loginInput의 값을 변수에 저장
    const username = loginInput.value;
    // Application> Local Storage에 Key값과 Value값을 저장
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

// 중복부분 함수로 만듬
function paintGreetings(username) {
    // h1의 id = greeting을 가져다가 hello username이라는 텍스트 출력
    greeting.innerText = `Hello ${username}`;
    // h1의 hidden class명을 지움
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// Application> Local Storage에 저장되어있는 값(유저정보)을 변수에 저장
// Application> Local Storage에 저장된 값이 없으면 null반환, 이를 변수에 저장
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 만약 savedUsername값이 null값이면
if(savedUsername === null) {
    // show the form
    // form의 hidden class명을 지움
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername);
}
