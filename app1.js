// querySelector() : element를 CSS방식으로 검색할수 있음

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.style.color = "blue";
}

function handleMouseEnter() {
    h1.innerText = "mouse is here!"
}

function handleMouseLeave() {
    h1.innerText = "mouse is gone!"
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("All gooood");
}

// 유저가 title을 click할 경우에 자바스크립트가 개발자 대신 실행버튼을 눌러주게함
h1.addEventListener("click", handleTitleClick);  // 클릭할때
h1.addEventListener("mouseenter", handleMouseEnter);   // 마우스를 올리면
h1.addEventListener("mouseleave", handleMouseLeave);   // 마우스를 내리면

window.addEventListener("resize", handleWindowResize);   // 브라우저 창의 크기가 바뀌면
window.addEventListener("copy", handleWindowCopy);    // 복사할떄 
window.addEventListener("offline", handleWindowOffline);  // 오프라인일떄
window.addEventListener("online", handleWindowOnline);   // 온라인일떄