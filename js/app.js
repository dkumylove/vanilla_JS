// alert : 경고창띄움

// const : constant(상수) 바뀌지 않는 값, 계속 유지됨
// const 변수명 = 값 ;
// 변수명을 지을떄 공백이 필요하다면 카멜표기법 사용

// let : 바뀌는 값, 업데이트 가능, 원할때 바꿀 수 있다. but 보안에 취약, 가로채기 당할수 있음. 
// let 변수명 = 값 ;
// 바꿀때는 let를 붙이지 않음. 처음에 선언할떄만 붙인다.
// var : const, let가 생기기 이전에 사용한 변수, 어디서든 변경 가능. but 보안에 취약. 실수로 바뀌어도 알려주지 않음.
// 어떠한 규칙고 가지고 있지 않음. var를 사용하면 코드가 뭘 할지 알 수 없음.
// const, let를 통해 몇몇 값을 보호할수 있다. const로 실수로 변경되는 것을 막아주고, 업데이트가 허용되는 변수의 경우 let 사용
// 항상 const, 가끔 let, 절대노노 var

const a = 10;
const b = 2;
let myName = "jeun";

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello " + myName);

myName = "jieun"; 

console.log("your new name is  " + myName);

//////////////////////////////////////////////////////////////////
// boolean : true = on or false = off => ""를 붙이면 문자로 인식함
// 컴퓨터는 0 or 1 만 이식 0:off 1:on
// null : 비어있다. 변수에 아무것도 없다는 뜻, 존재하지 않음, 정의되지 않음, 아무것도 없음
// undefined : 정의되지 않음, 변수가 메모리에 만들어져 존재하지만 값이 주어지지 않음.
// defined : 정의됨
// const amIFat = null; // 정의는 되어있지만 값은 null 상태
// let something; // 메모리 안에 존재하지만 정의되지 않음. 공간은 있는데 값이 들어가지 않은 상태

const amIFat = null; // 정의는 되어있지만 값은 null 상태
let something; // 메모리 안에 존재하지만 정의되지 않음. 공간은 있는데 값이 들어가지 않은 상태
console.log(something, amIFat);

//////////////////////////////////////////////////////////////////
// array : 배열 [값, 값, ...] 
// 여러줄의 코드를 간결하게 만들어 줌
// const daysOfWeek1= ["mon" , "tue" , "wed" , "thu" , "fri" , "sat" , "sun"];
// 배열의 값을 불러올때는 배열명[자리값]을 입력하게 된다. daysOfWeek1[3] == "thu"
// 배열에 다양한 타입 들어갈 수 있음 const nonsense = [1, 2, "hello", false, null, true, undefined];
// 배열에 배열값 추가하기
// 배열명.push(추가배열값)

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = mon + tue + wed + thu + fri + sat + sun;
// 두개는 같은 결과임, 8줄의 코드가 1줄로 줄어듬
const daysOfWeek1= ["mon" , "tue" , "wed" , "thu" , "fri" , "sat"];

const nonsense = [1, 2, "hello", false, null, true, undefined];

// array에서 아이템 받아오기
console.log(daysOfWeek1);

// array 안에 요일 더 추가하기
daysOfWeek1.push("sun")
console.log(daysOfWeek1);

//////////////////////////////////////////////////////////////////
// xx.xx 형식
// object : 원시 타입(Primitives)을 제외한 나머지 값들(함수, 배열, 정규표현식 등)은 모두 객체
// 키(key)과 값(value)으로 구성된 프로퍼티(Property)들의 집합
// const 변수명 = { 키: 값 , 키: 값, ... }
// const 안의 무언가를 업데이트 해도 문제발생 x

const playerName = "jeun";
const playerPoints = 123212;
const playerHandsome = true;
const playerFat = "little bit";

// // player[0] == name
// // player[1] == points
// // player[2] == handsome
// // player[3] == fat          // 너무 번거로움
// const player = ["jeun", 123212, true, "little bit"];
// player[1] = 2323;  // 값 수정
// player.push("potato");  // 값 추가

// const player = {
//     name : "jeun",
//     points : 123212,
//     handsome : true,
//     fat : "little bit"
// }

