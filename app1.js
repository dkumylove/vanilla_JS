const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    // 브라우저의 기본동작을 막아줌
    event.preventDefault();
    // form에 hidden이라는 class를 추가
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // loginInput의 값을 변수에 저장
    const username = loginInput.value;
    // Application> Local Storage에 Key값과 Value값을 저장
    localStorage.setItem("username", username);
    // 기본적으로 비어있는 h1인 greeting을 가져다가 hello username이라는 텍스트 출력
    greeting.innerText = `Hello ${username}`;
    // h1에서 hidden이라는 class를 삭제
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

