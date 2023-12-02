// 이미지 배열
const images = [ "0.jpg", "1.jpg", "2.jpg" ];

// 배열을 랜던으로 가져와 chosenImage 변수에 저장
const chosenImage = images[Math.floor(Math.random() * images.length)];

// HTML요소를 추가하는 코드 - img
const bgImage = document.querySelector('.background-img');

// 코드 문자열형식으로 만들기
bgImage.src = `img/${chosenImage}`;

// 문자엻형식의 코드를 바디에 찾아가 넣기
document.body.appendChild(bgImage);