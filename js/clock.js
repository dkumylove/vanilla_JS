const clock = document.querySelector("h2#clock");

function getClock() {
    // 현재시간을 변수에 저장
    const date = new Date();
    // 현재 시:분:초를 clock("h2#clock")변수의 텍스트로 출력
    clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

// 즉시호출
getClock()
// getClock함수를 1초마다 반복
setInterval(getClock, 1000); 