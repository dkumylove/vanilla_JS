const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

// todo를 그리는 역할을 담당할 함수
function paintToDo(newTodo) {
    // HTML요소를 추가 - li
    const li = document.createElement("li");
    // HTML요소를 추가 - span
    const span = document.createElement("span")
    // 자식 목록 끝에 매개변수 span 전달/ li의 자식노드 span이됨
    li.appendChild(span);
    // newTodo의 값을 span의 안에 Text로 넣기
    span.innerText = newTodo;
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
    paintToDo(newTodo);
}

// submit이벤트가 일어날떄 handleToDoSubmit 실행
toDoForm.addEventListener("submit", handleToDoSubmit)