// console.log(player);
// console.log(player.name);
// // 같은 결과값
// console.log(player["name"]);

// // const 안의 무언가를 업데이트 해도 문제발생 x
// player.handsome = false;
// console.log(player)
// player.lastName = "potato"
// player.points = player.points + 200000;
// console.log(player)

//////////////////////////////////////////////////////////////////
// function : 계속 반복해서 사용할 수 있는 코드 조각
// 코드를 캡슐화해서 실행을 여러번 할수 있게 해줌
// function 함수이름 () { 실행내용 }
// argument : function을 실행하는 동안 어떤 정보를 function에게 보낼수 있는 방법

// function 없을떄
console.log("Hello my name is Jeun");
console.log("Hello my name is Nico");
console.log("Hello my name is Dal");
console.log("Hello my name is Shigatsu");
console.log("Hello my name is Flynn");
console.log("Hello my name is Flynn");
console.log("Hello my name is Flynn");
console.log("Hello my name is Flynn");
console.log("Hello my name is Flynn");

// function 있을떄, sayHello를 실행할 때 마다 {}안에 내용이 실행된다.
// function sayHello(){
//     console.log("Hello my name is C");
// }
// sayHello();
// sayHello();
// sayHello();

// function sayHello(nameOfPerson){
//     console.log("Hello my name is " + nameOfPerson);
// }
// sayHello("Jeun");
// sayHello("Nico");
// sayHello("Dal");

// console.log("lalalala");

function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + "and I'm " + age);
}
sayHello("Jeun", 10);
sayHello("Nico", 23);
sayHello("Dal", 21);

// function plus(a, b){
//     console.log(a + b);
// }
// function divide(a, b){
//     console.log(a / b);
// }

// plus(8, 60);
// divide(60, 4);

const player = {
    name: "Jeun",
    sayHello: function (otherPersonsName) {
        console.log("hello " + otherPersonsName + " nice to meet you")
    },
};

player.sayHello("Nico");
player.sayHello("Dal");

//////////////////////////////////////////////////////////////////
// const calculator = {
//     // +
//     add : function(a, b) {
//         console.log(a + b)
//     },
//     // -
//     sub : function(a, b) {
//         console.log(a - b)
//     },
//     // *
//     mul : function(a, b) {
//         console.log(a * b)
//     },
//     // /
//     div : function(a, b) {
//         console.log(a / b)
//     },
//     power : function(a, b) {
//         console.log(a ** b)
//     }
// };

// calculator.add(3, 4);
// calculator.sub(4, 5);
// calculator.mul(5, 4);
// calculator.div(29, 5);
// calculator.power(2, 6);

//////////////////////////////////////////////////////////////////
// console.log로 값을 받으면 개발자에게는 보여지지만 각 함수에 정의되는 값은 없게 됨
// return을 사용하면 같은 결과를 내면서 각 함수에 값도 주어지게 되어 다양한 결과를 낼수 있다.
// return을 하는 순간 function은 멈춘다.
// 이후 어떠 코드가와도 그 코드는 작동하지 않는다.
const calculator = {
    // +
    add : function(a, b) {
        return a + b
    },
    // -
    sub : function(a, b) {
        return a - b
    },
    // *
    mul : function(a, b) {
        return a * b
    },
    // /
    div : function(a, b) {
        return a / b
    },
    power : function(a, b) {
        return a ** b
    }
};

// calculator.add(3, 4);
// calculator.sub(4, 5);
// calculator.mul(5, 4);
// calculator.div(29, 5);
// calculator.power(2, 6);
//console.log(calculator.add(3, 4));

const addResult = calculator.add(3, 4);
const subResult = calculator.sub(addResult, 10);
const mulResult = calculator.mul(10, subResult);
const divResult = calculator.div(mulResult, addResult);
const powerResult = calculator.power(divResult, subResult);

console.log(addResult);



// const age = 96;
// function calculateKrAge(ageOfForeigner){
//     return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);

// console.log(krAge);

// // const age = 96;
// // function calculateKrAge(96){
// //     return 96 + 2;
// // }

// // const krAge = calculateKrAge(96); // const krAge = 98;

// // console.log(krAge); // 결과 98 출력

