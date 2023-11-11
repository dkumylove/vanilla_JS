const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

// toDos array를 localStorage에 넣는 함수
function seveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

// todo를 삭제하는 함수
function deleteToDo(event) {
    // event에서 terget은 html element, parentElement = 클릭된 element의 부모
    const li = event.target.parentElement;
    li.remove();
}

// todo를 그리는 역할을 담당할 함수
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

// submit이벤트가 일어날떄 handleToDoSubmit 실행
toDoForm.addEventListener("submit", handleToDoSubmit)