// querySelector() : element를 CSS방식으로 검색할수 있음

const h1 = document.querySelector("div.hello:first-child h1");

// h1의 색이 blue이면 tomato색으로 바꾸고 아니면 blue로 바꾼다.
function handleTitleClick() {
    h1.classList.toggle("clicked")
}
// classList : 말그대로 class들의 목록으로 작업할수 있게 허용해줌
// .contains : 포함
// .remove : 지움
// .add : 추가

// 유저가 title을 click할 경우에 자바스크립트가 개발자 대신 실행버튼을 눌러주게함
h1.addEventListener("click", handleTitleClick);  // 클릭할때
