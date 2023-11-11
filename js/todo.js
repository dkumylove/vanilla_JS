const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

// 5.toDos array를 localStorage에 넣는 함수
function seveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 4.todo를 삭제하는 함수
function deleteToDo(event) {
    // event에서 terget은 html element, parentElement = 클릭된 element의 부모
    const li = event.target.parentElement;
    li.remove();
}

// 1.todo를 그리는 역할을 담당할 함수
function paintToDo(newTodo) {
    // HTML요소를 추가 - li
    const li = document.createElement("li");
    // HTML요소를 추가 - span
    const span = document.createElement("span");
    // newTodo의 값을 span의 안에 Text로 넣기
    span.innerText = newTodo;
    // HTML요소를 추가 - button
    const button = document.createElement("button");
    // ❌ 값을 button의 안에 Text로 넣기
    button.innerText = "❌";
    // click이벤트 발생시 deleteToDo실행
    button.addEventListener("click", deleteToDo);
    // 자식 목록 끝에 매개변수 span 전달/ li의 자식노드 span, button이됨
    li.appendChild(span);
    li.appendChild(button);
    // toDoList(id="todo-list")의 자식노드 li
    toDoList.appendChild(li);
}

// 2.Submit버튼을 눌렀을 떄 실행되는 것을 모아 놓은 함수(계속추가)
function handleToDoSubmit(event) {
    // 브라우저의 기본동작을 막아줌
    event.preventDefault();
    // Input.value 지우기전 값을 저장
    const newTodo = toDoInput.value;
    // toDoInput값을 ""으로 변경 Input.value 값을 지움
    toDoInput.value = "";
    // toDos array를 가져와 newTodo를 push
    toDos.push(newTodo);
    // newTodo를 그린다.
    paintToDo(newTodo);
    // toDos array를 localStorage 저장
    seveToDos();
}

// 3. submit이벤트가 일어날떄 handleToDoSubmit 실행
toDoForm.addEventListener("submit", handleToDoSubmit);

// 6. localStorage 저장되어있는 값을 변수에 담는다.
const savedToDos = localStorage.getItem(TODOS_KEY);
// 기본문자열값 출력(test)
//console.log(seveToDos);

// 7. savedToDos(localStorage가저온 값)가 null 아니면
if(seveToDos !== null) {
    // 형변환 실행해서 변수에 담는다.
    const parsedToDos = JSON.parse(savedToDos);
    // 형변환한 json값 출력(test)
    //console.log(parsedToDos);
    // parsedToDos 형변환된 배열값에 각각 적용하여 "메시지" + item 값을 콘솔에 출력
    parsedToDos.forEach((item) => console.log("this is the turn of", item));
}