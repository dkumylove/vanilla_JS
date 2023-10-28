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
// 배열의 값을 불러올때는 배열명[자리값]을 입력하게 된다. daysOfWeek1[3] = "thu"
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