//////////////////////////////////////////////////////////////////
// conditional(조건문) : true인지 false인지 알려줌, 중요함
// if : true이면 실행
// else : false이면 실행
// prompt : 사용자에게 입력을 요청하는 프롬프트 상자를 화면에 표시하기 위해 사용
// 프롬프트 상자에서 계속 진행하려면 "확인" 또는 "취소" 버튼을 클릭해야 함, 답을 듣기전까지 실행은 멈춤
// const promptObj = prompt(message, default); 
// 첫 번째 인수는 프롬프트 상자에 표시되는 레이블이며, 두 번째 인수는 프롬프트 상자의 텍스트 박스에 표시되는 문자열
// 잘 안쓰는 이유 : 메시지가 별로 안이쁨, css스타일을 적용할수 없고, 버튼도 바꿀수 없음. 브라우저에서 팝업을 제안하기도 하기때문(오래된방법)
// 요즘은 대부분이 HTML,CSS로 만든 자신만의 창을 사용해 사용자가 값을 작성할수 있게함.

const age = parseInt(prompt("How old are you?"));

console.log(age);
// typeof : 값의 타입을 보고싶은때 사용

// // 타입변환하기
// "15" => 15 
// // 자바와 비슷
// parseInt("15");

console.log(typeof "15", typeof parseInt("15"));

//////////////////////////////////////////////////////////////////
// siNaN(number: number) : boolean : 넘버가 아닌 것, 숫자타입이 아닌 것(숫자타입 : false, 숫자가아닌타입 : true)
// 하나의 인자를 주면 숫자타입인지 확인후 boolean 값을 반환함.

console.log(isNaN(age));

// if사용조건 자바와 비슷
// condition : boolean으로 판별 가능해야함.
// if(condition){
//     /// condition === true 때 실행
// } else {
//     // condition === false 때 실행
// }

// console.log(isNaN(age)); if 조건문으로 바꾸기. 
if(isNaN(age) || age < 0) {
    console.log("Please Write a real positive number(양수를 입력해주세요)");
} else if(age < 18) {
    console.log("You are too young(당신은 너무 어려요)");
} else if(age >= 18 && age <= 50) {
    console.log("You can drink(음주가능)");
} else if(age > 50 && age <= 80) {
    console.log("You should exercise(운동하셔야합니다");
} else if(age === 100) {
    console.log("wow you are wise(당신은현명하군요)");
}else if(age > 80){
    console.log("You can do whatever you want(뭐든 원하는대로 하세요");
} 

//////////////////////////////////////////////////////////////////
// && : and연산자 그리고 둘다 true이어야 true
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// || : or연산자 또는 둘중 하나만이라도 true이면 true
// true || true = true
// true || false = true
// false || true = true
// false || false = false

// = 오늘쪽에 있는 값을 왼쪽 변수에 넣는다.
// === 같다는 뜻
// !== 같지 않다. ! : not
// 코드 진행은 위에서 아래로 진행되기 때문에 순서 또한 중요함

// if((a && b) || (c && d) ||(x || y)) {}


//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// document : 브라우저에 이미 존재하는 object, HTML을 가리키는 객체
// document = HTML
// console.dir(document) 호출하면 객체라는 것을 확인할수 있다.
// title는 자바스크립트에서 정의한것 없다. (HTML로 정의한것)
// 자바스크립트 관점으로 보여주는 것
// 그렇기 때문에 콘솔에서 호출도 가능

// document.title

// 자바스크립트는 HTML을 읽어오는 것임
// 자동으로 되기때문에 아무것도 할 필요없다.
// 브라우저가 HTML 정보가 아주 많이 있는 document라는 object(객체)를 전달해주는 것임

// 읽어오는 것 뿐만아니라 변경도 가능
// document.title = "Hi" 입력하면 메인 타이틀이 바뀐다.

//////////////////////////////////////////////////////////////////
// 콘솔에 document.getElementById("title") 입력하면
// <h1 id="title">Grab me!</h1> 출력함

const title = document.getElementById("title");

console.log(title);
// 위와 같은 결과 같이 출력됨
console.dir(title);
// 다양한 내용이 나옴. 그 모든 것은 HTML에서 할수 있는 것

