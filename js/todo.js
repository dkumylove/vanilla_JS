const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

//
function handleToDoSubmit(event){
    // 브라우저의 기본동작을 막아줌
    event.preventDefault();
    // Input.value 지우기전 값을 저장
    const newTodo = toDoInput.value;
    // toDoInput값을 ""으로 변경 Input.value 값을 지움
    toDoInput.value = "";
}

// submit이벤트가 일어날떄 handleToDoSubmit 실행
toDoForm.addEventListener("submit", handleToDoSubmit)