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