// 자바스크립트는 HTML에서 element를 가지고 오지만 HTML자체를 보여주느는 않는다
// 자바스크립트가 보여주는 것은 HTML에서 표현하고 있는 object(객체)이다

title.innerText = "Got you!"
// 타이틀 내용이 변경됨

// 자바스크립트에서 이렇게 변경할수 있는이유
// 1. HTML 문서 태그에 id 추가됨
// 2. id를 통해 element는 document의 함수인 getElementById란 함수로 불러옴

// HTML을 자바스크립트에서 읽어올 수 있어야 한다.
// HTML과 상호작용을 가능하게 해줌
// 브라우저에서 그냥 사용할 수 있는 document라는 object

// 정말 중요한 부분임. 모든 것은 이 개념에서 부터 시작함

//////////////////////////////////////////////////////////////////

const hellos = document.getElementsByClassName("hello");
console.log(hellos);
// hello라는 이름을 가진 클래스들을 모두 호출, 배열로 출력함(값이 1개여도 배열로 나타냄)

const title = document.getElementsByTagName("h1");
console.log(title);

// querySelector() : element를 CSS방식으로 검색할수 있음
// 앞으로 자주사용하게 될 함수임
// 단 첫번쨰 하나의 element를 리턴함.( 항목이 많아져도 배열로 표시하지 않고 첫번쨰꺼면 출력함)
const title = document.querySelector(".hello h1");
console.log(title);
// <h1>Grab me!</h1>값을 출력함
// querySelectorAll() : 전체를 다 가져오고 싶다면(배열로 가져옴)

// 아래 두개는 같은 결과를 낸다.
const title = document.querySelector("#hello");
const title = document.getElementById("hello");

//////////////////////////////////////////////////////////////////
const title = document.querySelector(".hello h1");
const title = document.querySelector("div.hello:first-child h1");
// 위에 두개 같은내용
console.log(title);
title.style.color = "blue";

// event : 웹페이지에서 마우스를 클릭했을 때, 키를 입력했을 때, 특정요소에 포커스가 이동되었을 때 어떤 사건을 발생시키는 것 
// 예를 들어 click을 하면 그게 event임, h1 위에 마우스가 올라가도 event임
// 1. 마우스 이벤트
//  click	요소에 마우스를 클릭했을 때 이벤트가 발생
//  dbclick	요소에 마우스를 더블클릭했을 때 이벤트가 발생
//  mouseover	요소에 마우스를 오버했을 때 이벤트가 발생
//  mouseout	요소에 마우스를 아웃했을 때 이벤트가 발생
//  mousedown	요소에 마우스를 눌렀을 때 이벤트가 발생
//  mouseup	요소에 마우스를 떼었을 때 이벤트가 발생
//  mousemove	요소에 마우스를 움직였을 때 이벤트가 발생
//  contextmenu	context menu(마우스 오른쪽 버튼을 눌렀을 때 나오는 메뉴)가 나오기 전에 이벤트 발생

// 2. 키 이벤트 
//  keydown	키를 눌렀을 때 이벤트가 발생
//  keyup	키를 떼었을 때 이벤트가 발생
//  keypress	키를 누른 상태에서 이벤트가 발생 
 
// 3.폼 이벤트
//  focus	요소에 포커스가 이동되었을 때 이벤트 발생
//  blur	요소에 포커스가 벗어났을 때 이벤트 발생
//  change	요소에 값이 변경 되었을 때 이벤트 발생
//  submit	submit 버튼을 눌렀을 때 이벤트 발생
//  reset	reset 버튼을 눌렀을 때 이벤트 발생
//  select	input이나 textarea 요소 안의 텍스트를 드래그하여 선택했을 때 이벤트 발생 
 
// 4. 로드 및 기타 이벤트 
//  load	페이지의 로딩이 완료되었을 때 이벤트 발생
//  abort	이미지의 로딩이 중단되었을 때 이벤트 발생
//  unload	페이지가 다른 곳으로 이동될 때 이벤트 발생
//  resize	요소에 사이즈가 변경되었을 때 이벤트 발생
//  scroll	스크롤바를 움직였을 때 이벤트 발생 

