const loginInput = document.querySelector("#login-form input");
const loginbutton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    console.log(loginInput.value)
}

loginbutton.addEventListener("click", onLoginBtnClick)
