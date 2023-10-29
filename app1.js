// querySelector() : element를 CSS방식으로 검색할수 있음

const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick() {
    title.style.color = "blue";
}

function handleMouseEnter(){
    title.innerText = "mouse is here!"
}

function handleMouseLeave(){
    title.innerText = "mouse is gone!"
}

// 유저가 title을 click할 경우에 자바스크립트가 개발자 대신 실행버튼을 눌러주게함
title.addEventListener("click", handleTitleClick);  // 클릭할때
title.addEventListener("mouseenter", handleMouseEnter);   // 마우스를 올리면
title.addEventListener("mouseleave", handleMouseLeave);   // 마우스를 내리면