// 이벤트핸들러 : 사용자가 실제 이벤트를 발생시켰을 때 그 이벤트에 대응하여 처리하는 것 
// '이벤트 핸들러'는 앞에 'on'을 붙여 주고 이벤트에 대한 동작(함수)을 처리 


// 유저가 title을 click할 경우에 자바스크립트가 개발자 대신 실행버튼을 눌러주게함
const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    console.log("title was clicked!") // 클릭할때 메시지 출력
    title.style.color = "blue"; // 클릭할떄 글자 색상 파랑으로 변경
}

title.addEventListener("click", handleTitleClick);

//////////////////////////////////////////////////////////////////
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement


const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick() {
    title.style.color = "blue";
}

function handleMouseEnter(){
    title.innerText = "mouse is here!" // 택스트 변경
}

function handleMouseLeave(){
    title.innerText = "mouse is gone!" // 텍스트 변경
}

// 유저가 title을 click할 경우에 자바스크립트가 개발자 대신 실행버튼을 눌러주게함
title.addEventListener("click", handleTitleClick);  // 클릭할때
title.onclick = handleTitleClick;
title.addEventListener("mouseenter", handleMouseEnter);   // 마우스를 올리면
title.onmouseenter = handleMouseEnter;
title.addEventListener("mouseleave", handleMouseLeave);   // 마우스를 내리면
title.onmouseleave = handleMouseLeave;

//////////////////////////////////////////////////////////////////
// window의 resize 이벤트
// 브라우저 창 리사이징시마다 콜백 코드가 실행
// 의도적으로 매 resize마다 코드를 실행해야 하는 경우도 있겠지만, 그렇지 않은 경우라면 이는 매우 비효율적이고 브라우저에 과부하를 줄 수도 있다. 

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


//////////////////////////////////////////////////////////////////
function handleTitleClick() {
    console.log(h1.style.color);
    h1.style.color = "blue";
    console.log(h1.style.color);
}

// h1의 색이 blue이면 tomato색으로 바꾸고 아니면 blue로 바꾼다.
function handleTitleClick() {
    if(h1.style.color === "blue") {
        h1.style.color = "tomato";
    } else {
        h1.style.color = "blue";
    }
}
// 같은 결과
function handleTitleClick() {
    const currentColor = h1.style.color; // 변하지 않음
    let newColor;  // 변함
    if(currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

//////////////// 같은 결과
// CSS
// .active {
//     color: tomato;
// }

// JS
function handleTitleClick() {
    if(h1.className === "active") {
        h1.className = "";
    } else {
        h1.className = "active";
    }
}

function handleTitleClick() {
    const clickedClass = "clicked"   // 변수를 선언함으로서 에러발생을 줄임
    if(h1.className === clickedClass) {
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
}
/////////////////

//////////////////////////////////////////////////////////////////
// sexy-font를 유지하면서 clicked를 추가, 삭제, 추가하는 방법
//CSS
// .clicked {
//     color: tomato;
// }

// .sexy-font {
//     font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
// }

//JS
function handleTitleClick() {
    const clickedClass = "clicked"   // 변수를 선언함으로서 에러발생을 줄임
    if(h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}
// classList : 말그대로 class들의 목록으로 작업할수 있게 허용해줌
// .contains : 포함
// .remove : 지움
// .add : 추가

// 같은 결과, 코드를 확연히 줄일수 있다.
function handleTitleClick() {
    h1.classList.toggle("clicked")
}

//////////////////////////////////////////////////////////////////
// querySelector() : element를 CSS방식으로 검색할수 있음

//const h1 = document.querySelector("div.hello:first-child h1");

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


//////////////////////////////////////////////////////////////////
//#4.0
// 같은결과 다른 코드
//const loginForm = document.getElementById("login-form");
//const loginInput = loginForm.querySelector("input");
//const loginbutton = loginForm.querySelector("button");

// 같은결과 다른 코드, 코드 줄임
//const loginForm = document.getElementById("login-form");
//const loginForm = document.querySelector("#login-form");

// const loginInput = document.querySelector("#login-form input");
// const loginbutton = document.querySelector("#login-form button");

// function onLoginBtnClick() {
//     console.log(loginInput.value)
// }

// loginbutton.addEventListener("click", onLoginBtnClick)

//////////////////////////////////////////////////////////////////
// #4.1
// const loginInput = document.querySelector("#login-form input");
// const loginbutton = document.querySelector("#login-form button");

// function onLoginBtnClick() {
//     const username = loginInput.value;
//     if(username === ""){
//         alert("Please write your name.");
//     } else if(username.length > 15) {
//         alert("Your name is too long.");
//     }
// }

// loginbutton.addEventListener("click", onLoginBtnClick)

// HTML <form>태그를 사용하면서 자바스크립트에 코드가 간결해짐
// const loginInput = document.querySelector("#login-form input");
// const loginbutton = document.querySelector("#login-form button");

// function onLoginBtnClick() {
//     const username = loginInput.value;
//     console.log(username);
// }

// loginbutton.addEventListener("click", onLoginBtnClick)

//////////////////////////////////////////////////////////////////
// #4.2/3
// preventDefault()
// 브라우저에서 기본적으로 발생하는 이벤트/ 기본동작을 막아줌
// a 태그를 눌렀을때도 href 링크로 이동하지 않게 할 경우
// form 안에 submit 역할을 하는 버튼을 눌렀어도 새로 실행하지 않게 하고싶을 경우 (submit은 작동됨)

// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");

// const link = document.querySelector("a");

// function onLoginSubmit(event) {
//     event.preventDefault();
//     console.log(loginInput.value);
// }

// function handleLinkclick(event) {
//     event.preventDefault();
//     console.dir(event);
// }

// loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkclick);

//////////////////////////////////////////////////////////////////
// # 4.4
// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";

// function onLoginSubmit(event) {
//     event.preventDefault();
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     const username = loginInput.value;
//     greeting.innerText = "Hello " + username;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// loginForm.addEventListener("submit", onLoginSubmit);


// 같은 결과, 이전방식과 요즘방식
//greeting.innerText = "Hello " + username;
//greeting.innerText = `Hello ${username}`;

// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";

// function onLoginSubmit(event) {
//     event.preventDefault();
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     const username = loginInput.value;
//     greeting.innerText = `Hello ${username}`;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// loginForm.addEventListener("submit", onLoginSubmit);

//////////////////////////////////////////////////////////////////
// # 4.5
// localStorage : 브라우저에 뭔가를 저장할 수 있게 해줌, 나중에 가져다 사용할수 있음
// localStorage.setItem("Key", "Value") // Application> Local Storage에 Key값과 Value값을 저장
// localStorage.getItem("Key") // 입력되어있는 value 값을 출력
// localStorage.removeItem("Key") // Application> Local Storage에 저장되어있는 값 삭제

// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";

// function onLoginSubmit(event) {
//     // 브라우저의 기본동작을 막아줌
//     event.preventDefault();
//     // form에 hidden이라는 class를 추가
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     // loginInput의 값을 변수에 저장
//     const username = loginInput.value;
//     // Application> Local Storage에 Key값과 Value값을 저장
//     localStorage.setItem("username", username);
//     // 기본적으로 비어있는 h1인 greeting을 가져다가 hello username이라는 텍스트 출력
//     greeting.innerText = `Hello ${username}`;
//     // h1에서 hidden이라는 class를 삭제
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// loginForm.addEventListener("submit", onLoginSubmit);


//////////////////////////////////////////////////////////////////
// # 4.6
// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";
// const USERNAME_KEY = "username"

// function onLoginSubmit(event) {
//     // 브라우저의 기본동작을 막아줌
//     event.preventDefault();
//     // form에 hidden이라는 class를 추가
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     // loginInput의 값을 변수에 저장
//     const username = loginInput.value;
//     // Application> Local Storage에 Key값과 Value값을 저장
//     localStorage.setItem(USERNAME_KEY, username);
//     // 기본적으로 비어있는 h1의 id=greeting을 가져다가 hello username이라는 텍스트 출력
//     greeting.innerText = `Hello ${username}`;
//     // h1에서 hidden이라는 class를 삭제
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// function paintGreetings() {}

// // Application> Local Storage에 저장되어있는 값(유저정보)을 변수에 저장
// // Application> Local Storage에 저장된 값이 없으면 null반환, 이를 변수에 저장
// const savedUsername = localStorage.getItem(USERNAME_KEY);

// // 만약 avedUsername값이 null값이면
// if(savedUsername === null) {
//     // show the form
//     // form의 hidden class명을 지움
//     loginForm.classList.remove(HIDDEN_CLASSNAME);
//     loginForm.addEventListener("submit", onLoginSubmit);
// } else {
//     // show the greetings
//     // h1의 id = greeting을 가져다가 hello savedUsername("username")이라는 텍스트 출력
//     greeting.innerText = `Hello ${savedUsername}`;
//     // h1의 hidden class명을 지움
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// 너무 복작해짐. 중복되는 부분을 함수로 만듬

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

//////////////////////////////////////////////////////////////////
// 5.0 clock.js
// setInterval() : 어떤 코드를 일정한 시간 간격을 두고 반복해서 실행하고 싶을 때 사용
// setInterval(실행할코드를 답고있는함수, 반복주기를 밀리초(ms)단위)
// ex) setInterval(sayHello, 5000); // 5초마다 sayHello 실행

// const clock = document.querySelector("h2#clock");

// function sayHello() {
//     console.log("hello");
// }

// setInterval(sayHello, 5000);

//////////////////////////////////////////////////////////////////
// 5.1 clock.js
// setTimeout() : 어떤 코드를 바로 실행하지 않고 일정 시간 기다린 후 실행해야하는 경우 사용
// setTimeout(실행할 코드를 담고 있는 함수, 지연 시간을 밀리초(ms) 단위)

// Date 객체를 사용하여 매 순간 변화하는 시간과 날짜에 관한 정보를 손쉽게 얻을 수 있다.
// 연월일, 시분초의 정보와 함께 밀리초(millisecond)의 정보도 함께 제공
// 정리링크 https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-Date-%EB%A9%94%EC%86%8C%EB%93%9C-%EC%A0%95%EB%A6%AC#date_constructor

// const clock = document.querySelector("h2#clock");

// function getClock() {
//     // 현재시간을 변수에 저장
//     const date = new Date();
//     // 현재 시:분:초를 clock("h2#clock")변수의 텍스트로 출력
//     clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
// }

// // 즉시호출
// getClock()
// // getClock함수를 1초마다 반복
// setInterval(getClock, 1000); 

//////////////////////////////////////////////////////////////////
// 5.2 clock.js
// padStart() : 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환
//              채워넣기는 대상 문자열의 시작(좌측)부터 적용
// string.padStart(목표길이, 채울 값)
// ex) "1".padStart(2,"0"); --> 01 출력함
// padEnd()함수 string.padEnd(목표길이, 채울 값) // 문자열 끝부터 채워짐
// ex) "1".padEnd(2,"0"); --> 10 출력함

const clock = document.querySelector("h2#clock");

function getClock() {
    // 현재시간을 변수에 저장
    const date = new Date();
    // 현재 시, 분, 초를 구하고 두자리 형식으로 바꾸어 변수에 저장
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // clock("h2#clock")변수의 텍스트로 출력
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

// 즉시호출
getClock()
// getClock함수를 1초마다 반복
setInterval(getClock, 1000); 

//////////////////////////////////////////////////////////////////
// #6.0 quotes.js
// 배열 첫번째 값을 콘솔에 출력하기
console.log(quotes[0]);
// Math.random() : 0=< x <1 값을 랜덤으로 출력함.
// round() : 소수를 가장가까운 정수로 출력. 반올림
// ceil() : 숫자를 천장까지 높여줌. 올림
// floor() : 숫자를 바닥까지 내려줌. 버림

// 명언 배열
const quotes = [
    {
        quote : "멈춰서도 괜찮아, 아무 이유도 모르는 채 달릴 필요 없어. 꿈이 없어도 괜찮아, 잠시 행복을 느낄 네 순간들이 있다면.",
        author : "낙원",
    },
    {
        quote : "해가 뜨기 전 새벽이 가장 어두우니까 먼 훗날에 넌 지금의 널 절대로 잊지 마 지금 니가 어디 서 있든 잠시 쉬어가는 것일 뿐 포기하지 마 알잖아 너무 멀어지진 마 tomorrow.",
        author : "tomorrow",
    },
    {
        quote : "내가 나인 게 싫은 날 영영 사라지고 싶은 날 문을 하나 만들자 너의 맘 속에다 그 문을 열고 들어가면 이 곳이 기다릴 거야 믿어도 괜찮아 널 위로해줄 Magic Shop.",
        author : "Magic Shop",
    },
    {
        quote : "어쩌면 누군가를 사랑하는 것보다 더 어려운 게 나 자신을 사랑하는 거야 솔직히 인정할 건 인정하자 니가 내린 잣대들은 너에게 더 엄격하단 걸 니 삶 속의 굵은 나이테 그 또한 너의 일부, 너이기에 이제는 나 자신을 용서하자 버리기엔 우리 인생은 길어 미로 속에선 날 믿어 겨울이 지나면 다시 봄은 오는 거야.",
        author : "Answer : Love Myself",
    },
    {
        quote : "I'm the one I should love in this world 빛나는 나를 소중한 내 영혼을 이제야 깨달아 so I love me 좀 부족해도 너무 아름다운 걸.",
        author : "Epiphany",
    },
    {
        quote : "You got me 난 너를 보며 꿈을 꿔 I got you 칠흑 같던 밤들 속 서로가 본 서로의 빛 같은 말을 하고 있었던 거야 우린 가장 깊은 밤에 더 빛나는 별빛.",
        author : "소우주 (Mikrokosmos)​",
    },
    {
        quote : "난 날 믿어 내 등이 아픈 건 날개가 돋기 위함인 걸 날 널 믿어 지금은 미약할지언정 끝은 창대한 비약일 걸 Fly, fly up in the sky fly, fly get 'em up high 니가 택한 길이야 새꺄 쫄지 말어 이제 고작 첫 비행인 걸 uh.",
        author : "Outro : Wings",
    },
    {
        quote : "고마워 내가 나이게 해줘서 이 내가 날게 해줘서 이런 내게 날갤 줘서 꼬깃하던 날 개 줘서 답답하던 날 깨줘서 꿈 속에만 살던 날 깨워줘서 널 생각하면 날 개어서 슬픔 따윈 나 개 줬어 (Thank you 우리가 돼 줘서).",
        author : "Save ME",
    },
    {
        quote : "Like an echo in the forest 하루가 돌아오겠지 아무 일도 없단 듯이 Yeah, life goes on Like an arrow in the blue sky 또 하루 더 날아가지 On my pillow, on my table Yeah, life goes on like this again.",
        author : "Life Goes On",
    },
    {
        quote : "날아갈 수 없음 뛰어 Today we will survive 뛰어갈 수 없음 걸어 Today we will survive 걸어갈 수 없음 기어 기어서라도 gear up 겨눠 총! 조준! 발사!",
        author : "Not Today",
    }   
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// 배열을 랜던으로 가져와 todaysQuaote 변수에 저장
const todaysQuaote = quotes[Math.floor(Math.random() * quotes.length)];

// quote의 Text에 배열을 랜던으로 가져와 todaysQuaote 변수에 저장된 값을 넣음
quote.innerText = todaysQuaote.quote;
author.innerText = todaysQuaote.author;


//////////////////////////////////////////////////////////////////
// #6.1 background.js
// 배열에서 랜덤으로 가져온것을 콘솔에 출력
console.log(chosenImage);

//createElement() : HTML요소를 추가하는 코드

// 코드 문자열형식으로 만들기
bgImage.src = `img/${chosenImage}`;

console.log(bgImage); // 출력
// <img scr = "img/1.jpg"> //형식으로 보며임

//appendChild() : body에 html을 추가할떄 사용

// 이미지 배열
const images = [ "0.jpg", "1.jpg", "2.jpg" ];

// 배열을 랜던으로 가져와 chosenImage 변수에 저장
const chosenImage = images[Math.floor(Math.random() * images.length)];

// HTML요소를 추가하는 코드 - img
const bgImage = document.createElement("img");

// 코드 문자열형식으로 만들기
bgImage.src = `img/${chosenImage}`;

// 문자엻형식의 코드를 바디에 찾아가 넣기
document.body.appendChild(bgImage);